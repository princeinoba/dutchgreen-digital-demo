import Image from "next/image";
import { Plus } from "lucide-react";
import { StatusPill } from "@/components/status-pill";

const crew = [
  { name: "Nico D.", role: "Estimator / lead", today: "2 site visits", week: "5 appointments", capacity: 70, status: "Available", image: "/images/team.jpg", project: "/images/patio.jpg" },
  { name: "Sam R.", role: "Estimator / lead", today: "1 deck measure", week: "4 jobs", capacity: 55, status: "Available", image: "/images/team.jpg", project: "/images/deck.jpg" },
  { name: "Crew A", role: "Field team", today: "Driveway prep", week: "3 active jobs", capacity: 88, status: "Available", image: "/images/team.jpg", project: "/images/driveway.jpg" },
  { name: "Crew B", role: "Field team", today: "No assignments", week: "2 scheduled", capacity: 40, status: "Off today", image: "/images/team.jpg", project: "/images/retaining-wall.jpg" },
];

export default function CrewPage() {
  return <div className="portal-page"><div className="portal-page-heading"><p>Availability, assignments and workload at a glance.</p><button className="button primary"><Plus /> Add crew member</button></div><section className="crew-grid">{crew.map((member, index) => <article className="panel crew-card" key={member.name}><header><div className={`crew-avatar crew-${index}`}><Image src={member.image} alt="" fill sizes="70px" /></div><div><h2>{member.name}</h2><p>{member.role}</p></div><div className="crew-project"><Image src={member.project} alt="" fill sizes="74px" /></div><StatusPill>{member.status}</StatusPill></header><dl><div><dt>Today</dt><dd>{member.today}</dd></div><div><dt>This week</dt><dd>{member.week}</dd></div><div><dt>Capacity</dt><dd>{member.capacity}%</dd></div></dl><div className="capacity"><span style={{ width: `${member.capacity}%` }} /></div><footer><button className="button secondary small">View schedule</button><button className="button secondary small">Edit</button></footer></article>)}</section></div>;
}
