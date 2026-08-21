import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/demo-data";

export function ServiceCard({ service }: { service: Service }) {
  return <article className="service-card"><div className="service-image"><Image src={service.image} alt={`Synthetic ${service.name.toLowerCase()} concept`} fill sizes="(max-width: 760px) 42vw, 14vw" /></div><div><h2>{service.name}</h2><p>{service.short}</p><Link className="text-link" href={`/services/${service.slug}`}>View service <span aria-hidden="true">→</span></Link></div></article>;
}
