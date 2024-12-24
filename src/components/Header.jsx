import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-5">
        {/* Branding or Logo */}
        <div className="text-3xl font-bold text-pink-200 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-pink-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C9.347 2 7 4.347 7 7c0 2.038 1.148 3.806 2.846 4.74a3.5 3.5 0 104.308 0C15.852 10.806 17 9.038 17 7c0-2.653-2.347-5-5-5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.197 18.07A5.003 5.003 0 0012 21a5.003 5.003 0 006.803-2.93"
            />
          </svg>
          <span className="text-white">Bloom</span>Shop
        </div>

        {/* Navigation Links Centered */}
        <div className="flex space-x-20 text-lg font-medium">
          <Link to="/" className="hover:text-pink-100 transition duration-200">Home</Link>
          <Link to="/feedback" className="hover:text-pink-100 transition duration-200">Feedback</Link>
          <Link to="/blog" className="hover:text-pink-100 transition duration-200">Blog</Link>
          <Link to="/contact" className="hover:text-pink-100 transition duration-200">Contact</Link>
        </div>

        {/* Cart and Profile Section */}
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative hover:text-pink-100 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2a1 1 0 00.97 1.3h10.66a1 1 0 00.97-1.3L17 13M7 13L5.4 7m1.6 0h12.76"
              />
            </svg>
            <span className="absolute top-0 right-0 w-4 h-4 text-xs bg-red-600 rounded-full flex items-center justify-center text-white">
              3
            </span>
          </Link>
          <Link to="/profile" className="hover:text-pink-100 transition duration-200 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A3.992 3.992 0 018 15h8a3.992 3.992 0 012.879 2.804M12 7a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
