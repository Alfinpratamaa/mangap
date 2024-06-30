/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Error404Page = () => {
    return (
        <div className="h-screen w-full bg-secondary-foreground ">
            <div className="max-w-screen-lg m-auto flex flex-col p-10 lg:p-15 items-center bg-secondary-foreground justify-center dark:border-gray-700 ">
                <h1 className="text-md lg:text-xl text-center dark:text-white text-black">
                    Ups! Sepertinya Anda telah tersesat halaman 404 yang misterius. Jangan khawatir!
                </h1>
                <img
                    src="/emma.jpg"
                    alt="404"
                    className="object-contain h-[200px] lg:h-[300px]"
                />
                <Link href="/">
                    <p className="text-sm dark:text-white text-black lg:text-md mt-10 py-4 px-3 ring-1  rounded ring-primary-foreground  hover:scale-95 transition-all ease-in-out cursor-pointer text-center">
                        Kembali
                    </p>
                </Link>
            </div>
        </div>
    );
};
export default Error404Page;
