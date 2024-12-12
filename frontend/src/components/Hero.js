import React from 'react';

const Hero = () => {
  return (
    <div className="bg-teal-100 p-6 rounded-lg flex justify-between items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Biggest Offer Revealed</h2>
        <p className="text-gray-600 text-lg">MORE DEALS INSIDE</p>
        <p className="text-gray-600 text-lg mb-4">UP TO 50% OFF</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Shop Now
        </button>
      </div>

      {/* Chair Image */}
      <div>
        <img
          src="https://via.placeholder.com/150" // Replace with your chair image URL
          alt="Chair"
          className="w-48 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
