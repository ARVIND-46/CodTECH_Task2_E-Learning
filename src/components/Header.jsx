import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Header = () => {
  return (
    <>
     <div className='bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-6 shadow-lg '> 
        <h1 className='text-2xl font-bold'>Welcome Back, Arvind</h1>
        <h4 className='text-lg mb-4'>Ready to learn something new today?</h4>
        <button className='bg-white text-indigo-700 px-8 py-3 rounded-full flex items-center shadow-lg hover:translate-x-1 transition-transform border-b-4 border-indigo-700 whitespace-nowrap'>Continue Learning <FaArrowRight className='ml-2' /></button>
     </div>
    </>
  )
}

export default Header