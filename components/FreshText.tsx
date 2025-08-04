import Image from "next/image"

const FreshText = () => {
    return (
        <div className="flex gap-6 items-center p-4">
            
            <div>
                <Image src="/images/delivery.png" alt="logo" width={300} height={100} />
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 max-w-[600px]">
                <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Order by 3pm for next day delivery</li>
                    <li>• Pickup available at our North Captiva store (9am-5pm)</li>
                    <li>• Prices are subject to change based on market price</li>
                    <li>• A 35% delivery charge is applied to all orders</li>
                </ul>
            </div>
        </div>
    )
}

export default FreshText
