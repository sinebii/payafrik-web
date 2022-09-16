import React from 'react';
import palogo from './payAfrik_logo.png';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <img src={palogo} alt="PayAffrik logo"/>
      </div>
      <div className='menuItems'>
            <ul className='menu'>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
                
            </ul>
      </div>
    </div>
  )
}

export default NavBar
