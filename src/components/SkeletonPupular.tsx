const SkeletonPopular = () => {
    return (
        <div className="w-full max-w-sm p-2 ms-5 min-h-screen sm:p-8 bg-secondary dark:bg-secondary dark:border-gray-700 animate-pulse">
            <div className="flex items-center justify-between mb-4">
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 bg-gray-300 rounded w-12"></div>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index} className="py-3 sm:py-4 hover:bg-secondary/5">
                            <div className="flex items-center gap-2">
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="w-16 h-24 bg-gray-300 rounded-md"></div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="h-6 bg-gray-300 rounded w-8"></div>
                                </div>
                                <div className="flex-1 min-w-0 ms-2">
                                    <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkeletonPopular;
