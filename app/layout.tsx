import type { Metadata } from "next";
import { connection } from "next/server";
import profile from "@/content/profile.json";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

const title = "Ixax Tavarez | Lead Full-Stack Developer";
const description =
  "Lead developer with 8+ years building full-stack products, dependable workflows, and AI integrations. Explore selected work with React, TypeScript, Python, Go, and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: title, template: "%s | Ixax Tavarez" },
  description,
  openGraph: {
    title,
    description,
    url: profile.site,
    siteName: "Ixax Tavarez",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Render per request so Next can apply the fresh CSP nonce from proxy.ts.
  await connection();
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
