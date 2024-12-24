import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-300">BloomShop</h2>
            <p className="text-gray-200 text-sm">
              Your trusted source for fresh and beautiful flowers.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-200 hover:text-pink-300 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-pink-300 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-pink-300 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-200 text-sm">
            &copy; 2024 BloomShop. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="#about"
              className="text-gray-200 hover:text-pink-300 text-sm transition"
            >
              About Us
            </a>
            <a
              href="#privacy"
              className="text-gray-200 hover:text-pink-300 text-sm transition"
            >
              Privacy Policy
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-pink-300 text-sm transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;