import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trek Trips in India",
  description:
    "Browse trekking trips with difficulty levels, route styles, and seasonal recommendations.",
  keywords: ["trek trip", "hiking trips india", "mountain trek packages"],
  alternates: { canonical: "/treks" },
};

export default function TreksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-950 to-lime-950">
      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold">Trekking Trips</h1>
        <p className="mt-3 max-w-3xl text-lime-100/90">
          Explore curated trekking trips focused on Uttarakhand trails, mountain-pass routes, and
          forest ridge adventures.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link
            href="/treks/uttarakhand"
            className="rounded-2xl border border-lime-200/20 bg-emerald-800/30 p-6 transition hover:bg-emerald-800/45"
          >
            <h2 className="text-xl font-semibold text-lime-100">Uttarakhand Treks</h2>
            <p className="mt-2 text-sm text-lime-100/85">
              Destination pages for Kedarkantha, Har Ki Dun, Valley of Flowers, and more.
            </p>
          </Link>
          <Link
            href="/mountain-passes"
            className="rounded-2xl border border-lime-200/20 bg-emerald-800/30 p-6 transition hover:bg-emerald-800/45"
          >
            <h2 className="text-xl font-semibold text-lime-100">Mountain Pass Treks</h2>
            <p className="mt-2 text-sm text-lime-100/85">
              High-altitude pass crossings and itinerary ideas for peak season planning.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
