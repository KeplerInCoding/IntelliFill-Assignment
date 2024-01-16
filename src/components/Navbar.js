// Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/mainLogo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='h-16 w-screen border border-gray-100 flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='w-16 h-16 flex-shrink-0' src={logo} alt="logo" />
        <div className='font-semibold flex gap-5 hidden sm:flex'>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="">Result</NavLink>
          <NavLink to="">FAQ</NavLink>
          <NavLink to="">About Us</NavLink>
          <NavLink to="">Contact Us</NavLink>
        </div>
      </div>
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-gray-500 hover:text-gray-700'>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      <div className={`font-semibold flex gap-5 hidden sm:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="">Result</NavLink>
        <NavLink to="">FAQ</NavLink>
        <NavLink to="">About Us</NavLink>
        <NavLink to="">Contact Us</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
