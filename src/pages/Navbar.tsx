import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../resources/logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/awards', label: 'Awards' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-black backdrop-blur-lg p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <div className="text-white font-bold text-xl">
          <Link to="/" className="text-gray-700 font-bold text-xl">
              <img src={logo} alt="MozziQuit Logo" className="h-11 mr-4" /> {/* Use your imported logo */}
            </Link>
          </div>

          {/* Right: Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-yellow-200 ">
              Home
            </Link>
            <Link to="/awards" className="text-white hover:text-yellow-200 ">Awards</Link>
            {/* <a href="/awards" className="text-white hover:text-yellow-200 ">Awards</a> */}
            <Link to="/about" className="text-white hover:text-yellow-200 ">About Us</Link>
          </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-strong)] text-white md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M10 17h10" />
                )}
              </svg>
            </button>
          </div>

      <div className="bg-gray-800 p-7 w-full top-0" />
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link to="/" className="block text-white hover:text-yellow-200 py-2">Home</Link>
          {/* <Link to="/products" className="block text-white hover:text-yellow-200 py-2">Products</Link> */}
          <Link to="/awards" className="block text-white hover:text-yellow-200 py-2">Awards</Link>
          <Link to="/about" className="block text-white hover:text-yellow-200 py-2">About Us</Link>
        </div>
      )}
    </div>

  );
};

export default Navbar;
