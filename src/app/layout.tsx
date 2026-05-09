import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mountsfinder.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mountsfinder | Trekking & Camping in Uttarakhand",
    template: "%s | Mountsfinder",
  },
  description:
    "Plan trekking and camping adventures across Uttarakhand, mountain passes, and forest trails with Mountsfinder.",
  keywords: [
    "uttarakhand trek",
    "uttarakhand camping",
    "mountain pass trek",
    "himalayan trek",
    "trekking in india",
    "camping trips",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mountsfinder | Trekking & Camping in Uttarakhand",
    description:
      "Explore curated treks, campsites, and mountain pass adventures built for nature lovers.",
    url: "/",
    siteName: "Mountsfinder",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountsfinder",
    description: "Trekking, camping, and mountain pass adventures in Uttarakhand and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-emerald-950 text-lime-50">
        <SiteHeader />
        {children}
        <footer className="border-t border-lime-200/20 bg-emerald-950/90">
          <div className="mx-auto w-full max-w-6xl px-6 py-5 text-xs text-lime-100/80 sm:px-10 lg:px-16">
            Explore responsibly. Leave no trace.
          </div>
        </footer>
      </body>
    </html>
  );
}
