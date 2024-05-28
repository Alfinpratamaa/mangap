const DetailMangaSkeleton = () => {
    return (
        <div className='w-full max-w-full min-h-screen'>
            <section className='' style={{ backgroundImage: 'https://placehold.co/600x400/000000/gray' }}>
                <div className='w-auto md:max-w-full max-w-screen-sm h-[300px] max-h-[350px] relative -z-20 bg-gray-300 animate-pulse'>
                </div>
            </section>

            <section className='bg-transparent'>
                <div className='md:w-[700px] w-auto max-w-4xl mx-auto -mt-[180px]'>
                    <div className="bg-secondary w-full p-3 md:p-4 rounded-xl shadow-xl">
                        <div className="text-xl md:text-3xl mb-2 text-center font-semibold bg-gray-300 h-8 animate-pulse rounded"></div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:flex md:justify-center mb-3">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="bg-gray-300 p-2 h-6 w-20 animate-pulse rounded"></div>
                            ))}
                        </div>
                        <div className="text-md mb-2 font-semibold text-secondary-foreground bg-gray-300 h-4 animate-pulse rounded w-24"></div>
                        <div className="mb-5 text-sm font-sans text-secondary-foreground bg-gray-300 h-24 animate-pulse rounded"></div>
                        <div className="flex flex-col md:flex-row items-center mb-4">
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4 bg-gray-300 h-[300px] w-[200px] animate-pulse rounded-lg"></div>
                            <div className="w-full md:w-auto text-zinc-400">
                                <div className="p-5">
                                    {[...Array(5)].map((_, index) => (
                                        <div key={index} className="flex space-x-2 mb-2">
                                            <div className="bg-gray-300 h-4 w-24 animate-pulse rounded"></div>
                                            <div className="bg-gray-300 h-4 flex-1 animate-pulse rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex -mt-10 items-center justify-center w-full md:w-auto space-x-2 py-2">
                            <div className="bg-gray-300 h-6 w-24 animate-pulse rounded"></div>
                            <div className="bg-gray-300 h-4 w-10 animate-pulse rounded"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-secondary mt-10 px-5 py-10 md:w-[700px] w-auto max-w-4xl mx-auto rounded-md'>
                <div className="text-2xl font-semibold my-4 bg-gray-300 h-6 w-32 animate-pulse rounded"></div>
                <ul className="flex flex-col max-h-96 overflow-y-scroll">
                    {[...Array(5)].map((_, index) => (
                        <li key={index} className="bg-transparent text-white rounded-lg p-4 flex items-center justify-between animate-pulse">
                            <div className='flex items-center space-x-3'>
                                <div className="bg-gray-300 h-6 w-6 animate-pulse rounded"></div>
                                <div className="bg-gray-300 h-6 w-40 animate-pulse rounded"></div>
                            </div>
                            <div className="bg-gray-300 h-6 w-20 animate-pulse rounded"></div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className='mt-5'>
                <div className="bg-gray-300 h-10 w-40 animate-pulse rounded mx-auto"></div>
            </section>
        </div>
    );
};

export default DetailMangaSkeleton;
