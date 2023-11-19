import Image from "next/image";
import AddToCart from "./AddToCart";

export default function ProductItem({ product }) {
    return (
        <div className="card w-full p-2 px-5">
            <ul role="list" className="divide-y divide-gray-100 ">
                <li className="grid grid-flow-col gap-x-6 py-5 ">
                    <div className="flex min-w-0 gap-x-4">
                        <button>
                            <Image
                                className="flex-none rounded-full bg-gray-50"
                                src={product.image}
                                width={200}
                                height={200}
                                alt={product.name} />
                        </button>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{product.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.description}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end ">
                        <p className="text-sm leading-6 text-gray-900">${product.price}</p>
                        <AddToCart
                            showQty={false}
                            product={product}
                            increasePerClick={true}
                            redirect={false}
                        />
                    </div>
                </li>
            </ul>
        </div>
    )
}

