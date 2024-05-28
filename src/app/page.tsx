import MangaList from "@/components/MangaList";
import { Suspense } from "react";
import GenreList from "@/components/GenreList";
import Skeleton from "@/components/Skeleton";

export default function Home() {
  const url = `${process.env.API}/recommended`
  return (
    <>

      <div className="flex flex-col gap-4">

        <section className="relative">
          <Suspense fallback={<Skeleton />}>
            <MangaList url={url} mangaByType={'Recomended'} seeAll />
          </Suspense>
        </section>
        <section>
          <GenreList />
        </section>
      </div>
    </>
  );
}
