'use client';
import { Popular } from '@/types/manga';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SkeletonPopular from './SkeletonPupular';

const PopularList = ({ url }: { url: string }) => {
    const [manga, setManga] = useState<Popular[]>([])
    const [loading, setLoading] = useState(true)

    const fetchPopular = async () => {
        try {
            const response = await axios.get(url)
            console.log('popular:', response.data.data)
            setManga(response.data.data)
        } catch (error) {
            console.error('Error fetching popular manga:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPopular()
    }, [])

    return (
        <>
            {loading ? (
                <SkeletonPopular />
            ) : (
                <div className="w-full max-w-sm p-2 ms-5 min-h-screen sm:p-8  bg-secondary dark:bg-secondary dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Trending</h5>
                        <Link href="/manga-list" className="text-sm font-medium text-primary hover:underline dark:text-secondary-foreground">
                            see all
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {manga.map((manga, index) => (
                                <Link href={`/komik${manga.href}`} key={index}>
                                    <li className="py-3 sm:py-4 hover:bg-secondary/5">
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <Image src={manga.thumbnail} alt={manga.title} width={60} height={100} />
                                            </div>
                                            <div className="flex-shrink-0">
                                                <p className='text-sm border border-gray-400 p-2 rounded-lg'>{index + 1}</p>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-2">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {manga.title}
                                                </p>
                                                <p className="text-sm font-light text-gray-500 truncate dark:text-gray-400">
                                                    {manga.year}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default PopularList
