import { MetadataRoute } from "next";
import axios from "axios";

async function fetchComicHrefs() {
  const totalPages = 300;
  const comicHrefs: string[] = [];

  for (let page = 1; page <= totalPages; page++) {
    const response = await axios.get(
      `https://facebook.69dev.id/daftar-komik/${page}`
    );
    const comics = response.data.data.comics;
    comics.forEach((comic: any) => {
      comicHrefs.push(comic.href);
    });
  }

  return comicHrefs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const comicHrefs = await fetchComicHrefs();

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
  ];
  comicHrefs.forEach((href) => {
    sitemapEntries.push({
      url: `https://mangapp.me/komik${href}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });
  for (let page = 1; page <= 300; page++) {
    sitemapEntries.push({
      url: `https://mangapp.me/manga-list/${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return sitemapEntries;
}
