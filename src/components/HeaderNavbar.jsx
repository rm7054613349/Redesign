import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';




import { useNavigate } from 'react-router-dom';

import IMA from './vtech-logo.png'

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/');
  };

  return (
    <nav className="bg-dark p-2 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
      <p className="text-white text-lg font-semibold ml-2 ">
        <button onClick={handleShopNowClick}><img src={IMA} alt="logo" height={150} width={85}/></button>
  </p>
</div>
      
        <div className="flex items-center">
          <div className={`lg:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="lg:flex lg:ml-auto">
              <li className="mb-3 lg:mb-0">
                <Link 
                  to="/" 
                  className="block text-lg text-white hover:underline hover:text-grey-400 mr-4"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
              </li>
              <li className="mb-3 lg:mb-0">
                <Link 
                  to="/about" 
                  className="block text-lg text-white hover:underline hover:text-gray-300 mr-4"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
              </li>
              <li className="mb-3 lg:mb-0">
                <Link 
                  to="/service" 
                  className="block text-lg text-white hover:underline hover:text-gray-300 mr-4"
                  onClick={toggleNavbar}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-lg text-white hover:underline hover:text-gray-300"
                  onClick={toggleNavbar}
                >
                  Contact
                </Link>
              </li>

              
            </ul>
          </div>
          <button 
            className="text-white lg:hidden ml-4 focus:outline-none"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <svg 
                className="h-6 w-6 fill-current" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 11.414l-6.707 6.707a1 1 0 11-1.414-1.414L8.586 10 1.293 3.707a1 1 0 011.414-1.414L10 8.586l6.707-6.707a1 1 0 111.414 1.414L11.414 10l6.707 6.707a1 1 0 11-1.414 1.414L10 11.414z" 
                />
              </svg>
            ) : (
              <svg 
                className="h-6 w-6 fill-current" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zM4 11h16a1 1 0 010 2H4a1 1 0 010-2zM4 16h16a1 1 0 010 2H4a1 1 0 010-2z" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
