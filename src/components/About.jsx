import bannerImage from '../assets/Sanket 2.png'
import React from 'react'
import { useState } from 'react'

const About = () => {

    const [data, setdata] = useState({
        image: bannerImage,
        title: "Full Stack Java Developer",
        desc1: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quae fugit cumque quod laudantium ullam eum laborum commodi sunt unde consequuntur.`,
        decs2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nesciunt!",
        actionButton: {
            title: "Read More..",
            link: "/readmore"
        }
    })

    return (
        <>
            <div className='main-container bg-gray-100 py-16'>
                <h1 className='text-center pb-16 text-5xl font-bold underline'>About Me</h1>
                <div className='flex items-center'>
                    <div className='w-full flex justify-center'>
                        <img className='w-fit rounded-3xl' src={data.image} alt="" />
                    </div>
                    <div className='w-full  flex justify-center'>
                        <div className='space-y-5 w-2/3'>
                            <h1 className='text-5xl  font-semibold'>
                                {data.title}
                            </h1>
                            <p>
                                {data.desc1}
                            </p>
                            <p>
                                {data.decs2}
                            </p>
                            <button className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'>
                                {data.actionButton.title}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About