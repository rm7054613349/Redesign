import React from 'react';

const Outdoorfurniture = () => {
  
  const products = [
    {
      id: 1,
      name: "Specialized Consultancy",
      description: "Specialized Consultancy",
      price: "$799",
      image: "/e1.jpg",
    },
    {
      id: 2,
      name: "Decades Of Expertise",
      description: "Decades Of Expertise",
      price: "$199",
      image: "/r.webp",
    },
    {
      id: 3,
      name: "Expert Engineers",
      description: "Expert Engineers.",
      price: "$349",
      image: "/e2.jpg",
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl"> Our Expertise</h2>
          <p className="mt-4 text-lg text-gray-600">Highly Educated Experts</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover object-center transition duration-300 transform hover:scale-105" src={product.image} alt={product.name} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outdoorfurniture;
