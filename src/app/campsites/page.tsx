import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Camping Campsites Near Trek Routes",
  description:
    "Find nature campsites near forests, ridges, and lakes for your next trekking and camping trip in Uttarakhand and the Himalayas.",
  path: "/campsites",
  keywords: [
    "camping campsites",
    "uttarakhand camping",
    "forest campsite",
    "mountain camping trip",
    "riverside camp uttarakhand",
  ],
});

const campsites = [
  {
    title: "Emerald Lake Camp",
    terrain: "Lakeside Meadow",
    details: "Flat ground, safe fire ring, nearby freshwater source, and sunrise reflections.",
  },
  {
    title: "Whispering Pines Base",
    terrain: "Pine Forest",
    details: "Shaded tree cover, hammock-friendly zones, and easy trek access.",
  },
  {
    title: "High Cliff Camp",
    terrain: "Ridge Top",
    details: "Panoramic sunset views, chilly nights, and ideal for experienced campers.",
  },
];

export default function CampsitesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-950 via-emerald-950 to-emerald-900">
      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold">Campsites for Trekking & Camping</h1>
        <p className="mt-3 max-w-3xl text-lime-100/90">
          Discover natural camping spots with terrain, amenities, and suitability details before
          you head out on your Uttarakhand trek or mountain pass route.
        </p>

        <div className="mt-8 space-y-4">
          {campsites.map((campsite) => (
            <article
              key={campsite.title}
              className="rounded-2xl border border-lime-200/20 bg-emerald-800/30 p-6"
            >
              <h2 className="text-xl font-semibold text-lime-100">{campsite.title}</h2>
              <p className="mt-1 text-xs tracking-wide text-lime-300 uppercase">
                {campsite.terrain}
              </p>
              <p className="mt-3 text-sm text-lime-100/85">{campsite.details}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
