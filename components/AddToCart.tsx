'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/redux/slices/CartSlice'

const AddToCart = ({
    product,
    showQty = true,
    redirect = false,
    increasePerClick = false,
}) => {
    const dispatch = useDispatch()

    const { cartItems } = useSelector((state) => state.cart)
    const router = useRouter()
    const [qty, setQty] = useState(1)

    const addToCartHandler = () => {
        let newQty = qty

        dispatch(addToCart({ ...product, qty: newQty }))
    }

    return (
        <>
            {product.countInStock > 0 && showQty && (
                <div className="mb-2 flex justify-between">
                    <div>Qty</div>
                    <div>
                        <select
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        >
                        </select>{' '}
                    </div>
                </div>
            )}
            <div>
                <button className="primary-button w-full" onClick={addToCartHandler}>
                    Add to cart
                </button>
            </div>
        </>
    )
}

export default AddToCart