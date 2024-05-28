// @/types/mangaDetail.ts
export interface MangaDetail {
  alternativeTitle: string;
  thumbnail: string;
  author: string;
  chapterList: Chapter[];
  image: string;
  genres: Genre[];
  rating: string;
  released: string;
  status: string;
  synopsis: string;
  title: string;
  totalChapter: string;
  type: string;
}

export interface Genre {
  name: string;
  slug: string;
}

export interface Chapter {
  title: string;
  href: string;
  date: string;
}
