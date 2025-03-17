import Image from "next/image"

const bgimagen = () => {
    return (
        <Image
            src="/images/chart.jpg"
            alt=''
            width={1000}
            height={1000}
            className="w-full h-full object-cover fixed -z-10 opacity-100 mix-blend-overlay"
        />
    )
}

export default bgimagen