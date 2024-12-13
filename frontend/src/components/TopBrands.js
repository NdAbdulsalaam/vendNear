import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const TopBrands = () => {
  // Placeholder brand data
  const brands = [
    {
      id: 1,
      name: 'Qatar Airways',
      logo: 'https://via.placeholder.com/200?text=Qatar+Airways',
    },
    {
      id: 2,
      name: 'Netflix',
      logo: 'https://via.placeholder.com/200?text=Netflix',
    },
    {
      id: 3,
      name: 'Amazon',
      logo: 'https://via.placeholder.com/200?text=Amazon',
    },
    {
      id: 4,
      name: 'MailLink',
      logo: 'https://via.placeholder.com/200?text=MailLink',
    },
    {
      id: 5,
      name: 'Spotify',
      logo: 'https://via.placeholder.com/200?text=Spotify',
    },
    {
      id: 6,
      name: 'Google',
      logo: 'https://via.placeholder.com/200?text=Google',
    },
    {
      id: 7,
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/200?text=Microsoft',
    },
    {
      id: 8,
      name: 'Adobe',
      logo: 'https://via.placeholder.com/200?text=Adobe',
    },
  ];

  return (
    <div className="my-6">
      <h2 className="text-center text-lg font-bold mb-4">Top Brands</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={18}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          // Responsive settings
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="flex justify-center items-center bg-white p-2 shadow-lg rounded-lg">
              <img src={brand.logo} alt={brand.name} className="h-28 w-40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBrands;
