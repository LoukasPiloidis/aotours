import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <ul className='navbar-wrapper'>
      <Link to='/' className='navbar-link'><li className='navbar-item'>Home</li></Link>
      <Link to='/popular' className='navbar-link'><li className='navbar-item'>Most Popular</li></Link>
      <Link to='ideas' className='navbar-link'><li className='navbar-item'>More Ideas</li></Link>
      <Link to='inspirations' className='navbar-link'><li className='navbar-item'>Inspirations</li></Link>
      <Link to='tips' className='navbar-link'><li className='navbar-item'>Tips</li></Link>
      <Link to='about' className='navbar-link'><li className='navbar-item'>About us</li></Link>
      <Link to='reviews' className='navbar-link'><li className='navbar-item'>Reviews</li></Link>
    </ul>
  )
}
export default Navbar