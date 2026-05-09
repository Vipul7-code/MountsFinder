export type Trek = {
  slug: string;
  title: string;
  region: string;
  duration: string;
  difficulty: string;
  bestMonths: string;
  summary: string;
  keywords: string[];
};

export const uttarakhandTreks: Trek[] = [
  {
    slug: "kedarkantha-trek",
    title: "Kedarkantha Trek",
    region: "Sankri, Uttarakhand",
    duration: "4 Days",
    difficulty: "Easy to Moderate",
    bestMonths: "December to April",
    summary:
      "A popular winter trek in Uttarakhand with pine forests, snow trails, and a summit sunrise.",
    keywords: ["kedarkantha trek", "winter trek uttarakhand", "sankri trek route"],
  },
  {
    slug: "har-ki-dun-trek",
    title: "Har Ki Dun Trek",
    region: "Govind Wildlife Sanctuary, Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    bestMonths: "March to June, September to November",
    summary:
      "A scenic valley trek with remote villages, river crossings, and high Himalayan views.",
    keywords: ["har ki dun trek", "valley trek uttarakhand", "himalayan trekking trip"],
  },
  {
    slug: "valley-of-flowers-trek",
    title: "Valley of Flowers Trek",
    region: "Chamoli, Uttarakhand",
    duration: "5 Days",
    difficulty: "Moderate",
    bestMonths: "July to September",
    summary:
      "Monsoon-season trek known for alpine flowers, cloud forests, and dramatic mountain backdrops.",
    keywords: ["valley of flowers trek", "uttarakhand monsoon trek", "flower valley trail"],
  },
];

export const mountainPasses = [
  {
    slug: "kuari-pass",
    name: "Kuari Pass",
    location: "Chamoli, Uttarakhand",
    highlight: "Grand Nanda Devi range views and oak-rhododendron forests.",
  },
  {
    slug: "hampta-pass",
    name: "Hampta Pass",
    location: "Kullu to Lahaul",
    highlight: "A classic crossover route from lush valleys to high-altitude deserts.",
  },
];

export function getUttarakhandTrek(slug: string) {
  return uttarakhandTreks.find((trek) => trek.slug === slug);
}
