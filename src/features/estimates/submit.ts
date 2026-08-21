import { estimateSchema } from "./schema.ts";

type Decision = { status: number; body: Record<string, unknown> };
const requests = new Map<string, { reference: string; createdAt: number }>();

export function handleEstimate(body: unknown, key: string | null, size: number): Decision {
  if (size > 32_000) return { status: 413, body: { error: "Request is too large." } };
  if (!key || key.length > 100) return { status: 400, body: { error: "A valid idempotency key is required." } };
  const prior = requests.get(key);
  if (prior) return { status: 200, body: { reference: prior.reference, duplicate: true } };
  const result = estimateSchema.safeParse(body);
  if (!result.success) {
    return { status: 422, body: { error: result.error.issues[0]?.message ?? "Check the request details." } };
  }
  const reference = `DG-${String(1049 + requests.size).padStart(4, "0")}`;
  requests.set(key, { reference, createdAt: Date.now() });
  return { status: 201, body: { reference, persisted: false } };
}
