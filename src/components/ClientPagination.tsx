"use client";
import { useState, useEffect, useCallback } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";
import { Manga } from "@/types/manga";
import ReactStars from "react-stars";
import axios from "axios";
import { MangaListProps } from "@/types/mangaList";
import Loading from "@/app/loading";

export default function ClientPagination({ mangaByType, url }: MangaListProps) {
    const [isClient, setIsClient] = useState(false);
    const [data, setData] = useState<Manga[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`${url}/daftar-komik/${currentPage}`);
            const responseData = response.data.data.komikList;
            const pagination = response.data.data.pagination;

            setData(responseData);
            setIsClient(true);
            setTotalPages(parseInt(pagination.lastPage.page, 10));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [currentPage, url]);

    useEffect(() => {
        fetchData();
    }, [fetchData, currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
        <>
            <div className="min-h-screen px-1 py-8 bg-secondary pr-8">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <h1 className="ms-8 text-xl font-bold dark:text-secondary-foreground text-primary">
                        {mangaByType}
                    </h1>
                </div>
                {isClient ? (
                    data?.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                            {data?.map((manga: any) => (
                                <div
                                    key={manga.href}
                                    className="bg-transparent dark:bg-transparent w-full sm:w-[180px] shadow-md rounded-md py-4 mx-2 my-2"
                                >
                                    <Link href={`/komik${manga.href}`}>
                                        <div
                                            className="relative mx-auto mb-10"
                                            style={{ width: "140px", height: "200px" }}
                                        >
                                            <Image
                                                fill
                                                src={manga.thumbnail}
                                                alt={manga.title}
                                                className="rounded-md object-cover hover:scale-105 transition-all ease-in-out duration-300"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h1 className="text-sm font-semibold mb-2 truncate">
                                                {manga.title}
                                            </h1>
                                            <div className="flex flex-col items-center">
                                                <p className="text-primary dark:text-secondary-foreground">
                                                    Ch: {manga.chapter}
                                                </p>
                                                <div className="flex justify-between items-center space-x-2">
                                                    <ReactStars
                                                        count={5}
                                                        size={22}
                                                        value={parseFloat(manga.rating) / 2}
                                                        color1="#555"
                                                        color2="#f2c10f"
                                                        edit={false}
                                                    />
                                                    <p className="text-primary text-[14px] dark:text-secondary-foreground">
                                                        {manga.rating}
                                                    </p>
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
                            <Loading />
                        </div>
                )}
            </div>
            {isClient && (
                <PaginationSections
                    currentPage={currentPage}
                    totalPage={totalPages}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                />
            )}
        </>
    );
}

function PaginationSections({
    currentPage,
    totalPage,
    handleNextPage,
    handlePrevPage,
}: {
        currentPage: number;
    totalPage: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
}) {
    return (
        <div className="flex justify-center mt-6">
            <Pagination>
                <PaginationContent className="gap-6">
                    <PaginationItem>
                        <Link href={`/manga-list/${currentPage}`}>
                            <PaginationPrevious
                                className="cursor-pointer"
                                onClick={handlePrevPage}
                            />
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>
                            {currentPage} of {totalPage}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            className="cursor-pointer"
                            onClick={handleNextPage}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );

    // return (
    //     <>
    //         <div className="flex justify-center mt-6">
    //             <Pagination>
    //                 <PaginationContent className="gap-6">
    //                     <PaginationItem>
    //                         <Link href={`/${endpoint}/${prevPage}`}>
    //                             <PaginationPrevious className="cursor-pointer" onClick={handlePrevPage} />
    //                         </Link>
    //                     </PaginationItem>
    //                     <PaginationItem>
    //                         <PaginationLink>
    //                             {currentPage} of {totalPage}
    //                         </PaginationLink>
    //                     </PaginationItem>
    //                     <PaginationItem>
    //                         <Link href={`/${endpoint}/${nextPage}`}>
    //                             <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
    //                         </Link>
    //                     </PaginationItem>
    //                 </PaginationContent>
    //             </Pagination>
    //         </div>

    //     </>
    // );
    // )
}
