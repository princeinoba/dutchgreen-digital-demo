import type { LucideIcon } from "lucide-react";

export function StatCard({ label, value, trend, icon: Icon, tone = "green" }: { label: string; value: string; trend: string; icon: LucideIcon; tone?: string }) {
  return <article className="stat-card"><span className={`stat-icon ${tone}`}><Icon aria-hidden="true" /></span><div><small>{label}</small><strong>{value}</strong><span className={tone}>{trend}</span></div></article>;
}
