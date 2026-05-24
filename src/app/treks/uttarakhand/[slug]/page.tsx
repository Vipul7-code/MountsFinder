import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import JsonLd from "@/components/json-ld";
import { getUttarakhandTrek, uttarakhandTreks } from "@/lib/treks";
import {
  createPageMetadata,
  faqJsonLd,
  touristTripJsonLd,
} from "@/lib/seo";

type TrekPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return uttarakhandTreks.map((trek) => ({ slug: trek.slug }));
}

export async function generateMetadata({ params }: TrekPageProps) {
  const { slug } = await params;
  const trek = getUttarakhandTrek(slug);

  if (!trek) {
    return createPageMetadata({
      title: "Trek Not Found",
      description: "This trek page could not be found.",
      path: `/treks/uttarakhand/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${trek.title} Guide, Route & Best Season`,
    description: trek.seoDescription,
    path: `/treks/uttarakhand/${trek.slug}`,
    keywords: trek.keywords,
    ogType: "article",
  });
}

export default async function TrekDetailPage({ params }: TrekPageProps) {
  const { slug } = await params;
  const trek = getUttarakhandTrek(slug);

  if (!trek) {
    notFound();
  }

  const trekPath = `/treks/uttarakhand/${trek.slug}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-950 to-lime-950">
      <JsonLd
        data={[
          touristTripJsonLd({
            name: trek.title,
            description: trek.seoDescription,
            path: trekPath,
            region: trek.region,
            duration: trek.duration,
          }),
          faqJsonLd(trek.faqs),
        ]}
      />
      <article className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Treks", path: "/treks" },
            { name: "Uttarakhand", path: "/treks/uttarakhand" },
            { name: trek.title, path: trekPath },
          ]}
        />

        <h1 className="text-4xl font-bold">{trek.title}</h1>
        <p className="mt-2 text-sm tracking-wide text-lime-300 uppercase">{trek.region}</p>
        <p className="mt-5 text-base leading-7 text-lime-100/90">{trek.seoDescription}</p>

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

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-lime-100">Trek Highlights</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-lime-100/90">
            {trek.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-lime-100">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {trek.faqs.map((faq) => (
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

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
          >
            Book {trek.title}
          </Link>
          <Link
            href="/treks/uttarakhand"
            className="rounded-full border border-lime-200/70 px-6 py-3 text-sm font-semibold text-lime-50 transition hover:bg-lime-100/10"
          >
            More Uttarakhand Treks
          </Link>
        </div>
      </article>
    </main>
  );
}
