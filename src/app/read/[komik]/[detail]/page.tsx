'use client';;
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ReadPageSkeleton from '@/components/ReadpageSkeleton';

interface ChapterData {
  title: string;
  panel: string[];
  prev?: string;
  next?: string;
}

const ReadChapterPage = () => {
  const { detail, komik } = useParams<{ detail: string, komik: string }>();

  const [chapterData, setChapterData] = useState<ChapterData | null>(null);
  const [chapterList, setChapterList] = useState([]);
  const [nameChapter, setNameChapter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract chapter name
    const parts = detail.split('-');
    const chapterIndex = parts.findIndex(part => part.includes('chapter'));
    if (chapterIndex !== -1 && chapterIndex + 1 < parts.length) {
      const chapter = parts[chapterIndex] + ' ' + parts[chapterIndex + 1];
      setNameChapter(chapter);
      console.log(chapter); // Output: "chapter 25"
    }

    fetchChapterData();
    fetchChapterList();
  }, [detail, komik]);

  const fetchChapterData = async () => {
    try {
      if (detail) {
        const response = await axios.get(`http://localhost:8000/read/${detail}`);
        setLoading(false);
        setChapterData(response.data.data[0]);
        console.log('chapterData:', response.data.data[0]);
        window.scrollTo({
          behavior: 'instant',
          top: 0
        });
      }
    } catch (error) {
      console.error('Error fetching chapter data:', error);
    }
  };

  const fetchChapterList = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/detail/${komik}`);
      console.log('chapterList:', response.data.data);
      setLoading(false);
      setChapterList(response.data.data);

    } catch (error) {
      console.error('Error fetching chapter list:', error);
    }
  }

  if (!chapterData) {
    return <ReadPageSkeleton />
  }

  return (
    <>
      {loading && <ReadPageSkeleton />}
      {!loading && <div className="flex max-w-full w-full flex-col items-center justify-center min-h-screen dark:bg-secondary">
        <h1 className="text-3xl font-bold mt-10 mb-10 md:px-0 px-3 ">{chapterData?.title}</h1>
        <div className="m-4 flex mx-5 justify-center space-x-4 md:px-0 ">
          {chapterData?.prev ? (
            <Link href={`/read/${komik}${chapterData?.prev}`} className="rounded-lg">
              <Button className="dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary-foreground/70 text-secondary bg-secondary-foreground text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4" variant={'default'}>
                {"<<"} Previous Chapter
              </Button>
            </Link>
          ) : (
            <span className="invisible">
              <Button className="text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4">{"<<"} Previous Chapter</Button>
            </span>
          )}

          <div className="flex items-center border-white">
            <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center">{nameChapter}</p>
          </div>

          {chapterData?.next ? (
            <Link href={`/read/${komik}${chapterData?.next}`} className="">
              <Button className="dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary-foreground/70 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4" variant={'default'}>
                Next Chapter {">>"}
              </Button>
            </Link>
          ) : (
            <span className="invisible">
              <Button className="text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4">Next Chapter {">>"}</Button>
            </span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="">
            {chapterData?.panel?.map((imageUrl, index) => (
              <div key={index} className="relative">
                <Image
                  src={imageUrl}
                  alt={"error image"}
                  layout="responsive"
                  width={700}
                  height={1000}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>


        </div>
        <div className="m-4 flex mx-5 justify-center space-x-4 md:px-0 ">
          {chapterData?.prev ? (
            <Link href={`/read/${komik}${chapterData?.prev}`} className="rounded-lg">
              <Button className="dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary-foreground/70 text-secondary bg-secondary-foreground text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4" variant={'default'}>
                {"<<"} Previous Chapter
              </Button>
            </Link>
          ) : (
            <span className="invisible">
              <Button className="text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4">{"<<"} Previous Chapter</Button>
            </span>
          )}

          <div className="flex items-center border-white">
            <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center">{nameChapter}</p>
          </div>

          {chapterData?.next ? (
            <Link href={`/read/${komik}${chapterData?.next}`} className="">
              <Button className="dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary-foreground/70 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4" variant={'default'}>
                Next Chapter {">>"}
              </Button>
            </Link>
          ) : (
            <span className="invisible">
              <Button className="text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4">Next Chapter {">>"}</Button>
            </span>
          )}
        </div>

      </div>}
    </>
  );
};

export default ReadChapterPage;
