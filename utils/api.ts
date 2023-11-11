export const button = async () => {
    const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
            cart: cartItems
        })
    })
    const data = await res.json()
    console.log(data)
}