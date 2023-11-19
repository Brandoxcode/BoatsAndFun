import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div >
            <nav className="bg-cyan-700 flex justify-between items-center h-full p-4 w-full"></nav>
            <Link href='/'>
                <Image
                    className="flex-none rounded-full bg-gray-50 absolute top-3 left-40 right-0"
                    src='/images/bflogo.png'
                    width={70}
                    height={70}
                    alt='logo' />
            </Link>
            <nav className="bg-yellow-500 flex justify-between items-center h-full p-4 mt-2 w-full"></nav>
        </div>
    )
}