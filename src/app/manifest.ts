import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#022c22",
    theme_color: "#14532d",
    lang: "en-IN",
    icons: [
      {
        src: "/branding/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
