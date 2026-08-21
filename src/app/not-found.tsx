import Link from "next/link";

export default function NotFound() {
  return <main className="state-page"><span className="eyebrow">404</span><h1>That page is not in the plan.</h1><p>Return to the demo or start an estimate request.</p><div className="button-row"><Link className="button primary" href="/">Back home</Link><Link className="button secondary" href="/estimate">Request an estimate</Link></div></main>;
}
