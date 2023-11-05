import React from 'react'
import Logo from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';
import MenuBar from '../assets/shared/icon-hamburger.svg';

function Header() {
  return (
    <header className='w-full pl-10 py-6 flex justify-between items-center font-sans'>
        <img src={Logo} alt="Company Logo" />
        <img src={MenuBar} alt="The hamburger and close menu icon" className='md:hidden' />
        <nav className='basis-3/5  bg-header-bg backdrop-blur-sm flex items-center justify-center add-before absolute md:relative right-0 top-0 h-full'>
          <ul className='text-white flex flex-col md:flex-row ml-4 gap-10 lg:gap-20'>
            <li>
              <Link to='/'>
                <p><span className='hidden lg:block'>00</span> <span>HOME</span></p>
                <div className='line-under active-line'></div>
              </Link>
            </li>
            <li>
              <Link to='/destination'>
                <p><span className='hidden lg:block'>01</span> <span>DESTINATION</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
            <li>
              <Link to='/crew'>
                <p><span className='hidden lg:block'>02</span> <span>CREW</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
            <li>
              <Link to='/technology'>
                <p><span className='hidden lg:block'>03</span> <span>TECHNOLOGY</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header