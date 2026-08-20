import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Privacy principles" };

export default function PrivacyPage() {
  const items = [["Collect less", "Request only the details needed to review a project."], ["Protect uploads", "Private project photos use controlled access and retention."], ["Explain AI use", "Clearly label AI assistance and human review."], ["Give control", "Support access, correction, export and deletion requests."]];
  return <MarketingShell><section className="policy-page"><SectionHeading eyebrow="Data practices" title="Privacy principles for the production app.">Final policy requires client and legal review.</SectionHeading><div className="policy-panel"><h2>Plain-language commitments</h2><ol>{items.map(([title, copy]) => <li key={title}><span>{String(items.findIndex((x) => x[0] === title) + 1).padStart(2, "0")}</span><div><strong>{title}</strong><p>{copy}</p></div></li>)}</ol><small>Last revision: predevelopment concept • not a legal policy</small></div></section></MarketingShell>;
}
