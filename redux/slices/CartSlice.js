import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
    loading: true,
    cartItems: [],
    info: {},
}

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2) // 12.3456 to 12.35
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existemItem = state.cartItems.find((x) => x.id === item.id)
            if (existemItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x.id === existemItem.id ? item : x)
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
            )
            state.totalPrice = addDecimals(
                Number(state.itemsPrice)
            )
            Cookies.set('cart', JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
            )
            state.totalPrice = addDecimals(
                Number(state.itemsPrice)
            )
            Cookies.set('cart', JSON.stringify(state))
        },
        saveInfo: (state, action) => {
            state.info = action.payload
            Cookies.set('cart', JSON.stringify(state))
        },
        hideLoading: (state) => {
            state.loading = false
        },
        resetState: () => initialState
    },
})
export const { addToCart, removeFromCart, saveInfo, hideLoading, resetState } = cartSlice.actions
export default cartSlice.reducer