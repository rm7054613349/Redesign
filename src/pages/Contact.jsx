import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import HeaderNavbar from '../components/HeaderNavbar';
import SocialMediaList from '../components/SocialMedialist';

const Contact = () => {
    return (
        <>
            <HeaderNavbar />
            <div className="bg-light-900 text-white py-20">
                <div className="container mx-auto px-4" >
                    <div className="flex flex-col lg:flex-row items-center justify-between" >

                        <div className="lg:w-3/2 mb-8 lg:mb-0" >
                            <h1 className="text-4xl text-black font-bold mb-4">Contact Us</h1>
                            <p className="text-lg mb-6 text-black">
                                <ul className=" mt-4 text-left list-none py-4">
                                     <li className='py-2'><FiMapPin className="inline-block mr-2 text-black " />Akshaya Nagar 1st Block 1st Cross Rammurthy nagar,Banglore-560016</li>
                                     <li className='py-2'><FiPhone className="inline-block mr-2 text-black " />:+91 9098797979</li>
                                     <li className='py-2'><FiMail className="inline-block mr-2 text-black " />: <a href="mailto:urbanwoods9@gmail.com">info@vtech.com</a></li>
                                </ul>
                            </p>
                        
                            <SocialMediaList />
                
                        </div>

                        <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0 ml-1 container">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20359.946605928333!2d77.6758515653153!3d13.015754721673858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1121d646a235%3A0xbf0eec5468808a4f!2sRamamurthy%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560016!5e0!3m2!1sen!2sin!4v1708691941899!5m2!1sen!2sin"
                                    width="650"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='rounded-lg'
                                >
                                </iframe>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

          
        </>
    );
};

export default Contact;
