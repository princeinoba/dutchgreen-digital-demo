import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, FileText, MoreHorizontal } from "lucide-react";
import { notFound } from "next/navigation";
import { jobs } from "@/lib/demo-data";
import { JobChecklist } from "@/components/job-checklist";
import { StatusPill } from "@/components/status-pill";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((item) => item.id === id);
  if (!job) notFound();
  return <div className="portal-page"><div className="detail-toolbar"><Link className="button secondary small" href="/directors-ai-workspace/jobs">← Back to jobs</Link><StatusPill>{job.status}</StatusPill><div className="toolbar-spacer" /><Link className="button secondary small" href="/directors-ai-workspace/invoices/INV-0108"><FileText /> Create invoice</Link><button className="icon-button" aria-label="More job actions"><MoreHorizontal /></button></div><div className="job-detail-grid"><section className="panel job-summary"><div className="job-photo"><Image src={job.image} alt="Synthetic site reference" fill sizes="220px" /><span className="photo-label">Site photo</span></div><div><h2>{job.service}</h2><p>{job.customer} · Barrhaven</p><dl><div><dt>Scheduled</dt><dd>{job.date}</dd></div><div><dt>Crew</dt><dd>{job.crew}</dd></div><div><dt>Value</dt><dd>{job.value}</dd></div></dl><h3>Project notes</h3><p>Protect adjacent planting bed; confirm disposal load before excavation.</p></div></section><section className="panel status-controls"><h2>Status controls</h2><div className="choice-chips vertical">{["Scheduled", "Confirmed", "In progress", "Completed"].map((status) => <label key={status}><input type="radio" name="status" defaultChecked={job.status === status} /><span>{status}</span></label>)}</div><button className="button primary"><Clock3 /> Update job</button></section><JobChecklist /><section className="panel detail-panel activity-panel"><div className="panel-heading"><h2>Activity & materials</h2><StatusPill>3 items</StatusPill></div>{[["10:34", "Crew checked in"], ["11:05", "12 yd³ aggregate allocated"], ["11:42", "Progress photo uploaded"]].map(([time, note]) => <div className="activity-row" key={time}><span><Check /></span><time>{time}</time><strong>{note}</strong></div>)}<label>Add note<textarea rows={3} placeholder="Write an internal update…" /></label></section></div></div>;
}
