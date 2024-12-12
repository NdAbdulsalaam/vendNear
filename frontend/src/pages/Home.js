import React from 'react';
import Hero from '../components/Hero';
import PromotionalOffer from '../components/PromotionalOffer';
import RecentlyViewed from '../components/RecentlyViewed';
import SuggestionsForYou from '../components/SuggestionsForYou';
import DealsOfTheDay from '../components/DealsOfTheDay';

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Hero Section */}
      <div className="col-span-2">
        <Hero />
        <PromotionalOffer />
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <RecentlyViewed />
        <SuggestionsForYou />
      </div>

      {/* Deals of the Day Section */}
      <div className="col-span-3 mt-6">
        <DealsOfTheDay />
      </div>
    </div>
  );
};

export default Home;
