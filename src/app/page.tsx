import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uttarakhand Trek, Camping and Mountain Pass Trips",
  description:
    "Discover Uttarakhand trek routes, mountain pass adventures, and nature camps with mobile-friendly trip planning.",
  keywords: [
    "uttarakhand trek",
    "trip and trek",
    "mountain pass trip",
    "camping in uttarakhand",
    "nature adventure tours",
  ],
  alternates: { canonical: "/" },
};

export default function Home() {
  const features = [
    {
      title: "Guided Trek Plans",
      description:
        "Choose beginner to advanced trails with weather-aware itineraries and difficulty filters.",
    },
    {
      title: "Campsite Discovery",
      description:
        "Find scenic camp spots near rivers, forests, and hilltops with quick access details.",
    },
    {
      title: "Packing Checklist",
      description:
        "Use curated essentials lists for overnight, weekend, and high-altitude adventures.",
    },
  ];

  const upcomingTrips = [
    { name: "Pine Ridge Sunrise Trek", location: "Himalayan Foothills", days: "2 Days" },
    { name: "Emerald Valley Camp", location: "Western Ghats", days: "3 Days" },
    { name: "Moonlit Cliff Trail", location: "Aravalli Range", days: "1 Day" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-lime-900 text-lime-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <header className="rounded-3xl border border-lime-300/25 bg-emerald-800/40 p-6 backdrop-blur sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[220px_1fr]">
            <div className="mx-auto w-full max-w-[220px] animate-float">
              <div className="relative aspect-square overflow-hidden rounded-full border border-lime-300/25 bg-white/95 p-2 shadow-2xl shadow-black/30">
                <Image
                  src="/branding/logo.png"
                  alt="Mountsfinder brand logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 220px, 220px"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-lime-200 uppercase">
                Mountsfinder Adventures
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                Trek further, camp deeper, reconnect with nature.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-lime-100/90 sm:text-lg">
                Discover scenic trails, curated camping spots, and practical trip guides for your next
                outdoor journey.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/treks"
              className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
            >
              Explore Trails
            </Link>
            <Link
              href="/campsites"
              className="rounded-full border border-lime-200/70 px-6 py-3 text-sm font-semibold text-lime-50 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-100/10"
            >
              Find Campsites
            </Link>
            <Link
              href="/mountain-passes"
              className="rounded-full border border-lime-200/70 px-6 py-3 text-sm font-semibold text-lime-50 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-100/10"
            >
              Mountain Pass Routes
            </Link>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-emerald-700/35 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-emerald-700/50"
            >
              <h2 className="text-lg font-semibold text-lime-100">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-lime-50/85">{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-lime-300/20 bg-emerald-950/40 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-lime-100">Upcoming Nature Trips</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingTrips.map((trip) => (
              <article
                key={trip.name}
                className="rounded-xl bg-emerald-800/45 p-5 transition duration-300 hover:-translate-y-1 hover:bg-emerald-800/60"
              >
                <h3 className="text-base font-semibold">{trip.name}</h3>
                <p className="mt-2 text-sm text-lime-100/85">{trip.location}</p>
                <p className="mt-1 text-xs font-medium tracking-wide text-lime-300 uppercase">
                  {trip.days}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
