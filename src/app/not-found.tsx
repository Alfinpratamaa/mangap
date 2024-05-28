/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Error404Page = () => {
    return (
        <div className="h-screen w-full bg-black">
            <div className="max-w-screen-lg m-auto flex flex-col p-10 lg:p-15 items-center justify-center bg-black text-white">
                <h1 className="text-md lg:text-xl text-center">
                    Ups! Sepertinya Anda telah tersesat halaman 404 yang misterius. Jangan khawatir!
                </h1>
                <h1 className="py-5 text-sm lg:text-xl text-center">
                    Biarkan Emma membawa Anda kembali ke tanah yang dikenal
                </h1>
                <img
                    src="/emma.jpg"
                    alt="404"
                    className="object-contain h-[200px] lg:h-[300px]"
                />
                <Link href="/">
                    <p className="text-sm dark:hover:text-primary lg:text-md mt-10 py-4 px-3 ring-1  rounded ring-primary-foreground  hover:scale-95 transition-all ease-in-out cursor-pointer text-center">
                        Ikuti Emma kembali ke Tanah Kysomaio Manga
                    </p>
                </Link>
            </div>
        </div>
    );
};
export default Error404Page;
