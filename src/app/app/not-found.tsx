import Link from "next/link";

export default function PortalNotFound() {
  return <section className="panel portal-error"><span className="eyebrow">Record not found</span><h2>This synthetic record is not available.</h2><Link className="button primary" href="/directors-ai-workspace">Back to overview</Link></section>;
}
