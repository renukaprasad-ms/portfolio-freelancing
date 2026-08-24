import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <div><Link className="brand" href="/">RP<span>.</span></Link><p>Software engineering for startups and growing businesses.</p></div>
      <div className="footerLinks"><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/blog">Blog</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      <small>© 2026 Renuka Prasad M S</small>
    </footer>
  );
}
