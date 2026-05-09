import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mountain and Forest Trek Gallery",
  description:
    "Photo gallery of mountain trails, forest camps, and nature routes from trekking adventures.",
  keywords: ["trek gallery", "mountain trek photos", "forest camping photos", "nature trekking"],
  alternates: { canonical: "/gallery" },
};

const galleryImages = [
  {
    title: "Alpine Trail Morning",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Forest Camp Twilight",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Misty Valley Walk",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Peak Line Sunset",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-lime-950 to-emerald-900">
      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold">Nature Gallery</h1>
        <p className="mt-3 max-w-3xl text-lime-100/90">
          Mountain and forest moments captured from real trekking and camping routes.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {galleryImages.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-lime-200/20">
              <div
                className="h-64 w-full bg-cover bg-center sm:h-80"
                style={{ backgroundImage: `url(${item.image})` }}
                role="img"
                aria-label={item.title}
              />
              <div className="bg-emerald-900/80 px-4 py-3 text-sm font-medium text-lime-100">
                {item.title}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
