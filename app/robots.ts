import type { MetadataRoute } from "next";
import profile from "@/content/profile.json";

export default function robots(): MetadataRoute.Robots {
  // Allow crawlers to see the PDF's noindex response header. Robots is not access control.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.site}/sitemap.xml`,
  };
}
