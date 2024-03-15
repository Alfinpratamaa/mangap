import MangaList from "@/components/MangaList";
import Image from "next/image";

export default function Home() {
  const url = 'https://api-manga.koidevz.net'
  return (
    <div>
      <MangaList url={url} />
    </div>
  );
}
