import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false)
    const toggleMenu=() =>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
       <nav className='flex justify-between items-center py-4 px-6 md:px-24 bg-white shadow-sm  fixed top-0 w-full z-50'>
         <h1 className='text-purple-500 text-3xl font-bold'>BALJINDER</h1>
         
         <div className='md:hidden text-2xl 'onClick={toggleMenu}>
            {isOpen ? <FaTimes/> : <FaBars/>}
         </div>

         <ul className={`md:flex md:space-x-8 text-gray-700 absolute md:static top-16 left-0 w-full 
          bg-white md:w-auto md:bg-transparent flex-col md:flex-row items-center md:itens-center 
          space-y-4 md:space-y-0 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
            <li className='hover:text-purple-600 cursor-pointer'>Home</li>
            <li className='hover:text-purple-600 cursor-pointer'>ABOUT</li>
            <li className='hover:text-purple-600 cursor-pointer'>SERVICES</li>
            <li className='hover:text-purple-600 cursor-pointer'>PROJECTS</li>
            <li className='hover:text-purple-600 cursor-pointer'>CONTACT</li>
             
         </ul>
       </nav>
    </div>
  )
}

export default Navbar
