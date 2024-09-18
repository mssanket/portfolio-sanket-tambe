import React, { useState } from 'react'
import Resume from '../assets/Resume.pdf'

const Header = () => {

    const [brandName, setbrandName] = useState("Sanket Harishchandra Tambe")
    const [menuOpen, setmenuOpen] = useState(false)
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
            <div className='h-20 border bg-gray-100 flex flex-col md:flex-row justify-between px-6 md:px-16 items-center'>
                {/* Brand Name */}
                <div className='flex justify-between w-full md:w-auto'>
                    <h1 className='text-2xl font-bold'>{brandName}</h1>
                    {/* Hamburger Menu Icon */}
                    <button
                        className='md:hidden block text-3xl'
                        onClick={() => setmenuOpen(!menuOpen)}
                    >
                        <i className="fas fa-bars"></i>

                    </button>
                </div>

                {/* Menu Link */}

                <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex space-x-6 text-center md:text-left`}>
                    {menuLinks.map((link) => (
                        <a key={link.id} href={link.link} className='hover:text-orange-600'>{link.title}</a>
                    ))}
                    {/* 
                    <a href="/about" className='hover:text-orange-600'>About</a>
                    <a href="/skills" className='hover:text-orange-600'>Skills</a>
                    <a href="/portfolio" className='hover:text-orange-600'>Portfolio</a>
                    <a href="/contact" className='hover:text-orange-600'>Contact</a> */}
                </nav>

                {/* Hire Me Button (Visible in Menu on Mobile) */}
                <a
                    href={actionButton.link}
                    download
                    className="block md:hidden px-4 py-2 mt-2 bg-orange-500 shadow rounded-full text-1xl"
                >
                    {actionButton.title}
                </a>

                {/* Hire Me Button on desktop*/}

                <div className="hidden md:block">

                    <a href={actionButton.link} download={Resume.pdf} className='px-4 py-2 bg-orange-500 shadow rounded-full text-1xl'>{actionButton.title}</a>
                </div>
            </div>
        </>

    )
}

export default Header