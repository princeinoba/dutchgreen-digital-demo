import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";

export const metadata: Metadata = { title: "Estimate request received" };

export default async function EstimateSuccessPage({ searchParams }: { searchParams: Promise<{ reference?: string }> }) {
  const { reference } = await searchParams;
  const safeReference = /^DG-\d{4}$/.test(reference ?? "") ? reference : "DG-DEMO";
  return <MarketingShell><section className="success-wrap"><div className="success-card panel"><span className="success-icon"><Check /></span><h1>Your project request is in.</h1><p>Reference {safeReference}. A demonstration request was validated, but this local portfolio does not persist or notify real staff.</p><div className="next-review"><div className="mini-photo"><Image src="/images/patio.jpg" alt="" fill sizes="86px" /></div><span><strong>Next: staff review</strong><small>The office reviews details and contacts you with the next step. No appointment is booked.</small></span></div><div className="button-row"><Link className="button secondary" href="/services">View services</Link><Link className="button primary" href="/estimate">Submit another project</Link></div></div></section></MarketingShell>;
}
