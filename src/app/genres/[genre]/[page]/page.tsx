'use client';

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ReactStars from "react-stars";
import Image from "next/image";
import axios from "axios";
import China from "@/components/flag/China";
import Japan from "@/components/flag/Japan";
import Korea from "@/components/flag/Korea";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Skeleton from "@/components/Skeleton";

const Page = () => {
    const { genre, page } = useParams<{ genre: string, page: string }>();
    const router = useRouter();

    const [data, setData] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const currentPage = page ? parseInt(page, 10) : 1;
    const url = `${process.env.NEXT_PUBLIC_API_URL}/genres`;

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`${url}/${genre}/${currentPage}`);
            setData(response.data.data);
            setTotalPages(response.data.length_page);
            setIsClient(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [url, genre, currentPage]);

    useEffect(() => {
        if (genre && currentPage >= 1) {
            fetchData();
        } else {
            router.push("/genres/comedy/1");
        }
    }, [fetchData, currentPage, genre, router]);

    const getFlagComponent = (type: any) => {
        switch (type.toLowerCase()) {
            case 'manga':
                return <Japan />;
            case 'manhwa':
                return <Korea />;
            default:
                return <China />;
        }
    };

    return (
        <>
            <div className="min-h-screen max-w-5xl mx-auto justify-center px-1 py-8 bg-secondary pr-8">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold text-center">{genre?.toString().toUpperCase()}</h1>
                </div>
                <div>
                    {!isClient && <Skeleton />}
                    {isClient && data.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {data.map((manga: any) => (
                                <div key={manga.href} className="bg-transparent dark:bg-transparent shadow-md rounded-md py-4 mx-2 my-2">
                                    <Link href={`/komik${manga.href}`}>
                                        <div className="relative mx-auto mb-10" style={{ width: '140px', height: '200px' }}>
                                            <Image
                                                fill
                                                src={manga.thumbnail.startsWith('http') ? manga.thumbnail : `/${manga.thumbnail}`}
                                                alt={manga.title}
                                                className="rounded-md object-cover hover:scale-105 transition-all ease-in-out duration-300"
                                            />
                                            <div className="absolute top-2 right-2">
                                                {getFlagComponent(manga.type)}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h1 className="text-sm font-semibold mb-2 truncate">{manga.title}</h1>
                                            <div className="flex flex-col items-center">
                                                <p className="text-primary dark:text-secondary-foreground">{manga.chapter}</p>
                                                <div className='justify-between items-center space-x-2'>
                                                    <ReactStars
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
                    )}
                </div>
            </div>
            {isClient && (
                <PaginationSection
                    currentPage={currentPage}
                    totalPage={totalPages}
                    genre={genre}
                />
            )}
        </>
    );
};

export default Page;

interface PaginationSectionProps {
    currentPage: any;
    totalPage: any;
    genre: any;
}

const PaginationSection = ({
    currentPage,
    totalPage,
    genre
}: PaginationSectionProps) => {
    const nextPage = currentPage < totalPage ? currentPage + 1 : currentPage;
    const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;

    return (
        <div className="flex justify-center mt-6">
            <Pagination>
                <PaginationContent className="gap-6">
                    <PaginationItem>
                        <Link href={`/genres/${genre}/${prevPage}`}>
                            <PaginationPrevious className="cursor-pointer" />
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>
                            {currentPage} of {totalPage}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <Link href={`/genres/${genre}/${nextPage}`}>
                            <PaginationNext className="cursor-pointer" />
                        </Link>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};
