import type { Metadata } from "next";
import Link from "next/link";
import { uttarakhandTreks } from "@/lib/treks";

export const metadata: Metadata = {
  title: "Uttarakhand Trek Guide",
  description:
    "Find the best Uttarakhand trek options including winter treks, valley routes, and summit trails.",
  keywords: [
    "uttarakhand trek",
    "best trek in uttarakhand",
    "uttarakhand trekking packages",
    "himalayan trek uttarakhand",
  ],
  alternates: { canonical: "/treks/uttarakhand" },
};

export default function UttarakhandTreksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-950 via-emerald-950 to-emerald-900">
      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold">Uttarakhand Treks</h1>
        <p className="mt-3 max-w-3xl text-lime-100/90">
          Compare routes, trek difficulty, and best travel months for popular Uttarakhand trails.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {uttarakhandTreks.map((trek) => (
            <Link
              key={trek.slug}
              href={`/treks/uttarakhand/${trek.slug}`}
              className="rounded-2xl border border-lime-200/20 bg-emerald-800/30 p-6 transition hover:bg-emerald-800/45"
            >
              <h2 className="text-lg font-semibold text-lime-100">{trek.title}</h2>
              <p className="mt-2 text-sm text-lime-100/85">{trek.summary}</p>
              <p className="mt-4 text-xs tracking-wide text-lime-300 uppercase">
                {trek.duration} • {trek.difficulty}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
