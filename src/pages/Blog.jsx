import React from 'react';

const Blog = () => {
  // Sample blog data with two additional posts
  const blogPosts = [
    {
      id: 1,
      title: 'Welcome to BloomShop: Your Trusted Flower Boutique',
      content:
        'At BloomShop, we are passionate about delivering the freshest and most beautiful flowers to make every occasion special. Explore our wide selection of bouquets and arrangements for all your needs.',
      image: '/1.jpg',
    },
    {
      id: 2,
      title: 'Top 5 Flower Arrangements to Brighten Your Day',
      content:
        'Discover our best-selling floral arrangements, from the elegant "Rose Delight" to the vibrant "Sunflower Symphony." Learn what makes them customer favorites.',
      image: '/2.jpg',
    },
    {
      id: 3,
      title: 'Caring for Your Flowers: Tips and Tricks',
      content:
        'Keep your flowers fresh and vibrant longer with these easy tips. Learn the best practices for watering, trimming, and displaying your blooms.',
      image: '/3.jpg',
    },
    {
      id: 4,
      title: 'The Language of Flowers: What Your Bouquet Says',
      content:
        'Flowers speak a language of their own. Find out what different flowers symbolize and create the perfect bouquet for any message.',
      image: '/4.jpg',
    },
    {
      id: 5,
      title: 'Seasonal Bouquets: What to Choose and When',
      content:
        'Discover the best flowers for every season, from spring tulips to winter poinsettias. Celebrate each time of year with the perfect bouquet.',
      image: '/5.jpg',
    },
    {
      id: 6,
      title: 'Behind the Scenes: How We Source Our Flowers',
      content:
        'Learn about our ethical and sustainable sourcing practices. Find out how we bring you the freshest blooms while supporting local growers.',
      image: '/6.jpg',
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-12 text-green-800">BloomShop Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-xl overflow-hidden shadow-lg group transition duration-300 hover:shadow-2xl"
          >
            {/* Blog Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-75 transition duration-300"></div>
            </div>

            {/* Blog Content */}
            <div className="p-6 bg-gradient-to-b from-green-50 to-green-100">
              <h3 className="text-2xl font-bold text-green-900 group-hover:text-green-700 transition duration-300">
                {post.title}
              </h3>
              <p className="text-green-700 mt-4">
                {post.content.slice(0, 120)}...
              </p>
              <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
