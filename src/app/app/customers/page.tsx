import Image from "next/image";
import Link from "next/link";
import { Download, Filter, Plus, Search } from "lucide-react";
import { customers } from "@/lib/demo-data";

export default function CustomersPage() {
  return <div className="portal-page"><div className="portal-page-heading"><p>One record for contact details, estimate history, jobs and invoices.</p><button className="button primary"><Plus /> Add customer</button></div><section className="panel table-panel"><div className="table-toolbar"><label><Search /><span className="sr-only">Search customers</span><input placeholder="Search customer, phone, email or address…" /></label><div className="button-row"><button className="button secondary small"><Download /> Export</button><button className="button secondary small"><Filter /> Filters</button></div></div><div className="responsive-table"><table><thead><tr><th>Customer</th><th>Phone</th><th>Email</th><th>Location</th><th>Jobs</th><th>Last activity</th></tr></thead><tbody>{customers.map((customer) => <tr key={customer.id}><td data-label="Customer"><Link className="customer-cell" href={`/directors-ai-workspace/customers/${customer.id}`}><Image src={customer.image} alt="" width={36} height={36} /><strong>{customer.name}</strong></Link></td><td data-label="Phone">{customer.phone}</td><td data-label="Email">{customer.email}</td><td data-label="Location">{customer.location}</td><td data-label="Jobs">{customer.jobs}</td><td data-label="Last activity">{customer.activity}</td></tr>)}</tbody></table></div></section></div>;
}
