import Image from "next/image";
import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { StatusPill } from "@/components/status-pill";
import { jobs } from "@/lib/demo-data";

export default function JobsPage() {
  return <div className="portal-page"><div className="portal-page-heading"><p>Schedule, assign and track active field work.</p><button className="button primary"><Plus /> Create job</button></div><section className="panel table-panel"><div className="table-toolbar"><label><Search /><span className="sr-only">Search jobs</span><input placeholder="Search jobs, customers or addresses…" /></label><div className="filter-chips compact"><button className="active">All 42</button><button>Scheduled 12</button><button>In progress 4</button><button>Completed 26</button></div></div><div className="responsive-table"><table><thead><tr><th>Job</th><th>Date</th><th>Customer</th><th>Service</th><th>Crew</th><th>Status</th><th>Value</th></tr></thead><tbody>{jobs.map((job) => <tr key={job.id}><td data-label="Job"><Link className="table-id" href={`/directors-ai-workspace/jobs/${job.id}`}>{job.id}</Link></td><td data-label="Date">{job.date}</td><td data-label="Customer">{job.customer}</td><td data-label="Service"><Image src={job.image} alt="" width={34} height={34} />{job.service}</td><td data-label="Crew">{job.crew}</td><td data-label="Status"><StatusPill>{job.status}</StatusPill></td><td data-label="Value"><strong>{job.value}</strong></td></tr>)}</tbody></table></div></section></div>;
}
