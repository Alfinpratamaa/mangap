'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Page = () => {
    const pathName = usePathname();

    useEffect(() => {
        if (pathName === "/manga-list") {
            window.location.href = "/manga-list/1";
        }
    }, [pathName]);

    return <div>{/* sengaja kosong */}</div>;
};

export default Page;
