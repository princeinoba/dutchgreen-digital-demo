import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Accessibility principles" };

export default function AccessibilityPage() {
  const items = [["Keyboard first", "Every action, dialog and schedule view has a visible keyboard path."], ["Visible focus", "Focus remains clear across light and dark interface areas."], ["Responsive layouts", "Tables become labelled cards without hiding essential information."], ["Reduced motion", "Respect user preferences and avoid essential motion."]];
  return <MarketingShell><section className="policy-page"><SectionHeading eyebrow="Inclusive access" title="Accessibility principles for the production app.">Target: WCAG 2.2 AA and test with real users.</SectionHeading><div className="policy-panel"><h2>Accessibility commitments</h2><ol>{items.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong><p>{copy}</p></div></li>)}</ol><small>Last revision: predevelopment concept • not a final policy</small></div></section></MarketingShell>;
}
