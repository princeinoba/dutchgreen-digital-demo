import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/demo-data";

export const metadata: Metadata = { title: "Landscaping services" };

export default function ServicesPage() {
  return <MarketingShell active="Services"><section className="page-section"><SectionHeading eyebrow="What we build" title="Landscaping that works beautifully.">Six focused service paths replace one repetitive scroll.</SectionHeading><div className="services-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section></MarketingShell>;
}
