import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { uttarakhandTreks } from "@/lib/treks";
import { guides } from "@/lib/guides";

const footerLinks = [
  { href: "/treks", label: "All Treks" },
  { href: "/treks/uttarakhand", label: "Uttarakhand Treks" },
  { href: "/mountain-passes", label: "Mountain Passes" },
  { href: "/campsites", label: "Campsites" },
  { href: "/guides", label: "Trek Guides" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Book a Trip" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-lime-200/20 bg-emerald-950/90">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 sm:px-10 lg:grid-cols-3 lg:px-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-lime-100 uppercase">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-lime-100/80">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-lime-300 uppercase">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-lime-100/85 hover:text-lime-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-lime-300 uppercase">
            Popular Uttarakhand Treks
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {uttarakhandTreks.map((trek) => (
              <li key={trek.slug}>
                <Link
                  href={`/treks/uttarakhand/${trek.slug}`}
                  className="text-lime-100/85 hover:text-lime-200"
                >
                  {trek.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-semibold tracking-wide text-lime-300 uppercase">
            Trek Guides
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/guides/${guide.slug}`} className="text-lime-100/85 hover:text-lime-200">
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-lime-200/15">
        <div className="mx-auto w-full max-w-6xl px-6 py-5 text-xs text-lime-100/70 sm:px-10 lg:px-16">
          © {new Date().getFullYear()} {siteConfig.name}. Explore responsibly. Leave no trace.
        </div>
      </div>
    </footer>
  );
}
