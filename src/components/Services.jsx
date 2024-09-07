import { useState } from "react"
import React from 'react'

const Services = () => {

    const [first, setfirst] = useState([
        {
            id: "",
            title: "",
            description: "",
            actionButton: {
                title: "",
                link: "",
            }
        }
    ])

    return (
        <>
            <div className='main-container py-14'>
                <h1 className='text-5xl underline font-bold text-center'>My Services</h1>
                <div className="serices-container space-x-5 px-10 flex mt-12">
                    <div className='cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4'>
                        <i class="text-5xl fa-brands fa-aws"></i>
                        <h1 className='text-4xl'>Web Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellat ad quisquam maxime ratione magnam aperiam fugit atque quaerat eaque doloremque.</p>
                        <button className='px-3 py-2 bg-orange-500 text-2xl  rounded-full shadow-lg'>Check</button>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl'>
                        <i class="text-5xl fa-brands fa-java"></i>
                        <h1 className='text-4xl'>Java Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellat ad quisquam maxime ratione magnam aperiam fugit atque quaerat eaque doloremque.</p>
                        <button className='px-3 py-2 bg-orange-500 text-2xl  rounded-full shadow-lg'>Check</button>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl'>
                        <i class="text-5xl fa-solid fa-server"></i>
                        <h1 className='text-4xl'>Back End Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellat ad quisquam maxime ratione magnam aperiam fugit atque quaerat eaque doloremque.</p>
                        <button className='px-3 py-2 bg-orange-500 text-2xl  rounded-full shadow-lg'>Check</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services