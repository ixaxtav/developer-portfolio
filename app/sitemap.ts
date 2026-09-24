import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import profile from "@/content/profile.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.site, priority: 1 },
    ...projects.map((project) => ({
      url: `${profile.site}/work/${project.slug}`,
      priority: 0.8,
    })),
    { url: `${profile.site}/privacy`, priority: 0.2 },
  ];
}
