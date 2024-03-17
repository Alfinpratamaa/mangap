'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { MangaDetail } from '@/types/manga';
import MangaDetails from '@/components/MangaDetails';

const MangaDetailPage = () => {
    const slugParam = useParams<{ slug: string }>();

    const [mangaDetail, setMangaDetail] = useState<MangaDetail | null>(null);

    useEffect(() => {
        const fetchMangaDetail = async () => {
            try {
                if (slugParam.slug) {
                    const response = await axios.get(`https://api-manga.koidevz.net/komik/${slugParam.slug}`);
                    setMangaDetail(response.data.data); // Access 'data' directly
                    console.log('mangaDetail:', response.data);
                    console.log('manga capter :', response.data.data.chapters);
                }
            } catch (error) {
                console.error('Error fetching manga detail:', error);
            }
        };

        fetchMangaDetail();
    }, [slugParam.slug]);

    if (!slugParam.slug || !mangaDetail) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <div className='w-full h-[300px] relative -z-20'>
                <Image src={mangaDetail.coverImg} alt={mangaDetail.title} layout='fill' className='object-cover' />
            </div>
            <div className='w-[700px] mx-auto -mt-[180px] '>
                <MangaDetails mangaDetail={mangaDetail} />
            </div>
            <h2 className="text-2xl font-semibold my-4">Chapters</h2>
            <ul className="flex flex-col">
                {mangaDetail?.chapters?.length > 0 ? (
                    mangaDetail?.chapters?.map((chapter, index) => (
                        <li key={index} className="bg-transparent text-white rounded-lg p-4 flex items-center justify-start ">
                            <Link href={`https://api-manga.koidevz.net/chapter/${chapter?.slug}`} className='flex items-center space-x-3 cursor-pointer hover:text-blue-800'>
                                <p className="text-lg hover:text-blue-500">{chapter.number}</p>
                                <p className="text-sm ">{chapter.slug.split('-').join(' ')}</p> {/* Contoh: Tampilkan waktu unggah */}
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>Loading chapters...</p>
                )}
            </ul>

        </section>
    );
};

export default MangaDetailPage;






