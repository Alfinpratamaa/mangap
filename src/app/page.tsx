import MangaList from "@/components/MangaList";
import GenreList from "@/components/GenreList";

export default function Home() {
  const url = `${process.env.API_URL}/recommended`
  return (
    <>

      <div className="flex flex-col gap-4">

        <section className="relative">
          <MangaList url={url} mangaByType={'Recomended Komik'} seeAll />
        </section>
        <section>
          <GenreList />
        </section>
      </div>
    </>
  );
}
