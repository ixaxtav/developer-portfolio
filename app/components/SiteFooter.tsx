import Link from "next/link";
import profile from "@/content/profile.json";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <p>© {new Date().getFullYear()} Ixax Tavarez</p>
        <div>
          <a className="link" href={profile.github}>
            GitHub
          </a>
          <a className="link" href={profile.linkedin}>
            LinkedIn
          </a>
          <Link className="link" href="/privacy">
            Privacy
          </Link>
        </div>
      </div>
      <div className="tv-static" aria-hidden="true" />
    </footer>
  );
}
