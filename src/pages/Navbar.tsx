import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left: Logo */}
            <div className="text-white font-bold text-xl">
              <Link to="/">MozziQuit</Link>
            </div>

        {/* Right: Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/product" className="text-white hover:text-gray-300">Products</Link>
          <Link to="/awards" className="text-white hover:text-gray-300">Awards</Link>
          <Link to="/about" className="text-white hover:text-gray-300">Contacts</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Icon for the button */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-600">Home</Link>
          <Link to="/products" className="block px-4 py-2 text-white hover:bg-gray-600">Products</Link>
          <Link to="/awards" className="block px-4 py-2 text-white hover:bg-gray-600">Awards</Link>
          <Link to="/about" className="block px-4 py-2 text-white hover:bg-gray-600">About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
