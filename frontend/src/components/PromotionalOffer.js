import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const PromotionalOffer = () => {
  const products = [
    {
      id: 1,
      title: 'AVAKEN Hand Purse',
      price: '$30.00',
      img: 'https://via.placeholder.com/150', // Replace with product image URL
    },
    {
      id: 2,
      title: 'Iconic Watch',
      price: '$120.00',
      img: 'https://via.placeholder.com/150', // Replace with product image URL
    },
    {
      id: 3,
      title: 'Modern Lamp',
      price: '$45.00',
      img: 'https://via.placeholder.com/150', // Replace with product image URL
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-md font-semibold text-gray-700">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.price}</p>
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center">
              <FaShoppingCart className="mr-2" /> Add to Cart
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

export default PromotionalOffer;
