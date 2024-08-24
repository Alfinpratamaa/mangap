import { NextResponse } from "next/server";
import axios from "axios";

const predefinedKeywords: string[] = [
  "manga",
  "mangapp",
  "komikcast",
  "komikcast.lol",
  "komikcast.moe",
  "kokikcast.cz",
];

async function fetchComics(page: number): Promise<any[]> {
  try {
    const response = await axios.get(
      `https://facebook.69dev.id/daftar-komik/${page}`
    );
    return response.data.data.comics;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GET() {
  let page = 1;
  const newKeywords: Set<string> = new Set(predefinedKeywords);

  while (true) {
    const fetchedComics = await fetchComics(page);
    if (fetchedComics.length === 0) break;

    fetchedComics.forEach((comic) => {
      newKeywords.add(comic.title);
    });

    page++;
  }

  return NextResponse.json({ keywords: Array.from(newKeywords) });
}
