import React, { useState } from 'react'
import Resume from '../assets/Resume.pdf'

const Header = () => {

    const [brandName, setbrandName] = useState("Sanket Harishchandra Tambe")
    const [menuLinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "#home",
            id: 1,
        },
        {
            title: "About",
            link: "#about",
            id: 2,
        },
        {
            title: "Skills",
            link: "#skills",
            id: 3,
        },
        {
            title: "Portfolio",
            link: "#portfolio",
            id: 4,
        },
        {
            title: "Contact",
            link: "#contact",
            id: 5,
        },
    ])

    const [actionButton] = useState({
        title: "Hire Me",
        link: Resume,
    })

    return (
        <>
            <div className='h-20 border main justify-between px-16 bg-gray-100 flex flex-col md:flex-row items-center text-center md:text-left'>
                <div>
                    <h1 className='text-2xl font-bold'>{brandName}</h1>
                </div>
                <div className='space-x-6'>
                    {menuLinks.map((link) => (
                        <a key={link.id} href={link.link} className='hover:text-orange-600'>{link.title}</a>
                    ))}
                    {/* 
                    <a href="/about" className='hover:text-orange-600'>About</a>
                    <a href="/skills" className='hover:text-orange-600'>Skills</a>
                    <a href="/portfolio" className='hover:text-orange-600'>Portfolio</a>
                    <a href="/contact" className='hover:text-orange-600'>Contact</a> */}
                </div>
                <div>
                    {/* Hire Me Button */}
                    <a href={actionButton.link} download={Resume.pdf} className='px-4 py-2 bg-orange-500 shadow rounded-full text-1xl'>{actionButton.title}</a>
                </div>
            </div>
        </>

    )
}

export default Header