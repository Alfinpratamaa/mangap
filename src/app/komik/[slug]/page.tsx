'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MangaDetails from '@/components/MangaDetails';
import { Chapter } from '@/types/mangaDetail';
import axios from 'axios';
import GenreList from '@/components/GenreList';
import DetailMangaSkeleton from '@/components/DetailMangaSkeleton';

const MangaDetailPage = () => {
    const slugParam = useParams<{ slug: string }>();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/detail`
    const [mangaDetail, setMangaDetail] = useState<any | null>(null);
    const [chapterList, setChapterList] = useState<Chapter[] | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchMangaDetail = async () => {
        try {
            if (slugParam.slug) {
                const response = await axios(`${url}/${slugParam.slug}`);
                const data = response.data.data; // Access the 'data' property
                setLoading(false);
                data.href = `/${slugParam.slug}`;
                setMangaDetail(data); // Pass 'data' to setMangaDetail
                console.log('mangaDetail:', data);
                setChapterList(data.chapter);
                console.log('manga capter :', data.chapter)
            }
        } catch (error) {
            console.error('Error fetching manga detail:', error);
        }
    };
    useEffect(() => {

        fetchMangaDetail();
    }, [slugParam.slug, url]);



    return (
        <>
            {loading && <DetailMangaSkeleton />}
            {!loading && <div className='w-full max-w-full min-h-screen'>
                <section className='' style={{ backgroundImage: 'none' }}>
                    <div className='w-auto md:max-w-full max-w-screen-sm h-[300px] max-h-[350px] relative -z-20'>
                        <Image src={mangaDetail.thumbnail.startsWith('http') ? mangaDetail.thumbnail : `/${mangaDetail.thumbnail}`} alt={mangaDetail.title} fill className='object-cover' />
                    </div>
                </section>

                <section className='bg-transparent'>
                    <div className='md:w-[700px] w-auto max-w-4xl mx-auto -mt-[180px]'>
                        <MangaDetails mangaDetail={mangaDetail} />

                    </div>
                </section>

                <section className='bg-secondary mt-10 px-5 py-10 md:w-[700px] w-auto max-w-4xl mx-auto rounded-md'>
                    <h2 className="text-2xl font-semibold my-4">Chapters</h2>
                    <ul className="flex flex-col max-h-96 overflow-y-scroll">
                        {chapterList?.map((chapter, index) => (
                            <li key={index} className="bg-transparent text-white rounded-lg p-4 flex items-center justify-between">
                                <Link href={`/read/${slugParam.slug}${chapter?.href}`} className='flex items-center space-x-3 cursor-pointer hover:text-blue-800'>
                                    <p className="text-lg text-primary dark:text-secondary-foreground hover:text-blue-500">{chapterList?.length - index}.</p>
                                    <p className="text-sm text-primary dark:text-secondary-foreground">{chapter.title}</p>
                                </Link>
                                <p className="text-sm text-primary dark:text-secondary-foreground">
                                    {chapter.date}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='mt-5'>
                    <GenreList />
                </section>
            </div>}
        </>
    );
};

export default MangaDetailPage;
