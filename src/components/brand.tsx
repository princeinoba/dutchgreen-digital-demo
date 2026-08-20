import Link from "next/link";

export function Brand({ portal = false }: { portal?: boolean }) {
  return (
    <Link
      className="brand"
      href={portal ? "/directors-ai-workspace" : "/"}
      aria-label={portal ? "DutchGreen Ops Directors AI workspace overview" : "DutchGreen home"}
    >
      <span className="brand-mark">DG</span>
      <span className="brand-copy">
        <strong>{portal ? "DutchGreen Ops" : "DutchGreen"}</strong>
        <small>{portal ? "Directors AI workspace" : "Landscaping & Construction"}</small>
      </span>
    </Link>
  );
}