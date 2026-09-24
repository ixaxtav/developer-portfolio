import type { Metadata } from "next";
import profile from "@/content/profile.json";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this portfolio handles visitor information.",
  alternates: { canonical: "/privacy" },
};
export default function PrivacyPage() {
  return (
    <main id="main-content" className="page-width prose-page">
      <h1>Your visit, your privacy.</h1>
      <p className="case-intro">
        This portfolio is here to show my work and make it easy to get in touch.
      </p>
      <h2>Visiting this site</h2>
      <p>
        The site does not use advertising trackers, Google Analytics, Vercel Web
        Analytics, or Speed Insights. It has no accounts or contact forms and
        does not set application cookies. Fonts and images are served locally.
      </p>
      <h2>Hosting</h2>
      <p>
        Vercel hosts the site and may process ordinary request information,
        including IP addresses, browser details, and requested URLs, to deliver
        and secure it. See{" "}
        <a className="link" href="https://vercel.com/legal/privacy-policy">
          Vercel’s privacy policy
        </a>{" "}
        for details about its services.
      </p>
      <h2>Getting in touch</h2>
      <p>
        The email link opens your email application. If you contact me, I use
        the information you send to respond to your message. LinkedIn, GitHub,
        and linked project sites have their own privacy policies.
      </p>
      <h2>Questions</h2>
      <p>
        <a className="link" href={`mailto:${profile.email}`}>Email me about privacy</a>.
      </p>
      <p className="meta">Updated September 24, 2026</p>
    </main>
  );
}
