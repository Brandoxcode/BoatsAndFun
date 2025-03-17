import { addToCart, removeFromCart } from '@/redux/slices/CartSlice'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

export default function CartSidebar() {
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const pathname = usePathname()
  const router = useRouter()


  return (
    <div
      className={
        loading
          ? ''
          : cartItems.length > 0 &&
            (pathname === '/' || pathname.indexOf('/product/') >= 0)
            ? 'fixed top-0 right-0 w-24 md:w-28 h-full shadow-lg border-l border-l-gary-700 overflow-scroll bg-cyan-600	'
            : 'hidden'
      }
    >
      {loading ? (
        <div className="py-5 px-2">Loading...</div>
      ) : cartItems.length === 0 ? (
        <div className="py-5 px-2">Cart is empty</div>
      ) : (
        <>
          <div className="p-2 flex flex-col items-center ">
            <div>Subtotal</div>
            <div className="font-bold text-orange-700">${itemsPrice}</div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-2 flex flex-col items-center border-b border-b-gary-600"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="p-1"
                ></Image>
                <select
                  value={item.qty}
                  onChange={(e) =>
                    addToCartHandler(item, Number(e.target.value))
                  }
                >
                  {[...Array(item.countInStock).keys()].map((x, idx) => (
                    <option key={idx} value={x *= 0.5}>
                      {x *= 1}
                    </option>
                  ))}
                </select>
                <button
                  className="default-button mt-2"
                  onClick={() => removeFromCartHandler(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <button
            className="w-full text-center py-1 rounded-2xl border-2 bg-black"
            onClick={() => router.push('/info')}
          >
            <p className='text-white'>Checkout</p>
          </button>
        </>
      )}
    </div>
  )
}