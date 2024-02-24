import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lightfooter = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="relative bg-cover bg-center h-100" style={{ backgroundImage: "url('/lamp.avif')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 py-32 relative z-10 flex justify-end items-center">
        <div className="lg:w-1/2 text-white">
          <p className="text-lg mb-6">We value your experience! Have a suggestion or need assistance with our services Let us know! Your feedback helps us improve and ensures we provide the best possible service.</p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300" onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Lightfooter;
