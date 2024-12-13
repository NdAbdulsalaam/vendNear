import React from 'react';
import Hero from '../components/Hero';
import PromotionalOffer from '../components/PopularProducts';
import RecentlyViewed from '../components/RecentlyViewed';
import SuggestionsForYou from '../components/SuggestionsForYou';
import DealsOfTheDay from '../components/DealsOfTheDay';
import BestSellers from '../components/BestSellers';
import TopBrands from '../components/TopBrands';
import CustomerReviews from '../components/CustomerReviews';

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

      {/* Deals of the Day Section */}
      <div className="col-span-3 mt-6">
        <BestSellers />
      </div>

      {/* Top Brands Section */}
      <div className="col-span-3 mt-6">
        <TopBrands />
      </div>

      {/* Customer Reviews Section */}
      <div className="col-span-3 mt-6">
        <CustomerReviews />
      </div>

    </div>
  );
};

export default Home;
