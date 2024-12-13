import React from 'react';

const BelowHeader = () => {
  return (
    <div className="bg-white border-t border-b border-gray-200 py-2 text-center sticky top-12 z-40">
      <p className="text-sm text-gray-600">
        <span className="font-medium">Spread the Love -</span> Share Gilt and Get $25 for You and Your Friends!{' '}
        <a href="#" className="text-orange-500 font-semibold hover:underline">
          Get Started
        </a>
      </p>
    </div>
  );
};

export default BelowHeader;
