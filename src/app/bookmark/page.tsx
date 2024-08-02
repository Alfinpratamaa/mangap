'use client';
import { bookmarkedType } from '@/types/mangaList';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import China from '@/components/flag/China';
import Japan from '@/components/flag/Japan';
import Korea from '@/components/flag/Korea';
import ReactStars from 'react-stars';

const BookmarkPage = () => {
    const [bookmarks, setBookmarks] = useState<bookmarkedType[]>([]);

    useEffect(() => {
        // This code runs only on the client side
        const storedBookmarks: bookmarkedType[] = JSON.parse(localStorage.getItem('bookmarks')!);
        if (storedBookmarks) {
            setBookmarks(storedBookmarks);
        }
    }, []);

    const getFlagComponent = (type: string) => {
        const chapter = type.toLowerCase();
        if (chapter === 'manga') {
            return <Japan />;
        } else if (chapter === 'manhwa') {
            return <Korea />;
        } else {
            return <China />;
        }
    };

    return (
        <div className='min-h-screen p-5 bg-secondary'>
            <h1 className='ms-8 text-xl font-bold dark:text-secondary-foreground text-primary'>Bookmarked Manga</h1>
            {bookmarks.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {bookmarks.map((manga: any) => (
                        <div key={manga.thumbnail} className="bg-transparent dark:bg-transparent shadow-md rounded-md py-4 mx-2 my-2">
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
                                        {/* Ensure manga.chapter is a string */}
                                        <p className="text-primary dark:text-secondary-foreground">{typeof manga.chapter === 'string' ? manga.chapter : ''}</p>
                                        <div className='justify-between items-center space-x-2'>
                                            <ReactStars
                                                count={5}
                                                size={20}
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
                <p className="text-center text-primary dark:text-secondary-foreground">No bookmarked manga yet.</p>
            )}
        </div>
    );
};

export default BookmarkPage;
