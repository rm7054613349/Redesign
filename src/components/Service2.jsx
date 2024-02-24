// ServiceSection.js

import React from 'react';

const Service2 = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600">Focus on Customers requirement experience and Provide quality products.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-blue-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Customization</h3>
            <p className="text-gray-600">We offer customization options to fit your unique style and needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-green-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Enjoy quick and reliable delivery services for all your Product purchases.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-yellow-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Inservice Quality Guarantee</h3>
            <p className="text-gray-600">Offer Quality warranty and guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service2;
