import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const SuggestionsForYou = () => {
  const items = [
    {
      id: 1,
      img: 'https://via.placeholder.com/100', // Replace with your product image URL
      title: 'Classic Leather Bag',
      price: '$120.00',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/100', // Replace with your product image URL
      title: 'Modern Handbag',
      price: '$80.00',
    },
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Suggestions For You</h3>
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4">
          {/* Product Image */}
          <div className="flex items-center">
            <img src={item.img} alt={item.title} className="w-16 h-16 rounded-lg mr-4" />
            <div>
              <p className="text-gray-800 font-semibold">{item.title}</p>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>

          {/* Actions: Cart & Wishlist */}
          <div className="flex space-x-4">
            <button className="text-blue-500 hover:text-blue-600">
              <FaShoppingCart />
            </button>
            <button className="text-red-500 hover:text-red-600">
              <FaHeart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestionsForYou;
