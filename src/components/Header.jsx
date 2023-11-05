import React from 'react'
import Logo from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='w-full pl-10 py-6 flex justify-between items-center font-sans'>
        <img src={Logo} alt="Company Logo" />
        <nav className='basis-3/5 bg-header-bg backdrop-blur-sm flex items-center justify-center add-before'>
          <ul className='text-white flex gap-20'>
            <li>
              <Link to='/'>
                <p>00 <span>HOME</span></p>
                <div className='line-under active-line'></div>
              </Link>
            </li>
            <li>
              <Link to='/destination'>
                <p>01 <span>DESTINATION</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
            <li>
              <Link to='/crew'>
                <p>02 <span>CREW</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
            <li>
              <Link to='/technology'>
                <p>03 <span>TECHNOLOGY</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header