import React from 'react';
import Hero from './Hero';
import Deals from './Deals';

const Main = () => {
  return (
    <div className="flex-1 p-4">
      <Hero />
      <Deals />
    </div>
  );
};

export default Main;
