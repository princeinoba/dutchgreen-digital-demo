import Image from "next/image";
import Link from "next/link";
import { Download, Send } from "lucide-react";
import { notFound } from "next/navigation";
import { invoices } from "@/lib/demo-data";
import { StatusPill } from "@/components/status-pill";

export default async function InvoiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const invoice = invoices.find((item) => item.id === id);
  if (!invoice) notFound();
  return <div className="portal-page"><div className="detail-toolbar"><Link className="button secondary small" href="/directors-ai-workspace/invoices">← Back to invoices</Link><StatusPill>{invoice.status}</StatusPill><div className="toolbar-spacer" /><button className="button secondary small"><Download /> Download</button><button className="button primary small"><Send /> Prepare send</button></div><div className="invoice-detail-grid"><section className="panel invoice-sheet"><header><div><span className="brand-mark">DG</span><h2>DutchGreen Demo</h2></div><div><span className="eyebrow">Invoice</span><strong>{invoice.id}</strong></div></header><div className="invoice-meta"><div><small>Bill to</small><strong>{invoice.customer}</strong><span>Ottawa, Ontario</span></div><div><small>Job</small><strong>{invoice.job}</strong><span>Due {invoice.due}</span></div><div className="invoice-photo"><Image src={invoice.image} alt="" fill sizes="120px" /></div></div><table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Total</th></tr></thead><tbody><tr><td>Landscape construction milestone</td><td>1</td><td>{invoice.total}</td><td>{invoice.total}</td></tr><tr><td>Approved materials allocation</td><td>1</td><td>$0.00</td><td>$0.00</td></tr></tbody></table><dl className="invoice-totals"><div><dt>Subtotal</dt><dd>{invoice.total}</dd></div><div><dt>HST</dt><dd>Included in concept total</dd></div><div><dt>Total</dt><dd>{invoice.total}</dd></div></dl><p>This portfolio invoice is synthetic and is not a demand for payment.</p></section><aside className="panel invoice-state"><h2>Delivery & status</h2><dl><div><dt>Status</dt><dd><StatusPill>{invoice.status}</StatusPill></dd></div><div><dt>Delivery</dt><dd>{invoice.delivery}</dd></div><div><dt>Audit history</dt><dd>Draft created by demo administrator</dd></div></dl><button className="button primary">Record status change</button></aside></div></div>;
}
