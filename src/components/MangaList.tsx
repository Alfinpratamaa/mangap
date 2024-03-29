'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactStar from 'react-stars';
import Image from 'next/image';
import { Button } from './ui/button';
import { Manga, Popular, Latest } from "@/types/manga";
import { MangaDetail, Genre, Chapter } from "@/types/mangaDetail";
import { MangaListProps } from "@/types/mangaList";



const MangaList = ({ url, mangaByType, popular, latest, seeAll }: MangaListProps) => {
    const [mangaList, setMangaList] = useState<[]>([]);

    const fetchMangaList = async (): Promise<void> => {
        try {
            const response = await axios.get(url);
            setMangaList(response.data.data);

            if (popular) {
                const popularManga = response.data.data.popular.slice(0, 8);
                setMangaList(popularManga);
                console.log('popular:', response.data.data.popular.slice(0, 6));
                return
            } else if (latest) {
                const latestManga = response.data.data.latest.slice(0, 8);
                setMangaList(latestManga);
                console.log('latest:', response.data.data.latest.slice(0, 6));
                return
            }
            setMangaList(response.data.data);

            console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching manga list:', error);
        }
    };

    useEffect(() => {
        fetchMangaList();
    }, []);

    return (
        <div className="min-h-screen px-1 py-8 bg-secondary pr-8">
            <div className='flex items-center justify-between'>
                <h1 className='ms-8 text-xl font-bold dark:text-secondary-foreground text-primary '>{mangaByType}</h1>
                {seeAll && <Link href={'/manga-list'}>
                    <Button variant={'link'}>see all</Button>
                </Link>
                }
            </div>
            {mangaList.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 ">
                    {mangaList?.map((manga: Manga) => (
                        <div key={manga.slug} className="bg-transparent dark:bg-transparent w-[180px] shadow-md rounded-md py-4 mx-2 my-2">
                            <Link href={`/komik/${manga.slug}`}>
                                <div className="relative mx-auto mb-10" style={{ width: '140px', height: '200px' }}>
                                    <Image fill src={manga.coverImg} alt={manga.title} className=" rounded-md object-cover hover:scale-105 transition-all ease-in-out duration-300" />
                                </div>
                                <div className="p-4">
                                    <h1 className="text-sm font-semibold mb-2 truncate">{manga.title}</h1>
                                    <div className="flex flex-col items-center">
                                        <p className="text-primary dark:text-secondary-foreground">Ch: {manga.latestChapter}</p>
                                        <div className='flex justify-between items-center space-x-2'>
                                            <ReactStar
                                                count={5}
                                                size={22}
                                                value={parseFloat(manga.rating) / 2}
                                                color1='#555'
                                                color2='#f2c10f'
                                                edit={false}
                                            />
                                            <p className='text-primary text-[14px] dark:text-secondary-foreground'>{manga.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
};

export default MangaList;
