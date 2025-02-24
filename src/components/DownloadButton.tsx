import Link from "next/link";
import { RiDownloadCloudFill } from "react-icons/ri";


export function DownloadButton() {
    return (
        <Link
            href={"https://github.com/manggap/mangapp_public/releases/download/v1.3.1/mangapp-android-v1.3.1.apk"}
            className="flex flex-row items-center justify-center px-4 py-2 gap-1 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
            <RiDownloadCloudFill className="text-lg" />
            <span>
                Download Aplikasi Mobile
            </span>
        </Link>
    )
}