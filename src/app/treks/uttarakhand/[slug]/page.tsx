import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUttarakhandTrek, uttarakhandTreks } from "@/lib/treks";

type TrekPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return uttarakhandTreks.map((trek) => ({ slug: trek.slug }));
}

export async function generateMetadata({ params }: TrekPageProps): Promise<Metadata> {
  const { slug } = await params;
  const trek = getUttarakhandTrek(slug);

  if (!trek) {
    return {
      title: "Trek Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${trek.title} in Uttarakhand`,
    description: `${trek.summary} Route details, best months, difficulty, and trip planning tips.`,
    keywords: [...trek.keywords, "uttarakhand trip", "trek itinerary", "camping trek"],
    alternates: {
      canonical: `/treks/uttarakhand/${trek.slug}`,
    },
    openGraph: {
      title: `${trek.title} Trek Guide`,
      description: trek.summary,
      url: `/treks/uttarakhand/${trek.slug}`,
      type: "article",
    },
  };
}

export default async function TrekDetailPage({ params }: TrekPageProps) {
  const { slug } = await params;
  const trek = getUttarakhandTrek(slug);

  if (!trek) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-950 to-lime-950">
      <article className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-10">
        <h1 className="text-4xl font-bold">{trek.title}</h1>
        <p className="mt-2 text-sm tracking-wide text-lime-300 uppercase">{trek.region}</p>
        <p className="mt-5 text-lime-100/90">{trek.summary}</p>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-lime-200/20 bg-emerald-800/35 p-4">
            <p className="text-xs text-lime-300 uppercase">Duration</p>
            <p className="mt-2 text-sm">{trek.duration}</p>
          </div>
          <div className="rounded-xl border border-lime-200/20 bg-emerald-800/35 p-4">
            <p className="text-xs text-lime-300 uppercase">Difficulty</p>
            <p className="mt-2 text-sm">{trek.difficulty}</p>
          </div>
          <div className="rounded-xl border border-lime-200/20 bg-emerald-800/35 p-4">
            <p className="text-xs text-lime-300 uppercase">Best Months</p>
            <p className="mt-2 text-sm">{trek.bestMonths}</p>
          </div>
        </section>
      </article>
    </main>
  );
}
