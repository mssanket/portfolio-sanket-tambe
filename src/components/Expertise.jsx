import React from 'react'
import bannerBackground from '../assets/Banner bg.png'

const Expertise = () => {
    return (
        <>
            <div className='mt-2'>
                <h1 className='mb-16 text-5xl font-bold underline text-center'>My Expertise</h1>
                <div
                    style={
                        {
                            backgroundImage: `url(${bannerBackground})`,
                            backgroundSize: "cover",
                        }
                    }
                    className='box-container items-center flex py-16'>
                    <div className='flex text-white justify-center'>
                        {/* Text container */}
                        <div className='w-2/3 text-center space-y-4'>
                            <h1 className='text-4xl font-bold '>I love these technologies</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                In rerum suscipit eum praesentium quasi velit dolor
                                a illum placeat necessitatibus quas minima modi,
                                assumenda perferendis repellat reiciendis beatae cum eos?</p>
                            <button className=' text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg'>Hire Me</button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        {/* Skills container */}
                        <div className=' justify-center w-2/3 flex h-fit space-x-3 flex-wrap'>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Core Java</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>J2EE</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Hibernate (ORM Tool)</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Spring Framework</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Spring Boot Framework</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Spring Security</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Javascript</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>ReactJS</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>SQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise