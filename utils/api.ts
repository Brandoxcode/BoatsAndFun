export const button = async () => {
    const res = await fetch('/api/send', {
        method: 'POST',
    })
    const data = await res.json()
    console.log(data)
}