const Skeleton = () => {
    return (
        <div className="min-h-screen p-5 bg-secondary relative animate-pulse">
            <div className='flex items-center justify-between mb-4'>
                <div className='h-6 bg-gray-300 rounded w-1/4'></div>
                <div className='h-6 bg-gray-300 rounded w-12'></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="bg-transparent dark:bg-transparent shadow-md rounded-md py-4 mx-2 my-2">
                        <div className="relative mx-auto mb-10" style={{ width: '140px', height: '200px' }}>
                            <div className="w-full h-full bg-gray-300 rounded-md"></div>
                        </div>
                        <div className="p-4">
                            <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                            <div className="flex flex-col items-center">
                                <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
                                <div className='flex justify-between items-center space-x-2 w-full'>
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skeleton;