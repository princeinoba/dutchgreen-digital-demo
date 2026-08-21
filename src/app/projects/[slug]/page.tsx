import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarketingShell } from "@/components/marketing-shell";
import { projects } from "@/lib/demo-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: projects.find((item) => item.slug === slug)?.title ?? "Project" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <MarketingShell active="Projects"><section className="project-detail"><div className="project-main-photo"><Image src={project.image} alt={`Synthetic visual of ${project.title.toLowerCase()}`} fill priority sizes="(max-width: 800px) 100vw, 65vw" /><span className="photo-label">{project.title} • synthetic visual</span></div><aside className="project-brief"><span className="eyebrow pill">{project.service}</span><h1>{project.title}<br />and garden connection</h1><p>A concept case study showing how the portfolio can explain constraints, process and outcomes without unsupported claims.</p><dl><div><dt>Location</dt><dd>{project.location}</dd></div><div><dt>Scope</dt><dd>{project.service}, steps, planting edge</dd></div><div><dt>Materials</dt><dd>Concept selection</dd></div><div><dt>Status</dt><dd>Demonstration only</dd></div></dl><Link className="button primary" href={`/estimate?service=${project.service.toLowerCase()}`}>Request a similar project</Link></aside></section><section className="story-grid"><article><h2>The challenge</h2><p>Clarify drainage, circulation and usable gathering space.</p></article><article><h2>The approach</h2><p>Document choices, milestones and owner approvals.</p></article><article><h2>The result</h2><p>Outcome copy remains client-approved before launch.</p></article></section></MarketingShell>;
}
