import React from 'react'
import logo from '../assets/logo-feza.jpg'
import Link from 'react-anchor-link-smooth-scroll'

export const Nav = () => {
  return (
    <div className='flex items-center justify-around mt-8'>
        <img className="h-10 sm:h-20 rounded-full shadow-2xl" src={logo}/>
        
    
            <ul className='flex space-x-4 md:space-x-8  uppercase font-sans font-semibold md:text-xl text-white' >
                <Link href='#about'><li className='border-b hover:border-b-amber-900 transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:text-amber-900'>about</li></Link>
                <Link href='#projects'><li className='border-b hover:border-b-amber-900 transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:text-amber-900'>projects</li></Link>
                <Link href='#contact'><li className='border-b hover:border-b-amber-900 transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:text-amber-900'>contact</li></Link>

            </ul>
        
    </div>
  )
}
