const GenresSkeleton = () => {
    return (
        <div className="h-[588px] px-8 py-10 bg-secondary overflow-y-scroll animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 50 }).map((_, index) => (
                    <div key={index} className="inline-block py-2 px-4 rounded-full bg-gray-300 h-10 w-full"></div>
                ))}
            </div>
        </div>
    );
}

export default GenresSkeleton