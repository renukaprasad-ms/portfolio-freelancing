import Link from "next/link";
import { PageIntro, PageShell } from "../../components/page-shell";

const services = [
  ["Full-stack product development", "Build complete SaaS products, dashboards and business applications from requirements through production."],
  ["Backend & API development", "Design reliable APIs, databases, authentication, queues, scheduled workflows and real-time services."],
  ["Existing application development", "Fix bugs, add features, improve maintainability and solve performance issues in products already in use."],
  ["Third-party integrations", "Integrate payments, messaging, identity, cloud storage and external APIs into your existing product."],
];

export default function ServicesPage() {
  return <PageShell><PageIntro eyebrow="SERVICES" title="Engineering that solves product problems." description="Focused development support for founders and teams that need to build, improve or scale a web product."/><section className="section shell"><div className="serviceGrid">{services.map(([title, copy], i) => <article className="service" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="actions"><Link className="button" href="/contact">Discuss your project ↗</Link></div></section></PageShell>;
}
