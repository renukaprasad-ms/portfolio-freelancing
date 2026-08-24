import Link from "next/link";

const services = [
  ["Full-stack products", "From an idea or specification to a production-ready web application with the frontend, backend and database working as one system."],
  ["Backend & APIs", "Reliable APIs, authentication, payments, databases, queues, real-time features and integrations built for real product workflows."],
  ["Improve existing apps", "Fix bugs, ship features, improve performance and strengthen existing applications without forcing an unnecessary rewrite."],
  ["Product integrations", "Connect payments, messaging, identity, cloud storage and third-party platforms cleanly into your product."],
];

const work = [
  { name: "BliQ Messaging", type: "Enterprise communications platform", copy: "Production engineering across messaging, broadcasts, billing, authentication, real-time communication, contacts and VoIP workflows.", tags: "Spring Boot · React · Redis · RabbitMQ" },
  { name: "Techflu", type: "B2B & B2C technology rental platform", copy: "Built product workflows around inventory reservations, bookings, recurring payments, KYC, order processing and delivery operations.", tags: "NestJS · Next.js · PostgreSQL · Redis" },
  { name: "Multi-tenant IDP", type: "Reusable identity platform", copy: "Designed authentication and authorization for SaaS applications with JWT, OTP, Google OAuth, RBAC and tenant isolation.", tags: "Spring Boot · PostgreSQL · React · OAuth" },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">RP<span>.</span></Link>
        <nav>
          <Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/blog">Blog</Link><Link href="/about">About</Link>
        </nav>
        <Link className="button small" href="/contact">Discuss a project <span>↗</span></Link>
      </header>

      <section className="hero shell">
        <div className="eyebrow"><i /> Available for selected freelance projects</div>
        <h1>I build software that<br/><em>moves businesses forward.</em></h1>
        <p className="lead">I help founders and growing teams build reliable web products, backend systems and integrations — from the first feature to production scale.</p>
        <div className="actions"><Link className="button" href="/contact">Discuss your project <span>↗</span></Link><Link className="textLink" href="/work">See production work <span>→</span></Link></div>
        <div className="trust"><span>Production experience with</span><b>Java / Spring Boot</b><b>React / Next.js</b><b>Node.js</b><b>PostgreSQL</b><b>Redis</b><b>Docker</b></div>
      </section>

      <section className="section shell">
        <div className="sectionHead"><div><span className="kicker">WHAT I CAN HELP WITH</span><h2>Engineering support where<br/>your product needs it most.</h2></div><p>Clear communication, practical engineering and ownership from requirements through delivery.</p></div>
        <div className="serviceGrid">{services.map(([title, copy], i) => <article className="service" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p><Link href="/services">Learn more →</Link></article>)}</div>
      </section>

      <section className="section workSection">
        <div className="shell">
          <div className="sectionHead"><div><span className="kicker">SELECTED WORK</span><h2>Built for real users.<br/>Running in the real world.</h2></div><Link className="textLink" href="/work">View all work →</Link></div>
          <div className="workGrid">{work.map((item, i) => <article className="project" key={item.name}><div className="projectVisual"><span>0{i+1}</span><div className="window"><div className="dots">● ● ●</div><strong>{item.name}</strong><small>Production system</small></div></div><span className="projectType">{item.type}</span><h3>{item.name}</h3><p>{item.copy}</p><div className="tags">{item.tags}</div><Link href="/work">View case study →</Link></article>)}</div>
        </div>
      </section>

      <section className="section shell process">
        <span className="kicker">HOW I WORK</span><h2>A straightforward path from<br/>problem to production.</h2>
        <div className="steps"><div><b>01</b><h3>Understand</h3><p>We clarify the business problem, requirements and what a successful result looks like.</p></div><div><b>02</b><h3>Plan</h3><p>I break the work into a practical technical approach, milestones and clear deliverables.</p></div><div><b>03</b><h3>Build</h3><p>Development happens in focused iterations with regular communication and visible progress.</p></div><div><b>04</b><h3>Ship & support</h3><p>We test, deploy and make sure the solution works reliably in its production environment.</p></div></div>
      </section>

      <section className="cta"><div className="shell ctaInner"><div><span className="kicker">HAVE A PROJECT IN MIND?</span><h2>Let's build something<br/><em>useful.</em></h2></div><div><p>Tell me what you're building, what isn't working, or where your team needs engineering support.</p><Link className="button light" href="/contact">Discuss your project <span>↗</span></Link></div></div></section>

      <footer className="footer shell"><div><Link className="brand" href="/">RP<span>.</span></Link><p>Software engineering for startups and growing businesses.</p></div><div className="footerLinks"><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/blog">Blog</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><small>© 2026 Renuka Prasad M S</small></footer>
    </main>
  );
}
