// @/types/mangaDetail.ts
export interface MangaDetail {
  alternativeTitle: string;
  author: string;
  chapters: Chapter[];
  coverImg: string;
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
  // Define properties for Genre if needed
}

export interface Chapter {
  slug: string;
  number: string;
  chapterNumber: string;
  chapterTitle: string;
  imageChapters: string[]; // Array of image URLs
  nextChapterSlug: string | null;
  previousChapterSlug: string | null;
  seriesSlug: string;
  seriesTitle: string;
}
