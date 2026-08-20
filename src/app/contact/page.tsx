import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <MarketingShell><section className="page-section contact-page"><SectionHeading eyebrow="Get in touch" title="Start with the right channel.">Estimate requests stay structured; general questions remain simple.</SectionHeading><div className="contact-grid"><form className="panel form-panel"><h2>General message</h2><label>Name<input name="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" placeholder="you@example.ca" required /></label><label>Subject<input name="subject" placeholder="General question" /></label><label>Message<textarea name="message" placeholder="How can we help?" rows={5} required /></label><button className="button primary" type="submit">Send message</button></form><aside className="contact-aside"><a className="contact-method" href="tel:+16132207353"><Phone /><span><strong>Call DutchGreen</strong><small>613 220 7353 • verify before launch</small></span></a><a className="contact-method" href="mailto:info@example.ca"><Mail /><span><strong>Email</strong><small>Concept address • replace before launch</small></span></a><div className="project-prompt"><div><span className="eyebrow">Project inquiry</span><h2>Planning a landscape project?</h2><p>The estimate flow is the most useful path for scope, timing, location and photos.</p><Link className="button primary" href="/estimate">Request an estimate</Link></div><div><Image src="/images/patio.jpg" alt="Synthetic patio concept" fill sizes="180px" /></div></div></aside></div></section></MarketingShell>;
}
