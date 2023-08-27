// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../components/Button.css'
import Button from './Button'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <div className="navbar-logo">
            <a href="#" className='brand-logo'>Nike</a>
        </div>
        <div className="nav-links">
            <a href="#" className='nav-link'>Menu</a>
            <a href="#" className='nav-link'>Location</a>
            <a href="#" className='nav-link'>About</a>
            <a href="#" className='nav-link'>Contact</a>
        </div>
        <Button text="SignIn" category="btn-nav"/>
       
      
    </nav>
    </>
  )
}

export default Navbar