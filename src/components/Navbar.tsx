'use client';
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./darkmode";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            label: 'Beranda',
            path: "/",
        },
        {
            label: 'Manga List',
            path: "/manga-list/1",
        },
        {
            label: 'Genres',
            path: "/genres",
        },
        {
            label: 'Contact Us',
            path: "/contact",
        }

    ];

    return (
        <nav className="flex rounded-md flex-col items-center w-full px-4 dark:bg-primary-foreground md:space-x-0 space-x-3 bg-secondary  text-primary">
            <div className="flex justify-between items-center w-full h-20">
                <div>
                    <div className="flex flex-grow space-x-3 items-center">
                        <h1 className="text-lg md:text-2xl font-extrabold ml-2">
                            <Link
                                className="link-underline link-underline-black"
                                href="/"
                            >
                                Mangap
                            </Link>
                        </h1>
                        <SearchBar />
                    </div>

                </div>


                <ul className="hidden md:flex">
                    {links.map((link) => (
                        <li
                            key={link.path}
                            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 dark:hover:text-white hover:text-primary duration-200 link-underline"
                        >
                            <Link href={link.path}>{link.label}</Link>

                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex md:flex">
                    <ModeToggle />

                </div>

                <div
                    onClick={() => setNav(!nav)}
                    className="relative cursor-pointer left-5 pr-8 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center w-full dark:bg-primary-foreground bg:text-secondary bg-white text-primary ">
                    <div>
                        <ModeToggle />
                    </div>
                    {links.map((link) => (
                        <li
                            key={link.path}
                            className="px-4 cursor-pointer capitalize p-8 text-lg"
                        >
                            <Link onClick={() => setNav(!nav)} href={link.path}>
                                {link.label}
                            </Link>

                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
