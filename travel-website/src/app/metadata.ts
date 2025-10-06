import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Travel Voyage",
    template: "%s | Travel Voyage",
  },
  description: "Discover and book unforgettable trips around the world.",
  openGraph: {
    type: "website",
    title: "Travel Voyage",
    description: "Discover and book unforgettable trips around the world.",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
