import React from 'react';
import './Enquiry.css'; 

const Enquiry = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="bg-white p-4 overflow-hidden rounded-full container">
        <div className="marquee ">
          <p className="text-lg font-bold">
            <span className="inline-block">Feel free to contact us at:</span>
            <span className="text-primary inline-block pl-2">+91 9098797979</span>
            <span className="text-primary inline-block pl-2">info@vtech.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
