import assert from "node:assert/strict";
import test from "node:test";
import { canTransition, formatCad, inventoryBalance } from "../../src/lib/domain.ts";
import { estimateSchema } from "../../src/features/estimates/schema.ts";

test("money formats from integer Canadian cents", () => {
  assert.equal(formatCad(128500), "$1,285.00");
  assert.throws(() => formatCad(12.5), /integer cents/);
});

test("lifecycle allows the next state and rejects jumps", () => {
  assert.equal(canTransition("lead", "new", "qualified"), true);
  assert.equal(canTransition("lead", "new", "estimate_sent"), false);
  assert.equal(canTransition("job", "in_progress", "completed"), true);
});

test("inventory is derived from immutable movements", () => {
  assert.equal(inventoryBalance([100, -12, -8, 4]), 84);
});

test("estimate validation normalizes email and Ottawa postal code", () => {
  const result = estimateSchema.parse({
    service: "patios", timeline: "This season", postalCode: "k2j 4z8",
    description: "Replace the patio and improve drainage.",
    budget: "$10k–$25k", name: "Alex Morgan", email: " ALEX@EXAMPLE.CA ",
    phone: "613 555 0142", contact: "Email", consent: true,
  });
  assert.equal(result.email, "alex@example.ca");
  assert.equal(result.postalCode, "K2J 4Z8");
});

test("estimate validation rejects an unsupported postal code", () => {
  const result = estimateSchema.safeParse({
    service: "patios", timeline: "This season", postalCode: "M5V 2T6",
    description: "Replace the patio and improve drainage.",
    name: "Alex Morgan", email: "alex@example.ca", phone: "613 555 0142",
    contact: "Email", consent: true,
  });
  assert.equal(result.success, false);
});
