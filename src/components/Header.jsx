import React, { useState } from 'react'
import Logo from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';
import MenuBar from '../assets/shared/icon-hamburger.svg';
import CloseMenu from '../assets/shared/icon-close.svg';

function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className='w-full pl-10 py-6 flex justify-between items-center font-sans'>
        <img src={Logo} alt="Company Logo" />
        <img src={menu ? CloseMenu : MenuBar} alt="The hamburger and close menu icon" className='md:hidden z-40 cursor-pointer mr-4' onClick={toggleMenu}/>
        <nav className={`w-2/3 md:w-4/5 lg:w-[42rem] xl:w-128 bg-header-bg backdrop-blur-2xl md:backdrop-blur-lg md:flex md:items-center pt-24 md:pt-0 md:justify-center add-before fixed md:relative transition-all duration-500 ease-in-out top-0 h-full ${menu ? 'right-0' : '-right-96'}`}>
          <ul className='w-full text-white flex flex-col md:flex-row md:ml-4 gap-4 md:gap-10 lg:gap-20'>
            <li>
              <Link to='/'>
                <p><span className='block md:hidden lg:block'>00</span> <span className='nav'>HOME</span></p>
                <div className='line-under active-line'></div>
              </Link>
            </li>
            <li>
              <Link to='/destination'>
                <p><span className='block md:hidden lg:block'>01</span> <span className='nav'>DESTINATION</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
            <li>
              <Link to='/crew'>
                <p><span className='block md:hidden lg:block'>02</span> <span className='nav'>CREW</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
            <li>
              <Link to='/technology'>
                <p><span className='block md:hidden lg:block'>03</span> <span className='nav'>TECHNOLOGY</span></p>
                <div className='line-under'></div>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header