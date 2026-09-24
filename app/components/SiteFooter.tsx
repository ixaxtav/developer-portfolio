import Link from "next/link";
import profile from "@/content/profile.json";

export function SiteFooter() {
  return (
    <footer className="site-footer page-width">
      <p>© {new Date().getFullYear()} Ixax Tavarez</p>
      <p className="footer-note">Thoughtful software. Useful outcomes.</p>
      <div>
        <a href={profile.github}>GitHub ↗</a>
        <a href={profile.linkedin}>LinkedIn ↗</a>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
