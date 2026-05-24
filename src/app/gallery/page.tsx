import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Mountain & Forest Trek Photo Gallery",
  description:
    "Photo gallery of mountain trails, forest camps, and Himalayan trekking routes from Mountsfinder adventures in Uttarakhand and India.",
  path: "/gallery",
  keywords: ["trek gallery", "mountain trek photos", "forest camping photos", "uttarakhand trek images"],
});

const galleryImages = [
  {
    title: "Alpine Trail Morning — Himalayan Trek",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Forest Camp Twilight — Uttarakhand Camping",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Misty Valley Walk — Mountain Trek India",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Peak Line Sunset — High Altitude Trek",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-lime-950 to-emerald-900">
      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold">Trek & Camping Photo Gallery</h1>
        <p className="mt-3 max-w-3xl text-lime-100/90">
          Mountain and forest moments from trekking and camping routes across Uttarakhand and the
          Himalayas.
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
