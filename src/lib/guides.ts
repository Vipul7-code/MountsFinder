export type Guide = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  sections: { heading: string; body: string }[];
};

export const guides: Guide[] = [
  {
    slug: "best-time-uttarakhand-trek",
    title: "Best Time for Uttarakhand Trek",
    description:
      "Month-by-month guide to plan Uttarakhand treks: winter snow routes, monsoon valley treks, and shoulder-season camping.",
    keywords: [
      "best time uttarakhand trek",
      "uttarakhand trek season",
      "when to trek in uttarakhand",
    ],
    sections: [
      {
        heading: "Winter treks (December to March)",
        body: "Routes like Kedarkantha are popular for snow trekking, clear skies, and summit sunrises. Pack warm layers and check road access to base villages.",
      },
      {
        heading: "Summer and monsoon (April to September)",
        body: "Valley of Flowers and lower-altitude forest trails shine in monsoon months. Rain gear and leech protection are essential on humid routes.",
      },
      {
        heading: "Autumn shoulder season (October to November)",
        body: "Har Ki Dun and pass routes offer stable weather, crisp views, and fewer crowds before winter snow closes high trails.",
      },
    ],
  },
  {
    slug: "uttarakhand-trek-packing-list",
    title: "Uttarakhand Trek Packing List",
    description:
      "Essential trekking and camping gear for Himalayan routes in Uttarakhand, from base layers to safety equipment.",
    keywords: [
      "uttarakhand trek packing list",
      "trek gear india",
      "himalayan trek essentials",
    ],
    sections: [
      {
        heading: "Clothing and footwear",
        body: "Moisture-wicking base layers, insulated jacket, waterproof shell, trekking pants, wool socks, and broken-in hiking boots with ankle support.",
      },
      {
        heading: "Camping and safety",
        body: "Headlamp, power bank, first-aid kit, water purification, trekking poles, and a daypack with rain cover for sudden weather changes.",
      },
      {
        heading: "Documents and permits",
        body: "Government ID, trek permits where required, emergency contacts, and offline maps for areas with weak mobile network.",
      },
    ],
  },
  {
    slug: "mountain-pass-trek-guide",
    title: "Mountain Pass Trek Guide for Beginners",
    description:
      "How to choose your first mountain pass trek, train for altitude, and plan safe crossover routes in the Himalayas.",
    keywords: [
      "mountain pass trek guide",
      "high altitude trek tips",
      "hampta pass trek guide",
      "kuari pass trek",
    ],
    sections: [
      {
        heading: "Choosing the right pass route",
        body: "Start with moderate passes that have gradual elevation gain and established camps. Compare duration, max altitude, and exit options before booking.",
      },
      {
        heading: "Altitude and fitness",
        body: "Build stamina with weekly hikes and stair training. Hydrate consistently and plan rest days to reduce altitude sickness risk above 3,500 meters.",
      },
      {
        heading: "Guided vs self-planned trips",
        body: "First-time pass trekkers benefit from local guides who know river crossings, weather windows, and campsite locations on crossover routes.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
