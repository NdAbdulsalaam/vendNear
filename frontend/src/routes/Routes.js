import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages/components
import Home from '../pages/Home';
import TraditionalWear from '../pages/TraditionalWear';
import Footwear from '../pages/Footwear';
import Accessories from '../pages/Accessories';
import Furniture from '../pages/Furniture';
import Electronics from '../pages/Electronics';
import MobilePhones from '../pages/MobilePhones';

// Define all routes in one place
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/traditional-wear" element={<TraditionalWear />} />
      <Route path="/footwear" element={<Footwear />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/mobile-phones" element={<MobilePhones />} />
    </Routes>
  );
};

export default AppRoutes;
