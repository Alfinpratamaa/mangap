import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: "https://mangapp.me",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://mangapp.me/genres",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: "https://mangapp.me/manga-list/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];


  return sitemapEntries;
}
