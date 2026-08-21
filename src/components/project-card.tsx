import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project, priority = false }: { project: { slug: string; title: string; category: string; image: string }; priority?: boolean }) {
  return <Link className="image-card" href={`/projects/${project.slug}`}><Image src={project.image} alt={`Synthetic concept of ${project.title.toLowerCase()}`} fill sizes="(max-width: 760px) 100vw, 33vw" priority={priority} /><span className="photo-label">{project.category}</span><span className="image-card-title">{project.title}</span></Link>;
}
