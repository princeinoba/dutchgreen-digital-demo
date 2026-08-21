export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  eyebrow: string;
};

export const services: Service[] = [
  { slug: "patios", name: "Patios", short: "Planning, materials, site work and a clear estimate path.", description: "From interlock and natural stone to outdoor cooking zones, we turn your priorities into a buildable plan.", image: "/images/patio.jpg", eyebrow: "Patio design & construction" },
  { slug: "walkways", name: "Walkways", short: "Entries, materials, site work and a clear estimate path.", description: "Comfortable circulation, dependable drainage and crisp transitions from driveway to front door.", image: "/images/walkway.jpg", eyebrow: "Walkways & entrances" },
  { slug: "driveways", name: "Driveways", short: "Planning, materials, site work and a clear estimate path.", description: "Interlock layouts designed for daily vehicle access, freeze–thaw conditions and a polished arrival.", image: "/images/driveway.jpg", eyebrow: "Driveway construction" },
  { slug: "retaining-walls", name: "Retaining walls", short: "Planning, materials, site work and a clear estimate path.", description: "Terraced grades, integrated steps and planting edges that make sloped properties easier to use.", image: "/images/retaining-wall.jpg", eyebrow: "Retaining walls & grading" },
  { slug: "decks", name: "Wood & composite decks", short: "Planning, materials, site work and a clear estimate path.", description: "Practical outdoor rooms with safe steps, clean railing details and strong garden connections.", image: "/images/deck.jpg", eyebrow: "Deck design & construction" },
  { slug: "pool-landscapes", name: "Pool landscapes", short: "Planning, materials, site work and a clear estimate path.", description: "Poolside hardscape, drainage and layered planting planned as one cohesive outdoor environment.", image: "/images/pool.jpg", eyebrow: "Pool landscapes" },
];

export const projects = [
  { slug: "riverside-patio", title: "Riverside patio", category: "Design + build", image: "/images/patio.jpg", service: "Patio + retaining wall", location: "Ottawa West" },
  { slug: "nepean-driveway", title: "Nepean driveway", category: "Construction", image: "/images/driveway.jpg", service: "Driveway", location: "Nepean" },
  { slug: "poolside-retreat", title: "Poolside retreat", category: "Design + build", image: "/images/pool.jpg", service: "Pool landscape", location: "Kanata" },
  { slug: "garden-walkway", title: "Garden walkway", category: "Construction", image: "/images/walkway.jpg", service: "Walkway", location: "Orléans" },
  { slug: "tiered-retaining-wall", title: "Tiered retaining wall", category: "Design + build", image: "/images/retaining-wall.jpg", service: "Retaining wall", location: "Manotick" },
  { slug: "composite-deck", title: "Composite deck", category: "Construction", image: "/images/deck.jpg", service: "Deck", location: "Barrhaven" },
];

export const portalNav = [
  { href: "/directors-ai-workspace", label: "Overview", icon: "home" },
  { href: "/directors-ai-workspace/leads", label: "Estimate leads", icon: "leads" },
  { href: "/directors-ai-workspace/schedule", label: "Schedule", icon: "calendar" },
  { href: "/directors-ai-workspace/jobs", label: "Jobs", icon: "jobs" },
  { href: "/directors-ai-workspace/customers", label: "Customers", icon: "customers" },
  { href: "/directors-ai-workspace/crew", label: "Crew", icon: "crew" },
  { href: "/directors-ai-workspace/services", label: "Services", icon: "services" },
  { href: "/directors-ai-workspace/materials", label: "Materials", icon: "materials" },
  { href: "/directors-ai-workspace/invoices", label: "Invoices", icon: "invoices" },
  { href: "/directors-ai-workspace/ai", label: "AI workspace", icon: "ai" },
  { href: "/directors-ai-workspace/settings", label: "Settings", icon: "settings" },
] as const;

export const leads = [
  { id: "DG-1048", customer: "Alex Morgan", service: "Patio", received: "Today 9:42", source: "Phone", stage: "New", next: "Review", image: "/images/patio.jpg" },
  { id: "DG-1047", customer: "Mia Chen", service: "Driveway", received: "Yesterday", source: "Web", stage: "Qualified", next: "Call", image: "/images/driveway.jpg" },
  { id: "DG-1046", customer: "Jordan Lee", service: "Deck", received: "Aug 18", source: "Phone", stage: "Site visit", next: "Confirm", image: "/images/deck.jpg" },
  { id: "DG-1045", customer: "Nadia Patel", service: "Pool landscape", received: "Aug 18", source: "Web", stage: "Estimate sent", next: "Follow up", image: "/images/pool.jpg" },
  { id: "DG-1044", customer: "Chris Roy", service: "Retaining wall", received: "Aug 17", source: "Phone", stage: "Won", next: "Create job", image: "/images/retaining-wall.jpg" },
  { id: "DG-1043", customer: "Robin Taylor", service: "Walkway", received: "Aug 17", source: "Web", stage: "Lost", next: "Archive", image: "/images/walkway.jpg" },
];

export const jobs = [
  { id: "DG-JOB-211", date: "Aug 22 · 09:00", customer: "Nadia Patel", service: "Pool landscape", crew: "Crew B", status: "Scheduled", value: "$12,850", image: "/images/pool.jpg" },
  { id: "DG-JOB-205", date: "Aug 19 · 10:30", customer: "Mia Chen", service: "Driveway prep", crew: "Crew A", status: "In progress", value: "$8,400", image: "/images/driveway.jpg" },
  { id: "DG-JOB-203", date: "Aug 18 · 14:00", customer: "Alex Morgan", service: "Patio consultation", crew: "Nico D.", status: "Confirmed", value: "$150", image: "/images/patio.jpg" },
  { id: "DG-JOB-198", date: "Aug 15 · 08:00", customer: "Chris Roy", service: "Retaining wall", crew: "Crew A", status: "Completed", value: "$12,850", image: "/images/retaining-wall.jpg" },
  { id: "DG-JOB-192", date: "Aug 13 · 11:30", customer: "Nadia Patel", service: "Pool hardscape", crew: "Crew B", status: "Completed", value: "$18,200", image: "/images/pool.jpg" },
];

export const customers = [
  { id: "cus_mia", name: "Mia Chen", phone: "613 555 0198", email: "mia@example.ca", location: "Barrhaven, Ottawa", jobs: 3, activity: "Today", image: "/images/driveway.jpg" },
  { id: "cus_alex", name: "Alex Morgan", phone: "613 555 0142", email: "alex@example.ca", location: "Nepean, Ottawa", jobs: 1, activity: "Today", image: "/images/patio.jpg" },
  { id: "cus_nadia", name: "Nadia Patel", phone: "613 555 0125", email: "nadia@example.ca", location: "Kanata, Ottawa", jobs: 2, activity: "Yesterday", image: "/images/pool.jpg" },
  { id: "cus_chris", name: "Chris Roy", phone: "613 555 0104", email: "chris@example.ca", location: "Orléans, Ottawa", jobs: 4, activity: "Aug 17", image: "/images/retaining-wall.jpg" },
  { id: "cus_robin", name: "Robin Taylor", phone: "613 555 0184", email: "robin@example.ca", location: "Centrepointe, Ottawa", jobs: 1, activity: "Aug 16", image: "/images/deck.jpg" },
];

export const materials = [
  { name: "Interlock paver A", unit: "sq ft", cost: "$7.80", available: "1,240", allocated: "360", status: "Healthy", image: "/images/driveway.jpg" },
  { name: "Granular A", unit: "tonne", cost: "$64.00", available: "18", allocated: "12", status: "Low", image: "/images/retaining-wall.jpg" },
  { name: "Polymeric sand", unit: "bag", cost: "$38.50", available: "44", allocated: "16", status: "Healthy", image: "/images/walkway.jpg" },
  { name: "Pressure-treated 2×8", unit: "length", cost: "$24.10", available: "22", allocated: "20", status: "Low", image: "/images/deck.jpg" },
  { name: "Landscape fabric", unit: "roll", cost: "$92.00", available: "8", allocated: "2", status: "Healthy", image: "/images/patio.jpg" },
];

export const invoices = [
  { id: "INV-0108", customer: "Mia Chen", job: "DG-JOB-205", due: "Sep 2", status: "Draft", total: "$8,400", delivery: "Not sent", image: "/images/driveway.jpg" },
  { id: "INV-0107", customer: "Chris Roy", job: "DG-JOB-198", due: "Aug 25", status: "Sent", total: "$12,850", delivery: "Delivered", image: "/images/retaining-wall.jpg" },
  { id: "INV-0106", customer: "Nadia Patel", job: "DG-JOB-192", due: "Aug 18", status: "Overdue", total: "$4,200", delivery: "Opened", image: "/images/pool.jpg" },
  { id: "INV-0105", customer: "Robin Taylor", job: "DG-JOB-188", due: "Aug 15", status: "Paid", total: "$6,750", delivery: "Paid Aug 14", image: "/images/deck.jpg" },
  { id: "INV-0104", customer: "Jordan Lee", job: "DG-JOB-184", due: "Aug 12", status: "Paid", total: "$9,600", delivery: "Paid Aug 11", image: "/images/walkway.jpg" },
];
