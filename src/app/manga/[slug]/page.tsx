'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface MangaDetail {
    slug: string;
    title: string;
    coverImg: string;
    latestChapter: string;
    rating: string;
}

interface Chapter {
    slug: string;
    title: string;
}

const MangaDetailPage = () => {
    const params = useSearchParams();
    const slug = params.get('slug');
    console.log('slug:', slug);
    const [mangaDetail, setMangaDetail] = useState<MangaDetail | null>(null);
    const [chapters, setChapters] = useState<Chapter[]>([]);

    useEffect(() => {
        const fetchMangaDetail = async () => {
            try {
                const response = await axios.get(`https://api-manga.koidevz.net/komik/${slug}`);
                setMangaDetail(response.data);
            } catch (error) {
                console.error('Error fetching manga detail:', error);
            }
        };

        const fetchChapters = async () => {
            try {
                const response = await axios.get(`https://api-manga.koidevz.net/chapter/${slug}`);
                setChapters(response.data);
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        };

        if (slug) {
            fetchMangaDetail();
            fetchChapters();
        }
    }, [slug]);

    if (!mangaDetail) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{mangaDetail.title}</h1>
            <img src={mangaDetail.coverImg} alt={mangaDetail.title} />
            <p>Latest Chapter: {mangaDetail.latestChapter}</p>
            <p>Rating: {mangaDetail.rating}</p>

            <h2>Chapters</h2>
            <ul>
                {chapters.map((chapter) => (
                    <li key={chapter.slug}>
                        <Link href={`/manga/${slug}/${chapter.slug}`}>{chapter.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MangaDetailPage;