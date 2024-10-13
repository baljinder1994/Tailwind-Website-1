import React from 'react'
import { FaBehance, FaDribbble, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-100 text-center py-10'>
        <div className='text-purple-600 font-bold text-2xl'>BALJINDER</div>
       <p className='text-black font-semibold mt-4'>FOLLOW ME</p>
       <div className='flex justify-center space-x-6 mt-4 text-gray-500'>
        <FaFacebook className='hover:text-gray-700 cursor-pointer'/>
        <FaTwitter className='hover:text-gray-700 cursor-pointer' />
        <FaDribbble className='hover:text-gray-700 cursor-pointer'/>
        <FaInstagram className='hover:text-gray-700 cursor-pointer'/>
       </div>
       <p>Copyright &#9400; All rights reserved | This is made by Baljinder Kaur</p>
      </footer>
    </div>
  )
}

export default Footer
