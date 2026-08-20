import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Frequently asked questions" };

const faqs = [
  ["What information should I include in an estimate request?", "Share the service, location, preferred timing, a short description and any photos that safely show the site."],
  ["Do you provide landscape design and construction?", "This concept supports both discovery and construction workflows. Final service claims require client approval."],
  ["Which parts of Ottawa do you serve?", "Ottawa-area service coverage is shown for demonstration only and must be confirmed before launch."],
  ["How are project timelines confirmed?", "A project timeline is confirmed only after staff review, a site consultation and an accepted estimate."],
  ["Can I upload photos of the existing space?", "Yes in the production architecture, through private storage with file validation and metadata removal."],
  ["Does the AI assistant provide a final price?", "No. It may summarize details and identify missing information, but staff must prepare and approve every estimate."],
];

export default function FaqPage() {
  return <MarketingShell active="FAQ"><section className="page-section faq-page"><SectionHeading eyebrow="Helpful answers" title="Before you request an estimate.">Answers should be reviewed by DutchGreen and searchable by the AI guide.</SectionHeading><div className="faq-grid">{faqs.map(([question, answer], index) => <details key={question}><summary><span className="faq-thumb"><Image src={["/images/patio.jpg", "/images/team.jpg", "/images/walkway.jpg", "/images/team.jpg", "/images/driveway.jpg", "/images/team.jpg"][index]} alt="" fill sizes="72px" /></span><strong>{question}</strong></summary><p>{answer}</p></details>)}</div><aside className="guide-cta"><span><strong>Still deciding?</strong> Ask GreenGuide or send a project request.</span><Link className="button primary" href="/contact">Ask GreenGuide</Link></aside></section></MarketingShell>;
}
