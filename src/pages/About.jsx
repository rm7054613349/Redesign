import React from 'react';
import HeaderNavbar from '../components/HeaderNavbar';

const About = () => {
  return (
    <>
      <HeaderNavbar />
      <div className="bg-light-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0"> 
              <h3 className="text-2xl font-semibold text-gray-900">Who We Are ?</h3>
              <p className="mt-4 text-gray-600"><b>V-TECH  &nbsp;</b>
Founded in 2009 as V-TECH Consultancy Services, we've embarked on a transformative journey marked by an unwavering commitment to excellence. Over the past two decades, we've been dedicated to delivering top-notch Services & Solutions in Electrical, Civil, and Piping Infrastructure for Residential, Commercial, and Industrial sectors. Today, we proudly unveil our renewed identity and purpose, reflecting our enduring legacy and continued dedication to superior service.</p>
              <h3 className="text-2xl font-semibold text-gray-900 mt-8">Our Values</h3>
              <ul className="mt-4 text-gray-600">
                <li className="list-disc ml-4">Innovation</li>
                <li className="list-disc ml-4">Sustainability</li>
                <li className="list-disc ml-4">Excellence</li>
                <li className="list-disc ml-4">Quality</li>
              </ul>
              <p className="mt-8 text-black">For inquiries, feel free to contact us at <br/> <a href="tel:+91 9098797979">
                <b>+91 90987979</b><br/>
                <b><a href="mailto:urbanwoods9@gmail.com">info@vtech.com</a></b>
                </a></p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0 ml-5"> 
              <img src="/1.jpg" alt=" Hero" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
