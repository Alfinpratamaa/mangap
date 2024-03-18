'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Chapter } from '@/types/mangaDetail';

const ReadChapterPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [chapterData, setChapterData] = useState<Chapter | null>(null);



  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        if (slug) {
          const response = await axios.get(`https://api-manga.koidevz.net/chapter/${slug}`);
          setChapterData(response.data.data);
          scrollTo({
            behavior: 'instant',
            top: 0
          })
        }
      } catch (error) {
        console.error('Error fetching chapter data:', error);
      }
    };

    fetchChapterData();
  }, [slug]);

  if (!chapterData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-secondary">
      <h1 className="text-3xl font-bold  mt-10 mb-10">{chapterData.chapterTitle}</h1>
      <div className="flex justify-center">
        <div className="max-w-3xl w-full">
          {chapterData?.imageChapters?.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Page ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {chapterData?.previousChapterSlug && (
          <Link href={`/read/${chapterData.previousChapterSlug}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Previous Chapter</Link>
        )}
        {chapterData?.nextChapterSlug && (
          <Link href={`/read/${chapterData.nextChapterSlug}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Next Chapter</Link>
        )}
      </div>
    </div>
  );
};

export default ReadChapterPage;
