import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/about');
  };

  return (
    <div className="bg-light-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0"> 
            <img src="/2.jpg" alt="Furniture Hero" className="w-full rounded-lg shadow-lg" />
          </div>

          <div className="lg:w-1/2 mb-8 lg:mb-0 ml-5"> 
            <h1 className="text-4xl text-black font-bold mb-4">We are Provide a Solar Panel Services</h1>
            <p className="text-lg mb-6 text-black">
            V-TECH offers innovative solar solutions tailored for both businesses and homeowners.
            </p>
            <button onClick={handleShopNowClick} className="bg-black text-light-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
