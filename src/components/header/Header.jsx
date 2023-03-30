import React from 'react'
import LogoEs from '../logo/LogoEs'
import Telephone from '../telephone/Telephone';
import './header.css'

function Header() {
  return (
    <div className='header'>
        <LogoEs />
        <Telephone />
    </div>
  )
}

export default Header