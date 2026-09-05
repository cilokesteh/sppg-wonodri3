import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sppgwonodri3.web.id";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/service/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/team/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/artikel/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/privasi/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ...articles.map((a) => ({
      url: `${base}/artikel/${a.slug}/`,
      lastModified: a.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
