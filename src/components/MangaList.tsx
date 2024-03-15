'use client'
// pages/index.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactStar from 'react-stars';
import Image from 'next/image';

interface Manga {
    slug: string;
    title: string;
    coverImg: string;
    latestChapter: string;
    rating: string;
    type: string;
}
interface MangaListProps {
    url: string;

}

const MangaList = ({ url }: MangaListProps) => {
    const [mangaList, setMangaList] = useState([]);

    const fetchMangaList = async (): Promise<void> => {
        try {
            const response = await axios.get(`${url}/hot-komik`);
            setMangaList(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching manga list:', error);
        }
    };

    useEffect(() => {
        fetchMangaList();
    }, []);

    const favManga = mangaList.slice(0, 5);
    console.log('fav manga : ', favManga);

    return (
        <div className="min-h-screen px-1 py-8 bg-secondary pr-5 ">
            <h1 className='ms-8 text-xl font-bold dark:text-secondary-foreground text-primary '>Manga Hits</h1>
            {favManga.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 ">
                    {mangaList.map((manga: Manga) => (
                        <div key={manga.slug} className="bg-transparent w-[180px] shadow-md rounded-md py-4 mx-2 my-2">
                            <Link href={`/manga/${manga.slug}`}>
                                <div className="relative mx-auto" style={{ width: '140px', height: '200px' }}>
                                    <Image layout='fill' src={manga.coverImg} alt={manga.title} className=" rounded-md object-cover" />
                                </div>
                                <div className="p-4">
                                    <h1 className="text-sm font-semibold mb-2 truncate">{manga.title}</h1>
                                    <div className="flex flex-col items-center">
                                        <p className="text-primary dark:text-secondary-foreground">Ch: {manga.latestChapter}</p>
                                        <div className='flex justify-between items-center space-x-2'>
                                            <ReactStar
                                                count={5}
                                                size={24}
                                                value={parseFloat(manga.rating) / 2}
                                                color1='#555'
                                                color2='#f2c10f'
                                                edit={false}
                                            />
                                            <p className='text-primary dark:text-secondary-foreground'>{manga.rating}</p>
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
