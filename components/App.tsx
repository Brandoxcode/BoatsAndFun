'use client'

import { useDispatch, useSelector } from 'react-redux'
import CartSidebar from './CartSidebar'
import { useEffect } from 'react'
import { hideLoading } from '@/redux/slices/CartSlice'
import { usePathname } from 'next/navigation'

export default function App({ children }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(hideLoading())
    }, [dispatch])
    const { cartItems, loading } = useSelector((state) => state.cart)
    const pathname = usePathname()

    return (
        <div>
            <div
                className={`${loading
                    ? ''
                    : cartItems.length > 0 &&
                        (pathname === '/' || pathname.indexOf('/product/') >= 0)
                        ? 'mr-24'
                        : ''
                    }`}
            >
                <main className="p-4">{children}</main>
            </div>
            <CartSidebar />
        </div>
    )
}