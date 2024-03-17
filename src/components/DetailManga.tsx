import React from "react";

interface DetailMangaProps {
    alternativeTitle: string;
    status: string;
    type: string;
    author: string;
    released: string;
    chapter: string;
}

const DetailManga = ({ alternativeTitle, status, type, author, released, chapter }: DetailMangaProps) => {
    return (
        <div className="shadow w-[400px] mx-auto overflow-hidden rounded-lg border border-zinc-400">
            <div className="flex flex-col">
                <div className="w-full h-auto">
                    <table className="w-full divide-y divide-zinc-400">
                        <tbody className="bg-transparent divide-y divide-zinc-400">
                            <tr>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">Alternative Title</td>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px]">{alternativeTitle}</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">Status</td>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">{status}</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">Type</td>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">{type}</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">Author</td>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">{author}</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">Chapter</td>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px] ">{chapter}</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px]">Released</td>
                                <td className="border border-zinc-400 px-2 py-2 whitespace-nowrap text-[12px]">{released}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DetailManga;
