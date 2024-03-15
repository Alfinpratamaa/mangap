'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BiSearch } from "react-icons/bi";
import { ModeToggle } from "./darkmode";
import { Label } from "@radix-ui/react-dropdown-menu";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            label: 'Beranda',
            path: "/",
        },
        {
            label: 'Manga LIst',
            path: "/manga-list",
        },
        {
            label: 'About Mangap',
            path: "/about-mangap",
        },
        {
            label: 'Contact Us',
            path: "/contact-us",
        }

    ];

    return (
        <div className="flex flex-col items-center w-full px-4 dark:bg-primary-foreground bg:text-secondary bg-white text-primary">
            <div className="flex justify-between items-center w-full h-20 md:space-x-0 space-x-3 ">
                <div>
                    <div className="flex  space-x-3 items-center">
                        <h1 className="md:text-4xl text-xl font-extrabold ml-2">
                            <Link
                                className="link-underline link-underline-black"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mangap
                            </Link>
                        </h1>
                        <SearchBar />
                    </div>

                </div>


                <ul className="hidden md:hidden lg:flex xl:flex">
                    {links.map((link) => (
                        <li
                            key={link.path}
                            className="nav-links px-4 cursor-pointer capitalize font-medium  text-gray-500 hover:scale-105 dark:hover:text-white hover:text-primary duration-200 link-underline"
                        >
                            <Link href={link.path}>{link.label}</Link>

                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex ">
                    <ModeToggle />

                </div>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 hidden md:flex lg:hidden xl:hidden"
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
        </div>
    );
};

export default Navbar;
