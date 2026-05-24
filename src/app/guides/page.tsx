import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { guides } from "@/lib/guides";

export const metadata = createPageMetadata({
  title: "Trek & Camping Guides",
  description:
    "Read Mountsfinder guides on Uttarakhand trek seasons, packing lists, and mountain pass planning to prepare safer Himalayan trips.",
  path: "/guides",
  keywords: [
    "trek guide uttarakhand",
    "camping guide india",
    "mountain trek tips",
    "trek planning blog",
  ],
});

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-lime-950">
      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold">Trek & Camping Guides</h1>
        <p className="mt-3 max-w-3xl text-lime-100/90">
          Practical guides to help you choose the right season, pack smart, and plan mountain pass
          treks across Uttarakhand and the Himalayas.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-2xl border border-lime-200/20 bg-emerald-800/30 p-6 transition hover:bg-emerald-800/45"
            >
              <h2 className="text-lg font-semibold text-lime-100">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-lime-100/85">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
