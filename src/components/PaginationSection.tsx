import Link from "next/link";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "./ui/pagination";

export default function PaginationSection({
    currentPage,
    totalPage,
    endpoint,
    handleNextPage,
    handlePrevPage,
    prevPage,
    nextPage
}: {
    currentPage: number;
    totalPage: number;
    endpoint?: string;
    handleNextPage: () => void;
    handlePrevPage: () => void;
    prevPage: number;
    nextPage: number;
}) {



    return (

        <div className="flex justify-center mt-6">
            <Pagination>
                <PaginationContent className="gap-6">
                    <PaginationItem>
                        <Link href={`/${endpoint}/${prevPage}`}>
                            <PaginationPrevious className="cursor-pointer" onClick={handlePrevPage} />
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>
                            {currentPage} of {totalPage}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <Link href={`/${endpoint}/${nextPage}`}>
                            <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
                        </Link>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>


    );
}