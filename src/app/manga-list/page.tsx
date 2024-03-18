
import ClientPagination from '@/components/ClientPagination'
import React from 'react'

const page = () => {


    const url = 'https://api-manga.koidevz.net'

    return (
        <div>
            <section>
                <ClientPagination url={url} mangaByType={'All Anime'} />
            </section>
        </div>
    )
}

export default page