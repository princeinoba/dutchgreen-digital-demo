import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/demo-data";

export const metadata: Metadata = { title: "Project concepts" };

export default function ProjectsPage() {
  return <MarketingShell active="Projects"><section className="page-section"><div className="heading-row"><SectionHeading eyebrow="Selected work" title="See the transformation.">Filter by project type without loading an endless gallery.</SectionHeading><div className="filter-chips" aria-label="Project filters"><button className="active">All</button><button>Patios</button><button>Driveways</button><button>Decks</button></div></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index < 3} />)}</div></section></MarketingShell>;
}
