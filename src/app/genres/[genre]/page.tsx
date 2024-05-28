'use client'

import { useParams } from "next/navigation"

const Page = () => {
    const { genre } = useParams<{ genre: string }>()
    window.location.href = `/genres/${genre}/1`
    return (
        <div className="hidden">ass</div>
    )
}

export default Page