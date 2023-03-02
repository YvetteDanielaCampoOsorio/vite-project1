import React from 'react'
import '../header/Header.css'

const Header = () => {
  return ( 
    <header className='header'>
    <div>
        <h1 className='h1'>Logo</h1>
    </div>  
    <nav className='nav'>
        <ul className='ul'>
            <li className='li'>Home</li>
            <li className='li'>Contact Us</li>
            <li className='li' >About Us</li>
        </ul>
    </nav>
    </header>)
};

export default Header
