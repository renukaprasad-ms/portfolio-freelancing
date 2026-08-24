import { PageIntro, PageShell } from "../../components/page-shell";

const planned=[
 ["Messaging systems","Scaling SMS broadcast processing with queues and batching"],
 ["Databases","What foreign-key failures teach us about safe deletion workflows"],
 ["Identity","Designing reusable multi-tenant authentication for SaaS products"],
];
export default function BlogPage(){return <PageShell><PageIntro eyebrow="ENGINEERING NOTES" title="Lessons from building real software." description="Practical articles about backend engineering, system design and production problems — written from experience while keeping client and employer information confidential."/><section className="section shell"><div className="serviceGrid">{planned.map(([tag,title],i)=><article className="service" key={title}><span>0{i+1}</span><div className="kicker">{tag}</div><h3>{title}</h3><p>Coming soon — a practical engineering breakdown focused on the problem, tradeoffs and reusable lessons.</p></article>)}</div></section></PageShell>}
