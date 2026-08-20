export const lifecycle = {
  lead: ["new", "qualified", "site_visit", "estimate_sent", "won", "lost"],
  job: ["scheduled", "confirmed", "in_progress", "completed", "cancelled"],
  invoice: ["draft", "sent", "overdue", "paid", "void"],
} as const;

export function canTransition(flow: keyof typeof lifecycle, from: string, to: string) {
  const states = lifecycle[flow] as readonly string[];
  const current = states.indexOf(from);
  const target = states.indexOf(to);
  if (current < 0 || target < 0 || current === target) return false;
  if (to === "lost" || to === "cancelled" || to === "void") return true;
  return target === current + 1;
}

export function formatCad(cents: number) {
  if (!Number.isInteger(cents)) throw new TypeError("Money must be stored as integer cents");
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(cents / 100);
}

export function inventoryBalance(movements: readonly number[]) {
  if (!movements.every(Number.isInteger)) throw new TypeError("Inventory movements must use integer base units");
  return movements.reduce((total, movement) => total + movement, 0);
}
