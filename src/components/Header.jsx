import React from 'react'
import Logo from '../assets/shared/logo.svg';

function Header() {
  return (
    <header className='w-full px-10 py-6 text-white flex justify-between items-center'>
        <img src={Logo} alt="Company Logo" />
        <nav>
          <ul>
            <li>00 <span>HOME</span></li>
            <li>01 <span>DESTINATION</span></li>
            <li>02 <span>CREW</span></li>
            <li>03 <span>TECHNOLOGY</span></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header