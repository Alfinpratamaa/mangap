'use client';;
import Image from 'next/image';
import DetailManga from './DetailManga';
import ReactStars from 'react-stars';
import { Badge } from './ui/badge';

const MangaDetails = ({ mangaDetail }: { mangaDetail: any }) => {
    return (
        <div className="bg-secondary w-full p-3 md:p-4 rounded-xl shadow-xl">
            <h2 className="text-xl md:text-3xl mb-2 text-center font-semibold">{mangaDetail.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:flex md:justify-center mb-3">
                {mangaDetail?.genres?.map((genre: any, index: any) => (
                    <Badge key={index} className="text-secondary-foreground p-1 dark:bg-primary-foreground/[0.4]" variant="secondary">
                        {genre}
                    </Badge>
                ))}
            </div>
            <h3 className="text-md mb-2 font-semibold text-secondary-foreground">Deskripsi :</h3>
            <p className="mb-5 text-sm font-sans text-secondary-foreground">
                {mangaDetail.description === "" ? "tidak ada deskripsi" : mangaDetail.description}
            </p>
            <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                    <Image
                        src={mangaDetail.thumbnail}
                        alt={mangaDetail.title}
                        width={200}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full md:w-auto text-zinc-400">
                    <DetailManga
                        status={mangaDetail.status}
                        chapter={mangaDetail.chapterList}
                        type={mangaDetail.type}
                        author={mangaDetail.author}
                        released={mangaDetail.released}
                    />
                </div>
            </div>
            <div className="flex -mt-10 items-center justify-center w-full md:w-auto space-x-2 py-2">
                <ReactStars
                    count={5}
                    size={22}
                    value={parseFloat(mangaDetail.rating) / 2}
                    color1="#555"
                    color2="#f2c10f"
                    edit={false}
                />
                <p className="text-primary text-[14px] dark:text-secondary-foreground">{mangaDetail.rating}</p>
            </div>
        </div>
    );
};

export default MangaDetails;
