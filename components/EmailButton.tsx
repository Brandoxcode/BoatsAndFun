"use client"
import { button } from "@/utils/api"

const EmailButton = () => {
    return (
        <div>
            <button
                className="bg-sky-500 px-3 py-2"
                onClick={button}>
                Email prueba
            </button>
        </div>
    )
}

export default EmailButton