import React from 'react'
import Logo from '../assets/shared/logo.svg';

function Header() {
  return (
    <header>
        <img src={Logo} alt="Company Logo" />
    </header>
  )
}

export default Header