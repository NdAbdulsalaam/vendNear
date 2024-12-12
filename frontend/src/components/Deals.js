import React from 'react';

const Deals = () => {
  const deals = [
    { id: 1, name: 'Red leather GUCCI bag', price: 4500 },
    { id: 2, name: 'Fuji Film DSLR camera', price: 35000 },
    { id: 3, name: 'Brown leather wallet', price: 600 },
    // Add more deals
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Deals of the Day</h2>
      <div className="grid grid-cols-2 gap-4">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-md font-semibold">{deal.name}</h3>
            <p className="text-gray-600">₦{deal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
