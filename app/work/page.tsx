import Link from "next/link";
import { PageIntro, PageShell } from "../../components/page-shell";

const projects = [
  ["bliq", "BliQ Messaging", "Enterprise communications platform", "Production engineering across messaging, broadcasts, billing, authentication, real-time communication, contacts and VoIP workflows.", "Spring Boot · React · Redis · RabbitMQ"],
  ["techflu", "Techflu", "B2B & B2C technology rental platform", "Product workflows for inventory reservations, bookings, recurring payments, KYC, order processing and delivery operations.", "NestJS · Next.js · PostgreSQL · Redis"],
  ["idp", "Multi-tenant IDP", "Reusable identity platform", "Authentication and authorization for SaaS applications with JWT, OTP, Google OAuth, RBAC and tenant isolation.", "Spring Boot · PostgreSQL · React · OAuth"],
];

export default function WorkPage() {
 return <PageShell><PageIntro eyebrow="SELECTED WORK" title="Production systems, not demo projects." description="A selection of products and engineering systems I have worked on, with the business context and technical decisions behind them."/><section className="section shell"><div className="workGrid">{projects.map(([slug,name,type,copy,tags],i)=><article className="project" key={slug}><div className="projectVisual"><span>0{i+1}</span><div className="window"><strong>{name}</strong><small>Production system</small></div></div><span className="projectType">{type}</span><h3>{name}</h3><p>{copy}</p><div className="tags">{tags}</div><Link href={`/work/${slug}`}>View case study →</Link></article>)}</div></section></PageShell>;
}
