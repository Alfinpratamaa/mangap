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
        <div className="shadow w-[340px] mx-auto md:w-[400px] mt-14  px-4 overflow-hidden rounded-lg border-transparent">
            {/* <div className="flex flex-col">
                <div className="w-full h-auto ">
                    <div className="flex ">
                        <div className="flex flex-col space-x-2">
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">Alternative Title</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">Status</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">Type</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">Author</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">Chapter</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">Released</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">{alternativeTitle}</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">{status}</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">{type}</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">{author}</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">{chapter}</div>
                            <div className="border border-zinc-400 p-1 whitespace-nowrap text-[12px]">{released}</div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* alternative  */}

            <div className="w-full h-auto space-y-1 ">
                <div className="flex gap-1">
                    <div className="border border-zinc-400 p-1  text-[12px]">Alternative Title</div>
                    <div className="border border-zinc-400 p-1 truncate  text-[12px]">{alternativeTitle}</div>
                </div>
                <div className="flex gap-1">
                    <div className="border border-zinc-400 p-1  text-[12px]">Alternative Title</div>
                    <div className="border border-zinc-400 p-1 truncate whitespace-nowrap text-[12px]">nn{alternativeTitle}</div>
                </div>
                <div className="flex gap-1">
                    <div className="border border-zinc-400 p-1  text-[12px]">Alternative Title</div>
                    <div className="border border-zinc-400 p-1 truncate whitespace-nowrap text-[12px]">{alternativeTitle}</div>
                </div>
                <div className="flex gap-1">
                    <div className="border border-zinc-400 p-1  text-[12px]">Alternative Title</div>
                    <div className="border border-zinc-400 p-1 truncate whitespace-nowrap text-[12px]">{alternativeTitle}</div>
                </div>
                <div className="flex gap-1">
                    <div className="border border-zinc-400 p-1  text-[12px]">Alternative Title</div>
                    <div className="border border-zinc-400 p-1 truncate whitespace-nowrap text-[12px]">{alternativeTitle}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailManga;
