import Image from "next/image";
import { Plus } from "lucide-react";
import { services } from "@/lib/demo-data";
import { StatusPill } from "@/components/status-pill";

export default function PortalServicesPage() {
  return <div className="portal-page"><div className="portal-page-heading"><p>Approved services, discovery questions and default estimate settings.</p><button className="button primary"><Plus /> Add service</button></div><section className="panel table-panel"><div className="responsive-table"><table><thead><tr><th>Service</th><th>Public description</th><th>Default duration</th><th>Price mode</th><th>Status</th><th>Actions</th></tr></thead><tbody>{services.map((service, index) => <tr key={service.slug}><td data-label="Service"><span className="customer-cell"><Image src={service.image} alt="" width={38} height={38} /><strong>{service.name}</strong></span></td><td data-label="Public description">{service.short.split(".")[0]}</td><td data-label="Default duration">Site dependent</td><td data-label="Price mode">Custom</td><td data-label="Status"><StatusPill>{index === services.length - 1 ? "Draft" : "Published"}</StatusPill></td><td data-label="Actions"><button className="text-link">Edit</button></td></tr>)}</tbody></table></div><p className="table-note">Public copy and AI answers share one approved content source.</p></section></div>;
}
