import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing-shell";

export const metadata: Metadata = { title: "About the concept" };

export default function AboutPage() {
  return <MarketingShell active="About"><section className="about-layout"><div className="about-photo"><Image src="/images/team.jpg" alt="Synthetic image of three landscape professionals reviewing a plan" fill priority sizes="(max-width: 800px) 100vw, 44vw" /><span className="photo-label">Team or owner-approved image</span></div><div className="about-copy"><span className="eyebrow">Built locally</span><h1>Practical craft. Thoughtful design.</h1><p>A client-approved origin story belongs here. The business has served the Ottawa region since 1984, but claims and team information remain subject to client confirmation.</p><Link className="button primary" href="/estimate">Meet about your project</Link><div className="about-stats"><div><strong>40+</strong><span>years claim to verify</span></div><div><strong>6</strong><span>core service paths</span></div><div><strong>1</strong><span>clear estimate journey</span></div></div><blockquote>“Use real, approved testimonials here—never fabricated reviews.”<cite>Portfolio concept guidance</cite></blockquote></div></section></MarketingShell>;
}
