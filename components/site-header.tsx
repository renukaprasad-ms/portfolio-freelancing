import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="nav shell">
      <Link className="brand" href="/">RP<span>.</span></Link>
      <nav aria-label="Main navigation">
        <Link href="/services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
      <Link className="button small" href="/contact">Discuss a project <span>↗</span></Link>
    </header>
  );
}
