import MangaList from "@/components/MangaList";
import GenreList from "@/components/GenreList";
import PopularList from "@/components/PopularList";

export default function Home() {
  const url = `${process.env.API_URL}/recommended`
  const url2 = `${process.env.API_URL}/popular`
  return (
    <div className="flex flex-col px-5 lg:flex-row gap-4">
      <main className="flex-1">
        <section className="relative">
          <MangaList url={url} mangaByType={'Recomended'} seeAll />
        </section>
        <section className="mt-5">
          <GenreList />
        </section>
      </main>
      <aside className="hidden lg:block lg:w-1/4 ml-4">
        <PopularList url={url2} />
      </aside>
    </div>
  );
}
