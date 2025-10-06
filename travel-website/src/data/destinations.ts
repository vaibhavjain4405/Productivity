export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: string;
  priceFrom: number;
  rating: number;
  thumbnail: string;
  tags: string[];
  summary?: string;
  gallery?: string[];
};

export const destinations: Destination[] = [
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    priceFrom: 899,
    rating: 4.8,
    thumbnail: "/window.svg",
    tags: ["beach", "wellness", "culture"],
    summary: "Tropical paradise with temples, surf, and rice terraces.",
    gallery: ["/window.svg", "/globe.svg", "/file.svg"],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    priceFrom: 1199,
    rating: 4.9,
    thumbnail: "/window.svg",
    tags: ["temples", "food", "history"],
    summary: "Ancient shrines, tea houses, and seasonal beauty.",
    gallery: ["/window.svg", "/globe.svg", "/file.svg"],
  },
  {
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    priceFrom: 1299,
    rating: 4.7,
    thumbnail: "/window.svg",
    tags: ["islands", "romance", "sunset"],
    summary: "Iconic white-washed cliffside towns and caldera views.",
    gallery: ["/window.svg", "/globe.svg", "/file.svg"],
  },
  {
    slug: "maui",
    name: "Maui",
    country: "United States",
    region: "North America",
    priceFrom: 1399,
    rating: 4.6,
    thumbnail: "/window.svg",
    tags: ["beach", "hiking", "adventure"],
    summary: "Road to Hana, pristine beaches, and dramatic volcano landscapes.",
    gallery: ["/window.svg", "/globe.svg", "/file.svg"],
  },
];
