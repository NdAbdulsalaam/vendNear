import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTshirt, FaShoePrints, FaGift } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faLaptop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  // State for sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Categories
  const categories = [
    { name: 'Traditional Wear', icon: <FaTshirt />, path: '/traditional-wear' },
    { name: 'Footwear', icon: <FaShoePrints />, path: '/footwear' },
    { name: 'Accessories', icon: <FaGift />, path: '/accessories' },
    { name: 'Furniture', icon: <FontAwesomeIcon icon={faCouch} />, path: '/furniture' },
    { name: 'Electronics', icon: <FontAwesomeIcon icon={faLaptop} />, path: '/electronics' },
    { name: 'Mobile Phones', icon: <FontAwesomeIcon icon={faMobileAlt} />, path: '/mobile-phones' },
  ];

  return (
    <div>
      {/* Toggle Sidebar Button */}
      <button
        className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 h-full bg-gray-100 w-64 p-4 transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0`}
      >
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center cursor-pointer hover:text-blue-500">
              {category.icon}
              <Link to={category.path} className="ml-2">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
