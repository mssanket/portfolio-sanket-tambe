import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='py-5 border bg-gray-100 flex flex-col md:flex-row justify-between md:px-72 space-y-5 md:space-y-0'>
        <div>
          <p>@2024 Sanket Harishchandra Tambe <span>All Rights Reserved</span></p>
        </div>
        <div className='space-x-5'>
          <a href="#about" className='hover:underline'>About</a>
          <a href="#privacy-policy" className='hover:underline'>Privacy Policy</a>
          <a href="#licensing" className='hover:underline'>Licensing</a>
          <a href="#contact" className='hover:underline'>Contact</a>
        </div>
      </div>
    </>
  )
}

export default Footer