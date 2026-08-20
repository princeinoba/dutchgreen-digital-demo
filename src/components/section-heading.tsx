export function SectionHeading({ eyebrow, title, children, center = false }: { eyebrow: string; title: string; children?: React.ReactNode; center?: boolean }) {
  return <header className={center ? "section-heading center" : "section-heading"}><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{children && <p>{children}</p>}</header>;
}
