import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header page-width">
        <Link className="wordmark" href="/" aria-label="Ixax Tavarez, home">
          ixax tavarez<span aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <a href="/resume.pdf">
            Résumé <span aria-hidden="true">↗</span>
          </a>
          <Link className="nav-contact" href="/#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
