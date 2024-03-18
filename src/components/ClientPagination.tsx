"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";

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

export default function ClientPagination({ mangaByType, url }: MangaListProps) {
    const [isClient, setIsClient] = useState(false);
    const [data, setData] = useState<Manga[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filter, setFilter] = useState({
        sortby: "",
        status: "",
        type: "",
        genres: "",
    });
    const postsPerPage = 6;

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`${url}/komik-list`, { params: { ...filter, page: currentPage } });
            const responseData = response.data.data; // Sesuaikan dengan struktur respons
            const totalData = response.data.total; // Total data yang tersedia
            setData(responseData);
            setIsClient(true);
            // Hitung total halaman berdasarkan jumlah data dan data per halaman
            const totalPagesCount = Math.ceil(totalData / postsPerPage);
            setTotalPages(totalPagesCount);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [currentPage, filter, url]);

    useEffect(() => {
        fetchData();
    }, [fetchData, currentPage, filter]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {

            setCurrentPage(currentPage - 1);
        }
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilter(prevFilter => ({
            ...prevFilter,
            [name]: value
        }));
    };

    return (
        <>
            <div className="min-h-screen px-1 py-8 bg-secondary pr-8">
                <div className='flex items-center justify-between'>
                    <h1 className='ms-8 text-xl font-bold dark:text-secondary-foreground text-primary '>{mangaByType}</h1>
                    <div className="space-x-3">
                        <select name="sortby" className="rounded-md p-2" onChange={handleFilterChange}>
                            <option value="">Sort By</option>
                            <option value="update">Update</option>
                            <option value="titleasc">Title Asc</option>
                            <option value="titledesc">Title Desc</option>
                            <option value="popular">Popular</option>
                        </select>
                        <select name="status" className="rounded-md p-2" onChange={handleFilterChange}>
                            <option value="">Status</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <select name="type" className="rounded-md p-2" onChange={handleFilterChange}>
                            <option value="">Type</option>
                            <option value="manga">Manga</option>
                            <option value="manhua">Manhua</option>
                            <option value="manhwa">Manhwa</option>
                        </select>
                    </div>
                </div>
                {isClient ? (
                    data.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 ">
                            {data.map((manga: Manga) => (
                                <div key={manga.slug} className="bg-transparent dark:bg-transparent w-[180px] shadow-md rounded-md py-4 mx-2 my-2">
                                    <Link href={`/komik/${manga.slug}`}>
                                        <div className="relative mx-auto mb-10" style={{ width: '140px', height: '200px' }}>
                                            <Image fill src={manga.coverImg} alt={manga.title} className=" rounded-md object-cover hover:scale-105 transition-all ease-in-out duration-300" />
                                        </div>
                                        <div className="p-4">
                                            <h1 className="text-sm font-semibold mb-2 truncate">{manga.title}</h1>
                                            <div className="flex flex-col items-center">
                                                <p className="text-primary dark:text-secondary-foreground">Ch: {manga.latestChapter}</p>
                                                <div className='flex justify-between items-center space-x-2'>
                                                    <ReactStars
                                                        count={5}
                                                        size={22}
                                                        value={parseFloat(manga.rating) / 2}
                                                        color1='#555'
                                                        color2='#f2c10f'
                                                        edit={false}
                                                    />
                                                    <p className='text-primary text-[14px] dark:text-secondary-foreground'>{manga.rating}</p>
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
                    <p>Loading...</p>
                )}
            </div>
            {isClient && (
                <PaginationSection
                    curentPage={currentPage}
                    totalPage={292}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                />
            )}
        </>
    );
}

function PaginationSection({
    curentPage,
    totalPage,
    handleNextPage,
    handlePrevPage,
}: {
    curentPage: number;
    totalPage: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
}) {
    return (
        <div>
            <Pagination>
                <PaginationContent className="gap-6">
                    <PaginationItem>
                        <PaginationPrevious className="cursor-pointer" onClick={handlePrevPage} />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink>{curentPage} of {totalPage}</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

