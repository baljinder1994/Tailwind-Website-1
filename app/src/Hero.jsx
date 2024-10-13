import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className='bg-white flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-24 md:py-20'>
        <div className='flex flex-col items-start space-y-6 md:space-y-8 md:w-2/3'>
            <h2 className='text-3xl md:text-4xl font-bold'>HELLO
            <hr className='w-20 border-t-4 border-black my-3'></hr>
            <span className='text-6xl md:text-7xl'>I AM BALJINDER</span>
            </h2>
            <p className='text-gray-700 text-lg md:text-xl'>SENIOR WEB DEVELOPER</p>
         <div className='flex space-x-4'>
            <button className='bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-800 hover:text-white text-lg'>HIRE ME</button>
            <button className='border border-purple-600 text-purple-600 py-3 px-8 rounded-lg hover:bg-purple-600 hover:text-white text-lg'>GET CV</button>
         </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2 flex justify-center'>
            <img src="home.png" className='w-80 md:w-96 lg:w-[500px] h-auto'></img>
        </div>
      </section>
    </div>
  )
}

export default Hero
