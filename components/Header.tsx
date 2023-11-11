import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div >
            <nav className="bg-cyan-700 flex justify-between items-center h-full p-4 "></nav>
            <Link href='/'>
                <Image
                    className="flex-none rounded-full bg-gray-50 absolute top-3 left-40 right-0"
                    src='/images/bflogo.png'
                    width={150}
                    height={150}
                    alt='logo' />
            </Link>
            <nav className="bg-yellow-500 flex justify-between items-center h-full p-4 mt-2"></nav>
        </div>
    )
}