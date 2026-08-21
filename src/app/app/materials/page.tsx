import Image from "next/image";
import { AlertTriangle, Boxes, CircleDollarSign, Plus, TrendingUp } from "lucide-react";
import { materials } from "@/lib/demo-data";
import { StatCard } from "@/components/stat-card";
import { StatusPill } from "@/components/status-pill";

export default function MaterialsPage() {
  return <div className="portal-page"><div className="portal-page-heading"><p>Track products used on jobs without erasing historical cost records.</p><button className="button primary"><Plus /> Add material</button></div><section className="kpi-grid"><StatCard label="Catalog items" value="38" trend="5 low-stock items" icon={Boxes} tone="amber" /><StatCard label="Allocated" value="$7.8k" trend="Across 9 active jobs" icon={CircleDollarSign} /><StatCard label="This month" value="$14.2k" trend="Recorded material cost" icon={TrendingUp} tone="blue" /><StatCard label="Needs review" value="3" trend="Cost updates pending" icon={AlertTriangle} tone="red" /></section><section className="panel table-panel"><div className="responsive-table"><table><thead><tr><th>Material</th><th>Unit</th><th>Unit cost</th><th>Available</th><th>Allocated</th><th>Status</th></tr></thead><tbody>{materials.map((material) => <tr key={material.name}><td data-label="Material"><span className="customer-cell"><Image src={material.image} alt="" width={38} height={38} /><strong>{material.name}</strong></span></td><td data-label="Unit">{material.unit}</td><td data-label="Unit cost">{material.cost}</td><td data-label="Available">{material.available}</td><td data-label="Allocated">{material.allocated}</td><td data-label="Status"><StatusPill>{material.status}</StatusPill></td></tr>)}</tbody></table></div></section></div>;
}
