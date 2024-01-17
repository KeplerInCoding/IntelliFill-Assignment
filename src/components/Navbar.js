import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/mainLogo.png'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='relative h-[100px] w-screen border-b-[1.5px] bg-white border-gray-300 flex justify-center items-center'>
      <div className='flex place-content-between items-center p-3 w-full md:w-5/6 gap-3'>
        <div className='flex-shrink-0 px-'>
          <img width="100px" src={logo} alt="logo" />
        </div>
        <div className=' font-semibold gap-5 flex-shrink-0 hidden md:flex'>
          <NavLink className="text-blue-500" to="/" end>Home</NavLink>
          <NavLink to="">Result</NavLink>
          <NavLink to="">FAQ</NavLink>
          <NavLink to="">About Us</NavLink>
          <NavLink to="">Contact Us</NavLink>
        </div>
        <div className=' text-gray-500 rounded-full border border-blue-500 text-xs p-2 w-80 flex items-center gap-x-2'>
            <i class="fas fa-search"></i>
            <input className='overflow-hidden' type="text" placeholder="Search exams here" />
        </div>
        <div className='flex gap-2 text-blue-500'>
          <i class="fa-regular fa-bell"></i>
          <i class="fa-regular fa-user"></i>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-gray-500 hover:text-gray-700'>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          
        </div>
        <div className={`font-semibold md:hidden absolute place-content-end right-0 top-[90px] bg-white px-5 flex gap-5 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
            <NavLink className="w-40 border-b pb-1" to="/" end>Home</NavLink>
            <NavLink className="border-b pb-1" to="">Result</NavLink>
            <NavLink className="border-b pb-1" to="">FAQ</NavLink>
            <NavLink className="border-b pb-1" to="">About Us</NavLink>
            <NavLink className="border-b pb-1" to="">Contact Us</NavLink>
          </div>
      </div>
    </div>
  )
}

export default Navbar