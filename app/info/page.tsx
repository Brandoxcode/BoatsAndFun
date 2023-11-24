'use client'

import { saveInfo } from "@/redux/slices/CartSlice"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

const info = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
    } = useForm()

    const router = useRouter()
    const dispatch = useDispatch()
    const { info } = useSelector((state) => state.cart)

    useEffect(() => {
        setValue('fullName', info.name)
        setValue('number', info.number)
        setValue('email', info.email)
    }, [setValue, info])

    const submitHandler = ({
        fullName,
        number,
        email
    }) => {
        dispatch(
            saveInfo({ fullName, number, email })
        )

        router.push('/checkout')
    }
    return (
        <div>
            <form
                className="mx-auto max-w-screen-md"
                onSubmit={handleSubmit(submitHandler)}
            >
                <h1 className="mb-4 text-xl ">Contact Info</h1>
                <div className="mb-4">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        className="w-full bg-slate-400"
                        id="fullName"
                        autoFocus
                        {...register('fullName', {
                            required: 'Please enter full name',
                        })}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="number">Phone number</label>
                    <input
                        className="w-full bg-slate-400"
                        id="number"
                        {...register('number', {
                            required: 'Please enter phone number',
                            minLength: {
                                value: 3,
                                message: 'Address is more than 2 chars',
                            },
                        })}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full  bg-slate-400"
                        id="email"
                        {...register('email', {
                            required: 'Please enter email',
                        })}
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <button className="primary-button">Next</button>
                </div>
            </form>
        </div>
    )
}

export default info