import type { Metadata } from "next";
import { connection } from "next/server";
import { Courier_Prime, Roboto_Serif } from "next/font/google";
import profile from "@/content/profile.json";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

// next/font downloads these at build time and serves them from this origin.
const serif = Roboto_Serif({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--serif",
});
const mono = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--mono",
});

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
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
