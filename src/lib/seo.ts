import type { Metadata } from "next";

export const siteConfig = {
  name: "Mountsfinder",
  legalName: "Mountsfinder Adventures",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mountsfinder.com",
  description:
    "Discover Uttarakhand treks, mountain pass routes, and camping trips. Compare difficulty, best season, and book guided adventures with Mountsfinder.",
  locale: "en_IN",
  defaultKeywords: [
    "uttarakhand trek",
    "trekking in uttarakhand",
    "mountain pass trek",
    "camping in uttarakhand",
    "himalayan trek india",
    "kedarkantha trek",
    "har ki dun trek",
    "valley of flowers trek",
    "best trek in uttarakhand",
    "trekking packages india",
  ],
} as const;

export function absoluteUrl(path: string) {
  const base = siteConfig.url.replace(/\/$/, "");
  const route = path.startsWith("/") ? path : `/${path}`;
  return `${base}${route}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
  noIndex = false,
}: PageSeoInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const mergedKeywords = [...new Set([...siteConfig.defaultKeywords, ...keywords])];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/branding/logo.png"),
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function touristTripJsonLd(input: {
  name: string;
  description: string;
  path: string;
  region: string;
  duration: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    touristType: "Adventure traveler",
    itinerary: {
      "@type": "ItemList",
      name: `${input.name} itinerary`,
      description: `Typical duration: ${input.duration}. Region: ${input.region}.`,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/branding/logo.png"),
      },
    },
  };
}
