import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, CircleDollarSign, FileText, Send } from "lucide-react";
import { invoices } from "@/lib/demo-data";
import { StatCard } from "@/components/stat-card";
import { StatusPill } from "@/components/status-pill";

export default function InvoicesPage() {
  return <div className="portal-page"><section className="kpi-grid"><StatCard label="Draft" value="$12.6k" trend="5 invoices" icon={FileText} tone="gray" /><StatCard label="Sent" value="$18.2k" trend="4 awaiting payment" icon={Send} tone="blue" /><StatCard label="Overdue" value="$4.2k" trend="1 needs follow-up" icon={AlertTriangle} tone="red" /><StatCard label="Paid this month" value="$36.8k" trend="8 invoices" icon={CircleDollarSign} /></section><section className="panel table-panel"><div className="panel-heading"><h2>Invoice register</h2><div className="filter-chips compact"><button className="active">All</button><button>Outstanding</button></div></div><div className="responsive-table"><table><thead><tr><th>Invoice</th><th>Customer</th><th>Job</th><th>Due</th><th>Status</th><th>Total</th><th>Delivery</th></tr></thead><tbody>{invoices.map((invoice) => <tr key={invoice.id}><td data-label="Invoice"><Link className="table-id" href={`/directors-ai-workspace/invoices/${invoice.id}`}>{invoice.id}</Link></td><td data-label="Customer">{invoice.customer}</td><td data-label="Job"><Image src={invoice.image} alt="" width={34} height={34} />{invoice.job}</td><td data-label="Due">{invoice.due}</td><td data-label="Status"><StatusPill>{invoice.status}</StatusPill></td><td data-label="Total"><strong>{invoice.total}</strong></td><td data-label="Delivery">{invoice.delivery}</td></tr>)}</tbody></table></div></section></div>;
}
