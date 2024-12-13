// File: src/components/CustomerReviews.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const reviews = [
  {
    name: 'Michelle Adams',
    review: 'Great service, very reliable and professional.',
    image: 'https://via.placeholder.com/50',
    rating: 5,
  },
  {
    name: 'Paul Davis',
    review: 'Amazing experience! Will definitely recommend.',
    image: 'https://via.placeholder.com/50',
    rating: 4,
  },
  {
    name: 'Nurudeen Abdulsalaam',
    review: 'Great service, very reliable and professional.',
    image: 'https://via.placeholder.com/50',
    rating: 5,
  },
  {
    name: 'Sarah White',
    review: 'Truly exceptional, and quick support. Thank you!',
    image: 'https://via.placeholder.com/50',
    rating: 3,
  },
  {
    name: 'Daniel Brooks',
    review: 'Affordable and fantastic quality, very pleased.',
    image: 'https://via.placeholder.com/50',
    rating: 4,
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Customer Reviews</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000, disableOnInteraction: true }}
          breakpoints={{
            // Responsive settings
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-80">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={`${review.name}'s avatar`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{review.name}</h3>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500">&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviews;
