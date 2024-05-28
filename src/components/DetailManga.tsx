interface DetailMangaProps {
    released: string;
    author: string;
    status: string;
    type: string;
    chapter: string;
}



const DetailManga = ({ released, author, status, type, chapter }: DetailMangaProps) => {

    if (status === "Ongoing") {
        chapter = "?"
    }

    const details = [
        { key: "Author", value: author },
        { key: "Released", value: released },
        { key: "Status", value: status },
        { key: "Type", value: type },
        { key: "Total Chapter", value: chapter },
    ]

    return (
        <div className="p-5">
            {details.map((detail, index) => (
                <div key={index} className="flex space-x-2">
                    <p className="text-zinc-400 font-semibold">{detail.key}:</p>
                    <p className="text-zinc-400 truncate">{detail.value}</p>
                </div>
            ))}
        </div>


    );
};

export default DetailManga;
