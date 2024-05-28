const ReadPageSkeleton = () => {
    return (
        <div className="flex max-w-full w-full flex-col items-center justify-center min-h-screen dark:bg-secondary">
            <h1 className="text-3xl font-bold mt-10 mb-10 md:px-0 px-3 bg-gray-300 h-12 w-[600px] animate-pulse rounded"></h1>
            <div className="m-4 flex mx-5 justify-center space-x-4 md:px-0 ">
                <span className="">
                    <button className="text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4  bg-gray-300 h-6 w-20 animate-pulse rounded"></button>
                </span>
                <div className="flex items-center border-white">
                    <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center bg-gray-300 h-6 w-20 animate-pulse rounded"></p>
                </div>
                <span className="">
                    <button className="text-xs sm:text-sm md:text-base lg:text-lg px-2  bg-gray-300 h-6 w-20 animate-pulse rounded sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4"></button>
                </span>
            </div>

            <div className="flex justify-center">
                <div className="">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="relative">
                            <div className="bg-gray-300 animate-pulse h-80 w-[700px]"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="m-4 flex mx-5 justify-center space-x-4 md:px-0 ">
                <span className="">
                    <button className="text-xs  bg-gray-300 h-6 w-20 animate-pulse rounded sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4"></button>
                </span>
                <div className="flex items-center border-white">
                    <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center bg-gray-300 h-6 w-20 animate-pulse rounded"></p>
                </div>
                <span className="">
                    <button className="text-xs  bg-gray-300 h-6 w-20 animate-pulse rounded sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4"></button>
                </span>
            </div>
        </div>
    );
};

export default ReadPageSkeleton;
