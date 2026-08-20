import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Ruler, Shovel, CalendarCheck, ClipboardCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { MarketingShell } from "@/components/marketing-shell";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/demo-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.name ?? "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const steps = [
    ["Share your project", "Tell us what, where and when.", Ruler],
    ["Site consultation", "Clear route, details and site access.", Shovel],
    ["Scope & estimate", "Reviewable work, materials and next steps.", ClipboardCheck],
    ["Build scheduling", "Crew, milestones and weather plan.", CalendarCheck],
  ] as const;
  return <MarketingShell active="Services"><section className="detail-hero"><div className="detail-photo"><Image src={service.image} alt={`Synthetic ${service.name.toLowerCase()} concept`} fill priority sizes="(max-width: 800px) 100vw, 48vw" /><span className="photo-label">Synthetic concept</span></div><div className="detail-copy"><span className="eyebrow pill">{service.eyebrow}</span><h1>A gathering place designed around you.</h1><p>{service.description}</p><div className="detail-actions"><Link className="button primary" href={`/estimate?service=${service.slug}`}>Request {service.name.toLowerCase()} estimate</Link><aside><strong>Typical discovery inputs</strong><ul><li><Check /> Approximate dimensions</li><li><Check /> Access and drainage</li><li><Check /> Target season and budget range</li></ul></aside></div></div></section><section className="next-steps"><SectionHeading eyebrow="A clearer decision" title="Know what happens next." /><div className="step-grid">{steps.map(([title, copy, Icon], index) => <article key={title}><span className="step-number">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><h2>{title}</h2><p>{copy}</p></article>)}</div></section></MarketingShell>;
}
