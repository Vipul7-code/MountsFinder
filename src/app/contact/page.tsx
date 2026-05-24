import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book Uttarakhand Trek & Camping Trip",
  description:
    "Book trekking and camping trips with custom dates, group size, and route preferences. Mountsfinder helps plan Uttarakhand and Himalayan adventures.",
  path: "/contact",
  keywords: ["book trek", "trek inquiry form", "camping booking", "uttarakhand trip booking"],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-lime-900">
      <section className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-10">
        <h1 className="text-4xl font-bold">Book Your Trek or Camping Trip</h1>
        <p className="mt-3 text-lime-100/90">
          Share your preferred dates and trek style. We will help plan your Uttarakhand route,
          mountain pass itinerary, or campsite stay.
        </p>

        <form className="mt-8 space-y-5 rounded-2xl border border-lime-200/20 bg-emerald-800/35 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm">
              <span className="mb-2 block text-lime-100">Full name</span>
              <input
                type="text"
                name="fullName"
                required
                className="w-full rounded-lg border border-lime-200/20 bg-emerald-950/60 px-3 py-2 text-lime-50 outline-none ring-lime-300 focus:ring"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm">
              <span className="mb-2 block text-lime-100">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-lime-200/20 bg-emerald-950/60 px-3 py-2 text-lime-50 outline-none ring-lime-300 focus:ring"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm">
              <span className="mb-2 block text-lime-100">Preferred start date</span>
              <input
                type="date"
                name="startDate"
                className="w-full rounded-lg border border-lime-200/20 bg-emerald-950/60 px-3 py-2 text-lime-50 outline-none ring-lime-300 focus:ring"
              />
            </label>
            <label className="text-sm">
              <span className="mb-2 block text-lime-100">Group size</span>
              <input
                type="number"
                name="groupSize"
                min={1}
                max={20}
                className="w-full rounded-lg border border-lime-200/20 bg-emerald-950/60 px-3 py-2 text-lime-50 outline-none ring-lime-300 focus:ring"
                placeholder="4"
              />
            </label>
          </div>

          <label className="text-sm">
            <span className="mb-2 block text-lime-100">Trip preference</span>
            <select
              name="preference"
              className="w-full rounded-lg border border-lime-200/20 bg-emerald-950/60 px-3 py-2 text-lime-50 outline-none ring-lime-300 focus:ring"
              defaultValue="weekend-camp"
            >
              <option value="weekend-camp">Weekend camping</option>
              <option value="ridge-trek">Mountain ridge trek</option>
              <option value="uttarakhand-trek">Uttarakhand trek</option>
              <option value="mountain-pass">Mountain pass route</option>
              <option value="custom">Custom itinerary</option>
            </select>
          </label>

          <label className="text-sm">
            <span className="mb-2 block text-lime-100">Message</span>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-lg border border-lime-200/20 bg-emerald-950/60 px-3 py-2 text-lime-50 outline-none ring-lime-300 focus:ring"
              placeholder="Tell us your fitness level, destination interests, and camping needs."
            />
          </label>

          <button
            type="submit"
            className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
          >
            Send Booking Request
          </button>
        </form>
      </section>
    </main>
  );
}
