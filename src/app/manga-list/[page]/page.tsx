"use client";
import { useState, useEffect, useCallback } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";
import { Manga } from "@/types/manga";
import ReactStars from "react-stars";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import China from "@/components/flag/China";
import Japan from "@/components/flag/Japan";
import Korea from "@/components/flag/Korea";
import Skeleton from "@/components/Skeleton";

export default function AllListPage() {
    const { page } = useParams<{ page: string }>();
    const currentPage = page ? parseInt(page, 10) : 1;
    const [isClient, setIsClient] = useState(false);
    const [data, setData] = useState<Manga[]>([]);

    const router = useRouter();
    const url = process.env.NEXT_PUBLIC_API_URL;



    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`${url}/daftar-komik/${currentPage}`);
            const responseData = response.data.data.comics;


            console.log("responseData:", responseData);

            setData(responseData);
            setIsClient(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [currentPage, url]);

    const getFlagComponent = (chapter: any) => {
        if (chapter.toLowerCase() === 'manga') {
            return <Japan />;
        } else if (chapter.toLowerCase() === 'manhwa') {
            return <Korea />;
        } else {
            return <China />;
        }
    };


    useEffect(() => {
        fetchData();
        if (!page || isNaN(currentPage)) {
            router.push("/manga-list/1");
        }
    }, [fetchData, currentPage]);

    return (
        <>
            <div className="min-h-screen px-1 py-8 bg-secondary pr-8">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <h1 className="ms-8 text-xl font-bold dark:text-secondary-foreground text-primary">
                        List Komik
                    </h1>
                </div>
                {isClient ? (
                    data?.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {data.map((manga: any) => (
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
                    ) : (
                        <p>No data available</p>
                    )
                ) : (
                    <div>
                        <Skeleton />
                    </div>
                )}
            </div>
            {isClient && (
                <PaginationSection
                    currentPage={currentPage}
                />
            )}
        </>
    );
}

function PaginationSection({
    currentPage,
}: {
        currentPage: number;
}) {
    const nextPage = currentPage + 1;
    const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;

    return (
        <div className="flex justify-center mt-6">
            <Pagination>
                <PaginationContent className="gap-6">
                    <PaginationItem>
                        <Link href={`/manga-list/${prevPage}`}>
                            <PaginationPrevious className="cursor-pointer" />
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link href={`/manga-list/${nextPage}`}>
                            <PaginationNext className="cursor-pointer" />
                        </Link>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
