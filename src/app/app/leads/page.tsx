import Image from "next/image";
import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { StatusPill } from "@/components/status-pill";
import { leads } from "@/lib/demo-data";

export default function LeadsPage() {
  return <div className="portal-page"><div className="portal-page-heading"><div><p>Track every request from first contact to an accepted estimate.</p></div><button className="button primary"><Plus /> Add lead</button></div><section className="panel table-panel"><div className="table-toolbar"><label><Search /><span className="sr-only">Search leads</span><input placeholder="Search name, email or reference…" /></label><div className="filter-chips compact"><button className="active">All 29</button><button>New 14</button><button>Qualified 9</button><button>Site visit 6</button></div></div><div className="responsive-table"><table><thead><tr><th>Reference</th><th>Contact</th><th>Service</th><th>Received</th><th>Source</th><th>Stage</th><th>Next action</th></tr></thead><tbody>{leads.map((lead) => <tr key={lead.id}><td data-label="Reference"><Link className="table-id" href={`/directors-ai-workspace/leads/${lead.id}`}>{lead.id}</Link></td><td data-label="Contact">{lead.customer}</td><td data-label="Service"><Image src={lead.image} alt="" width={34} height={34} />{lead.service}</td><td data-label="Received">{lead.received}</td><td data-label="Source">{lead.source}</td><td data-label="Stage"><StatusPill>{lead.stage}</StatusPill></td><td data-label="Next action"><Link className="text-link" href={`/directors-ai-workspace/leads/${lead.id}`}>{lead.next}</Link></td></tr>)}</tbody></table></div><div className="table-footer"><span>Showing 1–6 of 29</span><button className="button secondary small">Next page</button></div></section></div>;
}
