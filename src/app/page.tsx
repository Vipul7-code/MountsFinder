import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";
import { uttarakhandTreks } from "@/lib/treks";

export const metadata = createPageMetadata({
  title: "Uttarakhand Trek, Camping & Mountain Pass Trips",
  description:
    "Mountsfinder helps you discover Uttarakhand treks, mountain pass routes, and forest camps. Compare difficulty, best season, and book your next Himalayan adventure.",
  path: "/",
  keywords: [
    "mountsfinder",
    "uttarakhand trek packages",
    "best camping sites uttarakhand",
    "himalayan adventure trips",
  ],
});

const homeFaqs = [
  {
    question: "What is the best trek in Uttarakhand for beginners?",
    answer:
      "Kedarkantha and lower-altitude valley routes are popular beginner-friendly options, especially in winter and spring with guided support.",
  },
  {
    question: "When is the best season for Uttarakhand trekking?",
    answer:
      "It depends on the route: winter for snow treks, monsoon for Valley of Flowers, and spring or autumn for stable pass and valley routes.",
  },
  {
    question: "Does Mountsfinder offer camping and trek booking?",
    answer:
      "Yes. You can browse treks, campsites, and mountain pass routes, then submit your trip dates and preferences through the booking form.",
  },
];

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
      title: "Trek Guides & Tips",
      description:
        "Read season guides, packing lists, and mountain pass planning articles built for search and trip prep.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-lime-900 text-lime-50">
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <header className="rounded-3xl border border-lime-300/25 bg-emerald-800/40 p-6 backdrop-blur sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[220px_1fr]">
            <div className="mx-auto w-full max-w-[220px] animate-float">
              <div className="relative aspect-square overflow-hidden rounded-full border border-lime-300/25 bg-white/95 p-2 shadow-2xl shadow-black/30">
                <Image
                  src="/branding/logo.png"
                  alt="Mountsfinder — Uttarakhand trekking and camping"
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
                Uttarakhand treks, mountain passes & camping trips
              </h1>
              <p className="mt-4 max-w-2xl text-base text-lime-100/90 sm:text-lg">
                Compare Himalayan trek routes, find campsites, and plan safer outdoor trips with
                guides built for trekkers across India.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/treks/uttarakhand"
              className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
            >
              Uttarakhand Treks
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
          <h2 className="text-2xl font-semibold text-lime-100">Popular Uttarakhand Treks</h2>
          <p className="mt-2 text-sm text-lime-100/85">
            Explore detailed trek guides with route info, best months, and FAQs.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {uttarakhandTreks.map((trek) => (
              <Link
                key={trek.slug}
                href={`/treks/uttarakhand/${trek.slug}`}
                className="rounded-xl bg-emerald-800/45 p-5 transition duration-300 hover:-translate-y-1 hover:bg-emerald-800/60"
              >
                <h3 className="text-base font-semibold">{trek.title}</h3>
                <p className="mt-2 text-sm text-lime-100/85">{trek.region}</p>
                <p className="mt-1 text-xs font-medium tracking-wide text-lime-300 uppercase">
                  {trek.duration} • {trek.difficulty}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-lime-300/20 bg-emerald-950/40 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-lime-100">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-4">
            {homeFaqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-lime-200/20 bg-emerald-800/30 p-4"
              >
                <summary className="cursor-pointer font-medium text-lime-100">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-lime-100/85">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
