import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Our process" };

const stages = [["Tell us about it", "Clear scope, photos and next action."], ["Site consultation", "Crew route, details and site access."], ["Design & estimate", "Clear scope, status and next steps."], ["Schedule the work", "Crew, milestones and weather plan."], ["Build & handoff", "Clear finish, status and next action."]];

export default function ProcessPage() {
  return <MarketingShell active="Our process"><section className="page-section process-page"><SectionHeading eyebrow="From idea to completion" title="A process clients can follow.">The same timeline connects the public estimate journey to office operations.</SectionHeading><ol className="process-line">{stages.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{copy}</p></li>)}</ol><aside className="ai-callout"><div className="ai-badge">AI</div><div><strong>Optional AI estimate concierge</strong><p>Summarizes the homeowner&apos;s description, identifies missing information and prepares a staff-review brief. It never produces a binding price or schedules work without human approval.</p></div><div className="callout-photo"><Image src="/images/team.jpg" alt="Synthetic team consultation concept" fill sizes="180px" /></div><Link className="button primary" href="/estimate">Start estimate</Link></aside></section></MarketingShell>;
}
