import assert from "node:assert/strict";
import test from "node:test";
import { handleEstimate } from "../../src/features/estimates/submit.ts";

const valid = {
  service: "patios", timeline: "This season", postalCode: "K2J 4Z8",
  description: "Replace the patio and improve drainage.",
  budget: "$10k–$25k", name: "Alex Morgan", email: "alex@example.ca",
  phone: "613 555 0142", contact: "Email", consent: true,
};

test("estimate boundary validates and returns an honest local reference", () => {
  const decision = handleEstimate(valid, "create-once", JSON.stringify(valid).length);
  assert.equal(decision.status, 201);
  assert.match(decision.body.reference, /^DG-\d{4}$/);
  assert.equal(decision.body.persisted, false);
});

test("estimate boundary returns the same reference for one idempotency key", () => {
  const first = handleEstimate(valid, "same-key", JSON.stringify(valid).length);
  const second = handleEstimate(valid, "same-key", JSON.stringify(valid).length);
  assert.equal(first.body.reference, second.body.reference);
  assert.equal(second.body.duplicate, true);
});

test("estimate boundary rejects invalid input", () => {
  const decision = handleEstimate({ ...valid, email: "not-an-email" }, "invalid-email", 120);
  assert.equal(decision.status, 422);
});
