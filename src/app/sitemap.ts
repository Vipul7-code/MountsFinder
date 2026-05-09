import type { MetadataRoute } from "next";
import { uttarakhandTreks } from "@/lib/treks";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mountsfinder.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/treks",
    "/treks/uttarakhand",
    "/mountain-passes",
    "/campsites",
    "/gallery",
    "/contact",
  ];

  const trekPages = uttarakhandTreks.map((trek) => `/treks/uttarakhand/${trek.slug}`);
  const allPages = [...staticPages, ...trekPages];
  const now = new Date();

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route.includes("/treks/uttarakhand/") ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
