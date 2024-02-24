import React from 'react';

const Homefurniture = () => {
  
  const products = [
    {
      id: 1,
      name: "Quality",
      description: "Provide a Best Quality in Our Service.",
      image: "/1.jpg",
    },
    {
      id: 2,
      name: "Innovation",
      description: "At Day by Day we are Try to New Things to Improve Our Product Quality.",
      image: "/2.jpg",
    },
    {
      id: 3,
      name: "Sustainability",
      description: "Sustainabitliy is guarantee",
      image: "/3.jpg",
    },
    {
      id: 4,
      name: "Excellence",
      description: "Our Product is Excellence",
      image: "/3.webp",
    },
    {
      id: 5,
      name: "Experties",
      description: "We are Hire to most Expertise Person thats create my Product",
      image: "/5.avif",
    },
    {
      id: 6,
      name: "Customer",
      description: "My main goal to Happy our Customer those Purchase outr Product.",
      image: "/6.avif",
    },
    {
      id: 7,
      name: "Trust",
      description: "Trust is Main Factor of Our Product.",
      image: "/7.jpg",
    },
    {
      id: 8,
      name: "Bonding ",
      description: "we are created or good Realation ship with our Customer.",
      image: "/8.jpg",
    },
    {
      id: 9,
      name: "Succes",
      description: "My Main goal is Growthof My Company",
      image: "/9.jpg",
    },
    
  ];

  // Filter products to include only home furniture and kitchen products
  const homeAndKitchenProducts = products.filter(product => ['Quality', 'Innovation', 'Sustainability', 'Excellence', 'Experties', 'Customer', 'Trust', 'Bonding', 'Succes'].includes(product.name));

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Goals</h2>
          <p className="mt-4 text-lg text-gray-600">My Main goal to Create a user Freindly Product</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {homeAndKitchenProducts.map(product => (
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

export default Homefurniture;
