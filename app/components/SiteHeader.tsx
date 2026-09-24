import Link from "next/link";
import profile from "@/content/profile.json";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="masthead page-width">
        <div className="masthead-top">
          <p className="masthead-tagline">
            <span aria-hidden="true">👨🏽‍💻</span> Coding cool things
          </p>
          <span className="masthead-rule" aria-hidden="true" />
          <Link className="wordmark" href="/" aria-label="Ixax Tavarez, home">
            Ixax Tavarez
          </Link>
          <span className="masthead-rule" aria-hidden="true" />
          <nav aria-label="Main navigation">
            <Link className="link" href="/#work">
              Work
            </Link>
            <span className="dash" aria-hidden="true" />
            <Link className="link" href="/#experience">
              Experience
            </Link>
            <span className="dash" aria-hidden="true" />
            <a className="link" href="/resume.pdf">
              Résumé
            </a>
            <span className="dash" aria-hidden="true" />
            <Link className="link" href="/#contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="masthead-handle">
          <a href={profile.github}>@ixaxtav</a>
        </div>
      </header>
    </>
  );
}
