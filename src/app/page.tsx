import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";
import { projects } from "@/lib/demo-data";

export default function HomePage() {
  return (
    <MarketingShell>
      <section className="home-hero">
        <div className="home-copy">
          <span className="eyebrow pill">Ottawa landscape specialists</span>
          <h1>Outdoor spaces,<br />built for Ottawa<br />seasons.</h1>
          <p>Design, construction and care for patios, walkways, driveways, decks, retaining walls and pool landscapes.</p>
          <div className="button-row"><Link className="button primary" href="/estimate">Start your estimate</Link><Link className="button secondary" href="/projects">Explore projects</Link></div>
          <ul className="trust-list"><li><Check /> Established in Ottawa since 1984*</li><li><Check /> Clear estimate process</li><li><Check /> Built for freeze–thaw conditions*</li></ul>
          <small>* Client confirmation required before production use.</small>
        </div>
        <div className="hero-photo">
          <Image src="/images/patio.jpg" alt="Synthetic concept of a completed patio and outdoor kitchen" fill loading="eager" sizes="(max-width: 800px) 100vw, 52vw" />
          <span className="photo-label">Synthetic hero concept</span>
          <div className="trust-card"><span className="stat-icon"><Layers3 /></span><span><strong>40+ years shaping Ottawa properties*</strong><small>Concept trust statement • verify before launch</small></span></div>
        </div>
      </section>
      <section className="service-strip" aria-label="Featured services">
        {projects.slice(0, 3).map((project, index) => <Link key={project.slug} href={index === 0 ? "/services/patios" : index === 1 ? "/services/driveways" : "/services/decks"}><span className="strip-thumb"><Image src={project.image} alt="" fill sizes="86px" /></span><span><strong>{["Patios & outdoor living", "Interlock driveways", "Decks & pool landscapes"][index]}</strong><small>Explore service <ArrowRight /></small></span></Link>)}
      </section>
    </MarketingShell>
  );
}
