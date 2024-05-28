'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from './ui/button';
import GenresSkeleton from './GenresSkeleton';

interface Genres {
    [x: string]: any;
    href: string;
    title: string;
}

const GenreList = () => {
    const [genres, setGenres] = useState<Genres>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/genre`);
                setGenres(response.data.data);
                console.log('genres:', response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching genres:', error);
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    if (loading) {
        return <GenresSkeleton />;
    }

    return (
        <div className="h-[588px] px-8 py-10 bg-secondary overflow-y-scroll">
            <h1 className="text-xl font-bold dark:text-secondary-foreground text-primary mb-6">Genres</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
                {genres?.map((genre: Genres) => (
                    <Link key={genre.href} href={`/genres${genre.href}`} passHref>
                        <Button variant={"secondary"} className="inline-block dark:bg-primary-foreground dark:text-white bg-primary/20 text-primary hover:bg-transparent py-2 px-4 rounded-full text-center dark:hover:bg-primary  dark:hover:bg-primary-light transition-colors">
                            {genre.title}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GenreList;
