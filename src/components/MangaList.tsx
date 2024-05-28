'use client';;
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ReactStar from 'react-stars';
import Image from 'next/image';
import { Button } from './ui/button';
import { MangaListProps } from '@/types/mangaList';
import Japan from './flag/Japan'; // Pastikan path ini benar
import Korea from './flag/Korea'; // Pastikan path ini benar
import China from './flag/China';
import Skeleton from './Skeleton';

interface MangaList {
    href: string;
    thumbnail: string;
    title: string;
    chapter: string;
    rating: string;
    type: string[];
}

const MangaList = ({ url, mangaByType, seeAll }: MangaListProps) => {
    const [mangaList, setMangaList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMangaList = async (): Promise<void> => {
        try {
            const response = await axios.get(url);
            setMangaList(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching manga list:', error);
        }
    };

    useEffect(() => {
        fetchMangaList();
    }, []);

    const getFlagComponent = (chapter: any) => {
        if (chapter.toLowerCase() === 'manga') {
            return <Japan />;
        } else if (chapter.toLowerCase() === 'manhwa') {
            return <Korea />;
        } else {
            return <China />;
        }
    };

    return (

        <div>
            {loading && (<Skeleton />)}
            {!loading && (
                <div className="min-h-screen p-5 bg-secondary relative">
                    <div className='flex items-center justify-between'>
                        <h1 className='ms-8 text-xl font-bold dark:text-secondary-foreground text-primary'>{mangaByType}</h1>
                        {seeAll && (
                            <Link href={'/manga-list'}>
                                <Button variant={'link'}>see all</Button>
                            </Link>
                        )}
                    </div>

                    {mangaList?.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {mangaList.map((manga: any) => (
                                <div key={manga.href} className="bg-transparent dark:bg-transparent shadow-md rounded-md py-4 mx-2 my-2">
                                    <Link href={`/komik${manga.href}`}>
                                        <div className="relative mx-auto mb-10" style={{ width: '140px', height: '200px' }}>
                                            <Image fill src={manga.thumbnail} alt={manga.title} className="rounded-md object-cover hover:scale-105 transition-all ease-in-out duration-300" />
                                            <div className="absolute top-2 right-2">
                                                {getFlagComponent(manga.type)}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h1 className="text-sm font-semibold mb-2 truncate">{manga.title}</h1>
                                            <div className="flex flex-col items-center">
                                                <p className="text-primary dark:text-secondary-foreground">{manga.chapter}</p>
                                                <div className='justify-between items-center space-x-2'>
                                                    <ReactStar
                                                        count={5}
                                                        size={23}
                                                        value={parseFloat(manga.rating) / 2}
                                                        color1='#555'
                                                        color2='#f2c10f'
                                                        edit={false}
                                                    />
                                                    <p className='text-primary text-[14px] text-center dark:text-secondary-foreground'>{manga.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        !loading && <p>No manga found.</p>
                    )}
                </div>
            )}
        </div>

    );
};

export default MangaList;
