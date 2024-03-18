'use client'
import { MangaDetail } from "@/types/manga";
import Image from "next/image";
import DetailManga from "./DetailManga";
import ReactStars from "react-stars";

const MangaDetails = ({ mangaDetail }: { mangaDetail: MangaDetail }) => {
    return (
        <div className="bg-primary-foreground w-full max-w-sm md:max-w-full text-white p-3 md:p6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4 font-bold">{mangaDetail.title}</h2>
            <h3 className="text-md mb-2">Deskripsi :</h3>
            <p className="mb-5   text-zinc-400">{mangaDetail.synopsis}</p>
            <div className="md:flex md:flex-row flex flex-col items-center mb-4">
                <Image
                    src={mangaDetail.coverImg}
                    alt={mangaDetail.title}
                    width={200}
                    height={300}
                    className="rounded-lg shadow-md mr-4 mb-3"
                />
                <div className="flex md:w-[700px] md:px-0 w-[400px] relative -mt-[60px] text-zinc-400">
                    <DetailManga alternativeTitle={mangaDetail.alternativeTitle} status={mangaDetail.status} chapter={mangaDetail.totalChapter} type={mangaDetail.type} author={mangaDetail.author} released={mangaDetail.released} />
                </div>
            </div>
            <div className="flex -mt-6 py-2 px-2 items-center w-[200px] justify-center space-x-2">

                <ReactStars
                    count={5}
                    size={22}
                    value={parseFloat(mangaDetail.rating) / 2}
                    color1='#555'
                    color2='#f2c10f'
                    edit={false}
                />
                <p className='text-primary text-[14px] dark:text-secondary-foreground'>{mangaDetail.rating}</p>
            </div>


        </div>
    );
};

export default MangaDetails;