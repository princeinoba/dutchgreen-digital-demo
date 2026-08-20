import { NextResponse } from "next/server";
import { handleEstimate } from "@/features/estimates/submit";

export async function POST(request: Request) {
  const size = Number(request.headers.get("content-length") ?? 0);
  const key = request.headers.get("idempotency-key");
  const body: unknown = await request.json().catch(() => null);
  const decision = handleEstimate(body, key, size);
  return NextResponse.json(decision.body, { status: decision.status });
}
