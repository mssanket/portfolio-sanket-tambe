import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='py-5 border bg-gray-100 flex justify-between px-72'>
        <div>
            <p>@2024 Sanket Harishchandra Tambe <span>All Rights Reserved</span></p>
        </div>
        <div className='space-x-5'>
            <a href="/about" className='hover:underline'>About</a>
            <a href="/policy" className='hover:underline'>Privacy Policy</a>
            <a href="/licencing" className='hover:underline'>Licencing</a>
            <a href="/contact" className='hover:underline'>Contact</a>
        </div>
    </div>
    </>
  )
}

export default Footer