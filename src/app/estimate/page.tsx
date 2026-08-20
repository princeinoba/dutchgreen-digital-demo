import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { EstimateForm } from "@/components/estimate-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Request an estimate" };

export default async function EstimatePage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return <MarketingShell><section className="estimate-page"><SectionHeading eyebrow="Request an estimate" title="Tell us what you want to build.">A focused three-step flow replaces phone-only lead capture.</SectionHeading><EstimateForm initialService={service} /></section></MarketingShell>;
}
