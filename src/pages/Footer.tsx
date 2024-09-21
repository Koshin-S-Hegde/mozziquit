// import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resources/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src={Logo} alt="MozziQuit Logo" className="mb-4 w-36" />
          <p>MozziQuit Solutions - Your mosquito control expert.</p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-bold mb-3">MozziQuit Solutions LLP</h3>
          <h3 className="font-normal mb-3">
              Hotel Prithvi Regency Building,<br />
              Door No 1-N-2-183, Ground Floor,<br />
              Opposite Infosys and Dakshina Kannada<br />
              Panchayat Name Board, Kottara,<br />
              Ashoknagar Post, Mangalore - 575006,<br />
              Karnataka, India<br /></h3>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">
              Email: orwinnoronha@gmail.com<br />
              Phone: +91 9886675656<br />
              </h3>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="font-bold mb-3">Information</h3>
          <ul>
            <li>
              <Link to="/about" className="cursor-pointer hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/awards" className="cursor-pointer hover:underline">Awards</Link>
            </li>
            <li>
              <Link to="/product" className="cursor-pointer hover:underline">Product</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-8 border-t border-gray-700 mt-8">
        <p>&copy; {new Date().getFullYear()} MozziQuit Solutions LLP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
