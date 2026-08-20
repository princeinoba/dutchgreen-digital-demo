"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const initial = [
  ["Site safety review", true], ["Mark excavation area", true], ["Remove existing pavers", true],
  ["Prepare aggregate base", false], ["Photo after compaction", false],
] as const;

export function JobChecklist() {
  const [items, setItems] = useState(initial.map(([label, checked]) => ({ label, checked })));
  return <section className="panel detail-panel checklist-panel"><h2>Crew checklist</h2><ul>{items.map((item, index) => <li key={item.label}><label><input type="checkbox" checked={item.checked} onChange={() => setItems((current) => current.map((entry, i) => i === index ? { ...entry, checked: !entry.checked } : entry))} /><span>{item.label}</span></label></li>)}</ul><button type="button" className="button secondary"><Plus /> Add checklist item</button></section>;
}
