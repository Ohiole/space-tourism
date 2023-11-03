import React from 'react'
import Logo from '../assets/shared/logo.svg';

function Header() {
  return (
    <header className='w-full pl-10 py-6 flex justify-between items-center'>
        <img src={Logo} alt="Company Logo" />
        <nav className='basis-3/5 bg-header-bg backdrop-blur-sm flex items-center justify-center add-before'>
          <ul className='text-white flex gap-20'>
            <li>
              <p>00 <span>HOME</span></p>
              <div className='line-under active-line'></div>
            </li>
            <li>
              <p>01 <span>DESTINATION</span></p>
              <div className='line-under'></div>
            </li>
            <li>
              <p>02 <span>CREW</span></p>
              <div className='line-under'></div>
            </li>
            <li>
              <p>03 <span>TECHNOLOGY</span></p>
              <div className='line-under'></div>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header