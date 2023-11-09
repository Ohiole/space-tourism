import React, { useContext, useState } from 'react'
import Logo from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';
import MenuBar from '../assets/shared/icon-hamburger.svg';
import CloseMenu from '../assets/shared/icon-close.svg';
import { ContextPage } from '../Context/ContextPage';

function Header() {
  const [menu, setMenu] = useState(false);
  const {setPageBg, pageBg} = useContext(ContextPage)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const setToHome = () => {
    setPageBg('Home');
    setMenu(false)
  }

  const setToDestination = () => {
    setPageBg('Destination');
    setMenu(false)
  }

  const setToCrew = () => {
    setPageBg('Crew');
    setMenu(false)
  }

  const setToTech = () => {
    setPageBg('Technology');
    setMenu(false)
  }

  return (
    <header className='w-full pl-10 py-6 flex justify-between items-center font-sans'>
        <img src={Logo} alt="Company Logo" />
        <img src={menu ? CloseMenu : MenuBar} alt="The hamburger and close menu icon" className='md:hidden z-50 cursor-pointer mr-4' onClick={toggleMenu}/>
        <nav className={`w-2/3 md:w-4/5 lg:w-[42rem] xl:w-128 bg-header-bg backdrop-blur-2xl md:backdrop-blur-lg md:flex md:items-center pt-24 md:pt-0 md:justify-center add-before fixed md:relative transition-all md:right-0 duration-500 ease-in-out top-0 h-full z-10 ${menu ? 'right-0' : '-right-96'}`}>
          <ul className='w-full text-white flex flex-col md:flex-row md:ml-4 gap-4 md:w-auto md:gap-10'>
            <Link to='/' onClick={setToHome}>
              <li>
                <p><span className='block md:hidden lg:block'>00</span> <span className='nav'>HOME</span></p>
                <div className={`line-under ${pageBg === 'Home' ? 'active-line' : ''}`}></div>
              </li>
            </Link>
            <Link to='/destination' onClick={setToDestination}>
              <li>
                <p><span className='block md:hidden lg:block'>01</span> <span className='nav'>DESTINATION</span></p>
                <div className={`line-under ${pageBg === 'Destination' ? 'active-line' : ''}`}></div>
              </li>
            </Link>
            <Link to='/crew' onClick={setToCrew}>
              <li>
                <p><span className='block md:hidden lg:block'>02</span> <span className='nav'>CREW</span></p>
                <div className={`line-under ${pageBg === 'Crew' ? 'active-line' : ''}`}></div>
              </li>
            </Link>
            <Link to='/technology' onClick={setToTech}>
              <li>
                <p><span className='block md:hidden lg:block'>03</span> <span className='nav'>TECHNOLOGY</span></p>
                <div className={`line-under ${pageBg === 'Technology' ? 'active-line' : ''}`}></div>
              </li>
            </Link>
          </ul>
        </nav>
    </header>
  )
}

export default Header