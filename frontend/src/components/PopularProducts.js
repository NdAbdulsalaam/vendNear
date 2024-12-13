import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const PromotionalOffer = () => {
  const products = [
    {
      id: 1,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'AVAKEN Hand Purse',
      price: '$30.00',
      oldPrice: '$40.00', // You can add old price if applicable
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'Iconic Watch',
      price: '$120.00',
      oldPrice: '$150.00', // You can add old price if applicable
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/150', // Replace with product image URL
      title: 'Modern Lamp',
      price: '$45.00',
      oldPrice: '$60.00', // You can add old price if applicable
    },
  ];

  return (
    <div className="bg-teal-50 p-6 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Popular Products</h2>
        <a href="#" className="text-blue-500 hover:underline text-sm">
          View All Products
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4">
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
            <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
            <div className="text-gray-600 text-sm flex justify-between items-center mb-2">
              <span className="font-bold text-green-600">{product.price}</span>
              {product.oldPrice && (
                <span className="line-through text-gray-400">{product.oldPrice}</span>
              )}
            </div>

            {/* Action Buttons */}
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
    </div>
  );
};

export default PromotionalOffer;
