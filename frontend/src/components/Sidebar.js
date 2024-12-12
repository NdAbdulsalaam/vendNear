import React from 'react';
import { FaTshirt, FaShoePrints, FaGift } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 p-4 h-screen">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <FaTshirt className="mr-2" /> Traditional Wear
        </li>
        <li className="flex items-center">
          <FaShoePrints className="mr-2" /> Footwear
        </li>
        <li className="flex items-center">
          <FaGift className="mr-2" /> Accessories
        </li>
        {/* Add more categories */}
      </ul>
    </div>
  );
};

export default Sidebar;
