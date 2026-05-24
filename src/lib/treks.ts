export type TrekFaq = { question: string; answer: string };

export type Trek = {
  slug: string;
  title: string;
  region: string;
  duration: string;
  difficulty: string;
  bestMonths: string;
  summary: string;
  seoDescription: string;
  highlights: string[];
  keywords: string[];
  faqs: TrekFaq[];
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
    seoDescription:
      "Plan the Kedarkantha trek from Sankri with route details, winter snow conditions, difficulty level, and best months for a safe summit climb in Uttarakhand.",
    highlights: [
      "360° summit views over Swargarohini peaks",
      "Snow-covered pine forest trails in winter",
      "Beginner-friendly Himalayan trek with guided camps",
    ],
    keywords: ["kedarkantha trek", "winter trek uttarakhand", "sankri trek route"],
    faqs: [
      {
        question: "Is Kedarkantha good for beginners?",
        answer:
          "Yes. Kedarkantha is one of the most beginner-friendly winter treks in Uttarakhand when done with a guide and proper cold-weather gear.",
      },
      {
        question: "What is the best month for Kedarkantha trek?",
        answer:
          "December to March is ideal for snow trekking. April offers clearer trails with less snow at lower camps.",
      },
      {
        question: "How difficult is Kedarkantha trek?",
        answer:
          "It is rated easy to moderate. Daily walking is manageable, but summit day includes steep sections and cold exposure.",
      },
    ],
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
    seoDescription:
      "Har Ki Dun trek guide covering valley route, village stays, difficulty, best season, and camping tips in Govind Pashu Vihar, Uttarakhand.",
    highlights: [
      "Ancient valley trail with Swargarohini backdrop",
      "Cultural village stops and riverside camps",
      "Strong choice for photographers and nature trekkers",
    ],
    keywords: ["har ki dun trek", "valley trek uttarakhand", "himalayan trekking trip"],
    faqs: [
      {
        question: "How many days are needed for Har Ki Dun trek?",
        answer:
          "Most itineraries take 6 to 7 days including travel to Sankri and acclimatization stops in the valley.",
      },
      {
        question: "Is Har Ki Dun trek safe for first-timers?",
        answer:
          "Moderate fitness is recommended. The route is well-known but includes long walking days and variable mountain weather.",
      },
      {
        question: "Which season is best for Har Ki Dun?",
        answer:
          "Spring and post-monsoon autumn offer the most stable weather and clear mountain views.",
      },
    ],
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
    seoDescription:
      "Valley of Flowers trek planning guide with monsoon season tips, trail difficulty, permit notes, and best time to see alpine blooms in Uttarakhand.",
    highlights: [
      "UNESCO-listed alpine flower valley",
      "Monsoon trekking with lush green landscapes",
      "Often combined with Hemkund Sahib route",
    ],
    keywords: ["valley of flowers trek", "uttarakhand monsoon trek", "flower valley trail"],
    faqs: [
      {
        question: "When is Valley of Flowers open?",
        answer:
          "The valley is typically accessible during monsoon months from July to September when flowers are in bloom.",
      },
      {
        question: "Do I need a permit for Valley of Flowers trek?",
        answer:
          "Yes. Trekkers need forest entry permits for the national park zone. Guides usually arrange permits in advance.",
      },
      {
        question: "Is Valley of Flowers trek difficult?",
        answer:
          "It is moderate. Trails can be slippery in rain, so good footwear and rain protection are important.",
      },
    ],
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
