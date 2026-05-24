import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import JsonLd from "@/components/json-ld";
import { getGuide, guides } from "@/lib/guides";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return createPageMetadata({
      title: "Guide Not Found",
      description: "This guide could not be found.",
      path: `/guides/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
    ogType: "article",
  });
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const guidePath = `/guides/${guide.slug}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-lime-950 to-emerald-900">
      <JsonLd
        data={articleJsonLd({
          title: guide.title,
          description: guide.description,
          path: guidePath,
        })}
      />
      <article className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: guidePath },
          ]}
        />

        <h1 className="text-4xl font-bold">{guide.title}</h1>
        <p className="mt-4 text-base leading-7 text-lime-100/90">{guide.description}</p>

        {guide.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-semibold text-lime-100">{section.heading}</h2>
            <p className="mt-3 text-sm leading-7 text-lime-100/85">{section.body}</p>
          </section>
        ))}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/treks/uttarakhand"
            className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
          >
            Browse Uttarakhand Treks
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-lime-200/70 px-6 py-3 text-sm font-semibold text-lime-50 transition hover:bg-lime-100/10"
          >
            Plan Your Trip
          </Link>
        </div>
      </article>
    </main>
  );
}
