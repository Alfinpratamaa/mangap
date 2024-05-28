// @/types/mangaList.ts
import { Manga } from "./manga";

export interface MangaListProps {
  url: string;
  mangaByType: string;
  popular?: boolean;
  latest?: boolean;
  seeAll?: boolean;
}
