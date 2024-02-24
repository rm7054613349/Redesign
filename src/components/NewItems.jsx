import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './NewItems.css';

const NewItems = () => {

  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/about');
  };
  return (
    <div className="flex flex-col md:flex-row container">
      <div className="w-full md:w-1/4 bg-gray-200 p-8">
        <h1 className="text-4xl text-black font-bold">Design &<br/>Engineering</h1>
        <p className='mt-5 text-lg text-black'>V-TECH specializes in conducting thorough feasibility studies to assess the viability of solar projects. </p>
        <div className='flex items-center mt-3'>
          <button onClick={handleShopNowClick} className='text-xl mr-2'>Check All</button>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      

      <div className="w-full md:w-3/4">
        <Swiper
          slidesPerView={1}
          spaceBetween={9}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide><img src='/1.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/2.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/3.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/5.avif'className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/3.webp' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/6.avif' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/7.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/8.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/9.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/123.png' className='rounded-lg'/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewItems;
