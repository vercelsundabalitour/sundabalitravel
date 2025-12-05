import { MetadataRoute } from "next";
import { tourPackages } from "@/lib/data/tour-packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sundabalitour.com";

  // Static pages with images
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
      images: [`${baseUrl}/logo.jpeg`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${baseUrl}/logo.jpeg`],
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`${baseUrl}/logo.jpeg`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${baseUrl}/logo.jpeg`],
    },
  ];

  // Dynamic tour pages with their images
  const tourPages = tourPackages.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [
      `${baseUrl}/logo.jpeg`,
      `${baseUrl}${tour.image}`,
      ...(tour.gallery || []).map((img) => `${baseUrl}${img}`),
    ],
  }));

  return [...staticPages, ...tourPages];
}
