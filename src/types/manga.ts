import { Genre } from "./mangaDetail";

// @/types/manga.ts
export interface Manga {
  slug: string;
  title: string;
  image: string;
  latestChapter: string;
  rating: string;
  type: string;
  popular?: Popular[];
  latest?: Latest[];
}

export interface Popular {
  slug: string;
  title: string;
  thumbnail: string;
  latestChapter: string;
  rating: string;
  type: string;
  href: string;
  genre: Genre[];
  year: string;
}

export interface Latest {
  slug: string;
  title: string;
  coverImg: string;
  latestChapter: string;
  rating: string;
  type: string;
}
