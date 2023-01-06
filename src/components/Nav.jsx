import React from 'react'
import logo from '../assets/logo-feza.jpg'

export const Nav = () => {
  return (
    <div className='flex items-center justify-around mt-8'>
        <img className="h-10 md:h-20 rounded-full shadow-2xl" src={logo}/>
        
    
            <ul className='flex space-x-4 md:space-x-8  uppercase font-sans font-semibold md:text-xl text-white' >
                <li className='border-b hover:border-b-amber-900 transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:text-amber-900'>Home</li>
                <li className='border-b hover:border-b-amber-900 transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:text-amber-900'>about</li>
                <li className='border-b hover:border-b-amber-900 transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:text-amber-900'>projects</li>
                <li className='border-b hover:border-b-amber-900 transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:text-amber-900'>contact</li>

            </ul>
        
    </div>
  )
}
