
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left: Logo */}
            <div className="text-white font-bold text-xl">
              <Link to="/">MozziQuit</Link>
            </div>

            {/* Right: Nav Links */}
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
              <Link to="/awards" className="text-white hover:text-gray-300">Awards</Link>
              <Link to="/contacts" className="text-white hover:text-gray-300">Contacts</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="bg-gray-800 p-7 w-full top-0" />
    </div>
  );
};

export default Navbar;
