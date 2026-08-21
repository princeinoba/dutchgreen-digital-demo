import Image from "next/image";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { StatusPill } from "@/components/status-pill";

const slots = [
  { day: 1, time: "09:00", id: "DG-JOB-203", service: "Patio consult", image: "/images/patio.jpg", tone: "green" },
  { day: 2, time: "10:30", id: "DG-JOB-205", service: "Driveway prep", image: "/images/driveway.jpg", tone: "amber" },
  { day: 4, time: "08:00", id: "SITE VISIT", service: "Pool landscape", image: "/images/pool.jpg", tone: "blue" },
  { day: 5, time: "14:00", id: "DG-JOB-211", service: "Deck measure", image: "/images/deck.jpg", tone: "green" },
];

export default function SchedulePage() {
  return <div className="portal-page"><div className="schedule-toolbar"><div className="button-row"><button className="button secondary small">Today</button><button className="icon-button" aria-label="Previous week"><ChevronLeft /></button><button className="icon-button" aria-label="Next week"><ChevronRight /></button><strong>August 17–23, 2026</strong></div><div className="filter-chips compact"><button className="active">Week</button><button>Day</button><button>Agenda</button></div></div><section className="panel schedule-grid" aria-label="Weekly schedule"><div className="schedule-days">{["Mon 17", "Tue 18", "Wed 19", "Thu 20", "Fri 21"].map((day) => <strong key={day}>{day}</strong>)}</div><div className="schedule-canvas">{["08:00", "10:00", "12:00", "14:00", "16:00"].map((time, index) => <span className="time-line" style={{ top: `${index * 20}%` }} key={time}><small>{time}</small></span>)}{slots.map((slot) => <article className={`schedule-event ${slot.tone}`} style={{ left: `calc(${slot.day - 1} * 20% + 8px)`, top: slot.time === "08:00" ? "4%" : slot.time === "09:00" ? "14%" : slot.time === "10:30" ? "30%" : "62%" }} key={slot.id}><Image src={slot.image} alt="" width={48} height={42} /><span><strong>{slot.id}</strong><small>{slot.service}</small></span></article>)}</div></section><section className="panel agenda-list"><div className="panel-heading"><h2><CalendarDays /> Agenda</h2><StatusPill>Today</StatusPill></div>{slots.map((slot) => <article key={slot.id}><time>{slot.time}</time><Image src={slot.image} alt="" width={52} height={52} /><div><strong>{slot.service}</strong><small>{slot.id} · Synthetic record</small></div></article>)}</section></div>;
}
