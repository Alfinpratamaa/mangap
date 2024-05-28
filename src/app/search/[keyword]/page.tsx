'use client';;
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import type { Manga } from '@/types/manga';
import Link from 'next/link';
import Image from 'next/image';
import Japan from '@/components/flag/Japan';
import Korea from '@/components/flag/Korea';
import China from '@/components/flag/China';
import ReactStar from 'react-stars';
import Skeleton from '@/components/Skeleton';

const SearchPage = () => {
    const { keyword } = useParams()
    const decodedKeyword = decodeURI(keyword as string)
    const [searchResults, setSearchResults] = useState<Manga[] | []>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {

                const response = await axios.get(`http://localhost:8000/search?keyword=${keyword}`, {
                    params: {
                        search: decodedKeyword,
                    },
                })
                setLoading(false)
                setSearchResults(response.data.data)

                console.log('searchResults:', response.data.data)
            } catch (error) {
                console.error('Error fetching search results:', error)
            }
        }

        if (keyword) {
            fetchSearchResults()
        }
    }, [keyword])

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

        <div className='min-h-screen px-1 py-8 bg-secondary pr-8'>
            <h2>Search Results for &quot;{decodedKeyword}&quot;</h2>
            {loading && <Skeleton />}
            {!loading && searchResults?.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {searchResults?.map((manga: any) => (
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
                                                size={18}
                                                value={parseFloat(manga.rating) / 2}
                                                color1='#555'
                                                color2='#f2c10f'
                                                edit={false}
                                            />
                                            <p className='text-primary text-center text-[14px] dark:text-secondary-foreground'>{manga.rating}</p>
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
    )
}

export default SearchPage

function Manga(arg0: never[]) {
    throw new Error('Function not implemented.')
}
