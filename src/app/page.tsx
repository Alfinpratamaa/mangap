import MangaList from "@/components/MangaList";

export default function Home() {
  const hotKomik = 'https://api-manga.koidevz.net/hot-komik'
  const home = 'https://api-manga.koidevz.net/komik-home'
  return (
    <>
      <section className="">
        <MangaList url={home} mangaByType={'Hot Komik'} popular={true} seeAll={true} />
      </section>
      <section className="-mt-[160px]">
        <MangaList url={home} mangaByType={'Latest '} latest={true} />
      </section>
    </>
  );
}
