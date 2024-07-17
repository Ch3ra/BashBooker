import React from 'react';
import logo from './../assets/logo.jpg'; // Ensure the path to the logo is correct
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full py-3 border-b'>
      <div className='flex justify-between px-20 items-center font-semibold'>
        <div className='flex space-x-2'>
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className='mt-1 text-2xl'>Bash Booker</h1>
        </div>
        <div className='flex xl:gap-10 md:gap-8 gap-2'>
          <a href="/" className="relative hover:text-gray-700 transition ease-in-out duration-500 after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition after:ease-in-out after:duration-500 after:origin-left">Home</a>
          <a href="/" className="relative hover:text-gray-700 transition ease-in-out duration-500 after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition after:ease-in-out after:duration-500 after:origin-left">Venues</a>
          <a href="/" className="relative hover:text-gray-700 transition ease-in-out duration-500 after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition after:ease-in-out after:duration-500 after:origin-left">Add Venue</a>
          <a href="/" className="relative hover:text-gray-700 transition ease-in-out duration-500 after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition after:ease-in-out after:duration-500 after:origin-left">Services</a>
          
        </div>
        <div>
          <Link to ='/login'><button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold hover:bg-gray-800 transition ease-in-out duration-500'>Login</button></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
