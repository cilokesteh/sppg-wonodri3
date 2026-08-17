import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sppgwonodri3.web.id";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/service/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/team/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/portfolio/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
