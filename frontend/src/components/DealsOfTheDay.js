import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const DealsOfTheDay = () => {
  const products = [
    {
      id: 1,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'Red leather GUCCI bag',
      price: '$450',
      oldPrice: '$500',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'LEXRX face cream',
      price: '$300',
      oldPrice: '$400',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'Fuji Film DSLR camera',
      price: '$35,000',
      oldPrice: '$39,000',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'Sky blue kids shoe',
      price: '$910',
      oldPrice: '$1,390',
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'Brown leather wallet',
      price: '$600',
      oldPrice: '$800',
    },
  ];

  return (
    <div className="bg-teal-50 p-6 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Deals of the Day</h2>
        <div className="flex items-center text-red-600 font-bold">
          <span className="mr-2">20 : 45 : 12</span> <span>Left</span>
        </div>
        <a href="#" className="text-blue-500 hover:underline text-sm">
          View All Deals
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
              alt={product.title}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />

            {/* Product Info */}
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              {product.title}
            </h3>
            <div className="text-gray-600 text-sm flex justify-between items-center mb-2">
              <span className="font-bold text-green-600">{product.price}</span>
              <span className="line-through text-gray-400">{product.oldPrice}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
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
    </div>
  );
};

export default DealsOfTheDay;
