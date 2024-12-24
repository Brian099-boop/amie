import React from 'react';

const Content = () => {
  const products = [
    { 
      img: "q.jpg", 
      name: "Orchid Elegance", 
      desc: "Elegant and sophisticated arrangement.", 
      price: "₱1500" 
    },
    { 
      img: "w.jpg", 
      name: "Peony Perfection", 
      desc: "Luxurious blooms for special occasions.", 
      price: "₱1800" 
    },
    { 
      img: "e.jpg", 
      name: "Lily Radiance", 
      desc: "Symbolizing purity and refined beauty.", 
      price: "₱1300" 
    },
    { 
      img: "r.jpg", 
      name: "Hydrangea Bliss", 
      desc: "Soft and voluminous floral beauty.", 
      price: "₱1400" 
    },
    { 
      img: "a.jpg", 
      name: "Rose Delight", 
      desc: "Classic roses for timeless elegance.", 
      price: "₱1200" 
    },
    { 
      img: "s.jpg", 
      name: "Sunflower Joy", 
      desc: "Bright and cheerful arrangements.", 
      price: "₱1100" 
    },
    { 
      img: "d.jpg", 
      name: "Tulip Charm", 
      desc: "Vivid tulips for a burst of color.", 
      price: "₱1250" 
    },
    { 
      img: "f.jpg", 
      name: "Daisy Freshness", 
      desc: "Simple and delightful blooms.", 
      price: "₱1000" 
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="/bg.jpg" 
          alt="Floral background" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-black via-transparent to-black">
          <h1 className="text-6xl font-extrabold mb-6 text-pink-300 tracking-wide drop-shadow-xl">
            Welcome to <span className="text-white">BloomShop</span>
          </h1>
          <p className="text-2xl italic text-gray-300 mb-8">
            "Nature’s beauty, curated for you."
          </p>
          <button className="px-8 py-4 text-lg font-medium text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-400 transition transform hover:scale-110">
            Explore Collections
          </button>
        </div>
      </div>

      {/* Featured Deals Section */}
      <section className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-green-700 tracking-tight">
            Bloom Deals
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Discover exclusive floral arrangements tailored for every occasion.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl transition duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="group relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.desc}</p>
                <p className="text-2xl font-bold text-pink-500 mt-4">{product.price}</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
