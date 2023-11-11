'use client'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

const checkout = () => {
    const {
        cartItems,
        itemsPrice,
        loading,
        totalPrice
    } = useSelector((state) => state.cart)


    const button = async () => {

        const product = cartItems.map(items => {
            return `Items: ${items.name}, lbs or pints: ${items.qty}; `
        })

        const res = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify({
                item: product
            })
        })
        const data = await res.json()
        console.log(data)
    }


    return (
        <div>
            {loading ? (
                <div>Loading</div>
            ) : cartItems.length === 0 ? (
                <div>
                    Cart is empty. <Link href="/">Go shopping</Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-4 md:gap-5">
                    <div className="overflow-x-auto md:col-span-3">
                        <div className="card overflow-x-auto p-5">
                            <h2 className="mb-2 text-lg">Order Items</h2>
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th className="px-5 text-left">Item</th>
                                        <th className="    p-5 text-right">Quantity</th>
                                        <th className="  p-5 text-right">Price</th>
                                        <th className="p-5 text-right">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td>

                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={50}
                                                    height={50}
                                                    style={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                    }}
                                                    className="p-1"
                                                ></Image>
                                                {item.name}
                                            </td>
                                            <td className=" p-5 text-right">{item.qty}</td>
                                            <td className="p-5 text-right">${item.price}</td>
                                            <td className="p-5 text-right">
                                                ${item.qty * item.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  p-5">
                            <h2 className="mb-2 text-lg">Order Summary</h2>
                            <ul>

                                <li>
                                    <div className="mb-2 flex justify-between">
                                        <div>Total</div>
                                        <div>${totalPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <button
                                        onClick={button}
                                        className="primary-button w-full"
                                    >
                                        Place Order
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
<div className="w-screen h-screen flex justify-center items-center">
    <h1 className="text-6xl text-black max-w-[600px] mx-auto"></h1>
</div>
export default checkout
