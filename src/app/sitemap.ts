import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/seo";
import { uttarakhandTreks } from "@/lib/treks";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/treks", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/treks/uttarakhand", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/mountain-passes", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/campsites", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/guides", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const trekPages = uttarakhandTreks.map((trek) => ({
    path: `/treks/uttarakhand/${trek.slug}`,
    priority: 0.9,
    changeFrequency: "weekly" as const,
  }));

  const guidePages = guides.map((guide) => ({
    path: `/guides/${guide.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const now = new Date();
  const allPages = [...staticPages, ...trekPages, ...guidePages];

  return allPages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
