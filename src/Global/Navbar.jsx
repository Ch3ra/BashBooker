import React from 'react';
import logo from './../assets/logo.jpg'; // Ensure the path to the logo is correct
import { NavLink, Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline'; // Import the profile icon from Heroicons

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full py-3 border-b bg-white">
      <div className="flex justify-between px-20 items-center font-semibold">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="mt-1 text-2xl">Bash Booker</h1>
        </div>
        <div className="flex xl:gap-10 md:gap-8 gap-2">
          <NavLink 
            to="/" 
            exact
            className={({ isActive }) => 
              `relative px-3 py-2 transition-colors duration-300 ease-in-out ${isActive ? 'text-black' : 'text-gray-500'}`
            }
          >
            <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-active:scale-x-100"></span>
            Home
          </NavLink>
          <NavLink 
            to="/venue"
            className={({ isActive }) => 
              `relative px-3 py-2 transition-colors duration-300 ease-in-out ${isActive ? 'text-black' : 'text-gray-500'}`
            }
          >
            <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-active:scale-x-100"></span>
            Venues
          </NavLink>
          <NavLink 
            to="/form"
            className={({ isActive }) => 
              `relative px-3 py-2 transition-colors duration-300 ease-in-out ${isActive ? 'text-black' : 'text-gray-500'}`
            }
          >
            <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-active:scale-x-100"></span>
            Add Venue
          </NavLink>
          <button 
            onClick={() => scrollToSection('aboutus')}
            className="relative px-3 py-2 transition-colors duration-300 ease-in-out text-gray-500 hover:text-black"
          >
            <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-active:scale-x-100"></span>
            Service
          </button>
        </div>
        <div className="flex items-center space-x-10">
          {/* Profile Icon */}
          <Link to="/profile" className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">
            <UserIcon className="w-6 h-6" />
          </Link>
          {/* Login Button */}
          <Link to='/login'>
            <button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold hover:bg-gray-800 transition ease-in-out duration-300'>
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
