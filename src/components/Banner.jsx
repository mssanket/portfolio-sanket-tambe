import bannerImage from '../assets/Sanket 1.png'
import bannerBackground from '../assets/Banner bg.webp'
import React from 'react';
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';

const Banner = () => {

    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Developer", " Java Full Stack Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <>
            <div
                style={
                    {
                        backgroundImage: `url(${bannerBackground})`,
                        backgroundSize: "cover",
                    }
                } className='main-container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center px-4 py-8 space-y-8 lg:space-y-0'>
                <div className='w-full flex items-center justify-center text-white lg:w-2/3'>
                    <div className=' space-y-2'>
                        <h3 className='text-2xl lg:text-3xl font-semibold'>Hi, I  am</h3>
                        <h1 className='text-4xl lg:text-5xl font-bold'>Sanket Harishchandra Tambe</h1>
                        <h2 className='text-2xl lg:text-3xl'> I am <span className='font-bold underline' ref={el}></span></h2>
                        <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Deserunt odio eveniet culpa nemo. Facilis,
                            velit cum a reiciendis eos reprehenderit.</p>
                        <div className='icons-container flex space-x-5'>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i className="fa-brands text-4xl fa-facebook"></i>
                            </a>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i className="fa-brands text-4xl fa-instagram"></i>
                            </a>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i className="fa-brands text-4xl fa-youtube"></i>
                            </a>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i className="fa-brands text-4xl fa-linkedin"></i>
                            </a>
                        </div>
                        <br />
                        <a className='text-sm lg:text-base  px-4 py-2 bg-orange-500 rounded-full shadow-lg' href="/contact">Contact Me</a>
                    </div>
                </div>
                <div className='w-full flex justify-center lg:w-1/3'>
                    <img className='rounded-full shadow-lg w-48 lg:w-64' src={bannerImage} />
                </div>
            </div>
        </>

    )
}

export default Banner