import type { Metadata } from "next";
import { mountainPasses } from "@/lib/treks";

export const metadata: Metadata = {
  title: "Mountain Pass Trek Routes",
  description:
    "Explore mountain pass trek routes with difficulty, location, and itinerary highlights.",
  keywords: [
    "mountain pass trek",
    "mount pass trekking",
    "high altitude pass trek",
    "himalayan pass routes",
  ],
  alternates: { canonical: "/mountain-passes" },
};

export default function MountainPassesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-lime-950 to-emerald-900">
      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold">Mountain Pass Treks</h1>
        <p className="mt-3 max-w-3xl text-lime-100/90">
          Handpicked mountain pass routes for trekkers who want high views and crossover trails.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {mountainPasses.map((item) => (
            <article
              key={item.slug}
              className="rounded-2xl border border-lime-200/20 bg-emerald-800/30 p-6"
            >
              <h2 className="text-xl font-semibold text-lime-100">{item.name}</h2>
              <p className="mt-2 text-sm text-lime-200">{item.location}</p>
              <p className="mt-3 text-sm text-lime-100/85">{item.highlight}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
