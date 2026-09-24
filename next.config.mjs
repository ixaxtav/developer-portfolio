import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: projectRoot },
  outputFileTracingRoot: projectRoot,
  poweredByHeader: false,
  // The only photograph is a small local portrait; no public image processor is needed.
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), payment=()",
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noarchive" },
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          {
            key: "Content-Disposition",
            value: 'inline; filename="Ixax-Tavarez-Resume.pdf"',
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; frame-ancestors 'none'; base-uri 'none'",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
