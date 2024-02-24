import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const SocialMediaList = () => {
  return (
    <div className="flex items-center ">
      <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-2">
        <FaFacebook size={30} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 mx-2">
        <FaWhatsapp size={30} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700 mx-2">
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialMediaList;
