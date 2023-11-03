import React from 'react'
import Logo from '../assets/shared/logo.svg';

function Header() {
  return (
    <header className='w-full pl-10 py-6 flex justify-between items-center'>
        <img src={Logo} alt="Company Logo" />
        <nav className='basis-3/5 bg-header-bg backdrop-blur-sm flex items-center justify-center'>
          <ul className='text-white flex gap-20'>
            <li className='relative flex flex-col justify-center items-center cursor-pointer py-8 group'>
              <p>00 <span>HOME</span></p>
              <div className='absolute bottom-0 w-full h-1 bg-white group-hover:bg-link-hover transition-all duration-300 ease-in-out'></div>
            </li>
            <li className='relative flex flex-col justify-center items-center cursor-pointer py-8 group'>
              <p>01 <span>DESTINATION</span></p>
              <div className='absolute bottom-0 w-full h-1 group-hover:bg-link-hover transition-all duration-300 ease-in-out'></div>
            </li>
            <li className='relative flex flex-col justify-center items-center cursor-pointer py-8 group'>
              <p>02 <span>CREW</span></p>
              <div className='absolute bottom-0 w-full h-1 group-hover:bg-link-hover transition-all duration-300 ease-in-out'></div>
            </li>
            <li className='relative flex flex-col justify-center items-center cursor-pointer py-8 group'>
              <p>03 <span>TECHNOLOGY</span></p>
              <div className='absolute bottom-0 w-full h-1 group-hover:bg-link-hover transition-all duration-300 ease-in-out'></div>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header