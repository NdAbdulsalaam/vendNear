import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-black text-white py-2 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        vendNear
      </div>

      {/* Navigation Menu */}
      <nav className="flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-yellow-400">WOMEN</a>
        <a href="#" className="hover:text-yellow-400">MEN</a>
        <a href="#" className="hover:text-yellow-400">BABY & KIDS</a>
        <a href="#" className="hover:text-yellow-400">HOME</a>
        <a href="#" className="hover:text-yellow-400">CITY</a>
        <a href="#" className="hover:text-yellow-400">TRAVEL</a>
      </nav>

      {/* Search Bar and User Actions */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-gray-300 placeholder-gray-500 rounded-full pl-4 pr-10 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-2 text-gray-500" />
        </div>

        {/* User Actions */}
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-yellow-400">Sign In</a>
          <a href="#" className="hover:text-yellow-400">Register</a>
          <a href="#" className="relative hover:text-yellow-400 flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
            <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold rounded-full px-1">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
