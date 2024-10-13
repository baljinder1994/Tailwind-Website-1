import React from 'react'

const Clients = () => {
  return (
    <div>
       <div className='bg-white py-16'>
        <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>CLIENT SAY ABOUT ME</h2>
            <p className=''></p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='p-6 bg-gray-50 rounded-lg shadow-lg text-center'>
                   <img src="about.png" className='w-24 h-24 mx-auto rounded-full mb-4'></img>
                   <h3 className='text-xl font-bold text-gray-900 '>BALJINDER KAUR</h3>
                   <p className='text-gray-500 mt-2'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
                </div>

                <div className='p-6 bg-gray-50 rounded-lg shadow-lg text-center'>
                   <img src="about.png" className='w-24 h-24 mx-auto rounded-full mb-4'></img>
                   <h3 className='text-xl font-bold text-gray-900 '>BALJINDER KAUR</h3>
                   <p className='text-gray-500 mt-2'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
                </div>
                
            </div>
        </div>
       </div>
    </div>
  )
}

export default Clients
