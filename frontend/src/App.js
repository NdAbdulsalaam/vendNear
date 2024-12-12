import React from 'react';

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full border border-gray-300">
        {/* Payment Options Section */}
        <h2 className="text-xl font-bold text-gray-700 mb-4">Payment Options</h2>
        <div className="flex items-center justify-between border border-orange-400 p-3 rounded mb-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Remita-logo.png" alt="Remita" className="h-8" />
          <span className="bg-green-100 px-3 py-1 text-green-600 text-xs rounded">Internet Banking</span>
          <span className="bg-gray-100 px-3 py-1 text-gray-700 text-xs rounded">Mobile Wallets</span>
          <span className="bg-blue-100 px-3 py-1 text-blue-600 text-xs rounded">Bank Branches</span>
        </div>

        {/* Payment Details Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Invoice No:</span>
            <span className="text-gray-600">169415024633</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Payer Name:</span>
            <span className="text-gray-600">ABDULSALAAM NURUDEEN OLAITAN</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Payer Phone:</span>
            <span className="text-gray-600">08168874902</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Payer Email:</span>
            <span className="text-gray-600">olaitansalaam2012@gmail.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Amount:</span>
            <span className="text-gray-600">₦ 20,000.00</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
            PAY WITH REMITA
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
