'use client'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const checkout = () => {
    const {
        cartItems,
        loading,
        totalPrice,
        info,
    } = useSelector((state) => state.cart)

    const router = useRouter()


    const button = async () => {

        const name = info.fullName
        const email = info.email
        const number = info.number
        const memo = info.memo

        const product = cartItems.map(items => {
            return `${items.qty} ${items.orderBy}: ${items.name}; `
        })

        const res = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify({
                item: product,
                name: name,
                email: email,
                number: number,
                memo: memo
            })
        })
        const data = await res.json()
        console.log(data)

        alert('your order was submitted, is not confirmed until Boats and fun associate contacts you')

        router.push('/thanks')
    }


    return (
        <div>
            {loading ? (
                <div>Loading</div>
            ) : cartItems.length === 0 ? (
                <div className='flex justify-center items-center'>
                    Cart is empty. <Link href="/">Go shopping</Link>
                </div>
            ) : (

                <div className="grid md:grid-cols-4 md:gap-5 pt-2">
                    <div className="card  p-5">
                        <h2 className="mb-2 text-lg flex justify-center items-center pt-12">Contact Info</h2>
                        <div className='flex justify-center items-center'>
                            Name: {info.fullName};{`\n`}
                            Number: {info.number};{`\n`}
                            Email: {info.email};
                            Memo: {info.memo}.
                        </div>
                        <div>
                            <Link className="default-button inline-block flex justify-center items-center" href="/info">
                                Edit
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto md:col-span-3">
                        <div className="card overflow-x-auto p-5">
                            <h2 className="mb-2 text-lg">Order Items</h2>
                            <p className='text-sm'>Prices are subject to changes according to  market prices and do not include 35% delivery fee or Florida Sales Taxes</p>
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
                            <Link className="default-button inline-block " href="/">
                                Edit
                            </Link>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  p-5 w-full">
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
export default checkout
