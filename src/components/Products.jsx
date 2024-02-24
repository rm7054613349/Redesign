import React from 'react';

const Products = () => {
  
  const products = [
    {
      id: 1,
      name: "Item",
      description: "Item-1",
      price: "$199",
      image: "/1.jpg",
    },
    {
      id: 2,
      name: "Item",
      description: "Item-2",
      price: "$349",
      image: "/2.jpg",
    },
    {
      id: 3,
      name: "Item",
      description: "Item-3",
      price: "$149",
      image: "/3.jpg",
    },
    {
      id: 4,
      name: "Item",
      description: "Item-4",
      price: "$249",
      image: "/3.webp",
    },
    {
      id: 5,
      name: "Item",
      description: "Item-5",
      price: "$199",
      image: "/5.avif",
    },
    {
      id: 6,
      name: "Item",
      description: "Item-6",
      price: "$599",
      image: "/6.avif",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600">Browse through our collection of high-quality Products</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover object-center transition duration-300 transform hover:scale-105" src={product.image} alt={product.name} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                {/* <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-semibold">{product.price}</span>
                  <button className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700">Add to Cart</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
