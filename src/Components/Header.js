import React from 'react'
import Navbar from './Navbar'
import logo from '../public/logo.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <div className='header-inner-wrapper'>
        <div className='logo-wrapper'>
          <img src={logo} alt={'logo'} className='logo' />
        </div>
        <div className='button-wrapper'>
          <button type='submit' className='start-planning-here-btn'>Start Planning Here</button>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header