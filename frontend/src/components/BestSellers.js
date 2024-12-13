import React from 'react';
import { FaHeart } from 'react-icons/fa';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      storeName: 'Fashion Store',
      rating: 4.5,
      location: 'New York',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      storeName: 'Tech Gadgets',
      rating: 4.7,
      location: 'Los Angeles',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      storeName: 'Audio World',
      rating: 4.3,
      location: 'San Francisco',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      storeName: 'Mobile Accessories',
      rating: 4.2,
      location: 'Miami',
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      storeName: 'Health Essentials',
      rating: 4.8,
      location: 'Chicago',
    },
  ];

  return (
    <div className="bg-teal-50 p-6 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Bestsellers</h2>
        <a href="#" className="text-blue-500 hover:underline text-sm">
          View All Bestsellers
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.storeName}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />

            {/* Store Info */}
            <div className="text-gray-600 text-xs mb-2">
              <div className="font-semibold">{product.storeName}</div>
              <div className="flex items-center text-yellow-500">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span>{product.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center">
                View Store
              </button>
              <button className="text-red-500 hover:text-red-600">
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
