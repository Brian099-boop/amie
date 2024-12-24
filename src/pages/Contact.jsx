import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-green-700">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-4">
          We’d love to hear from you! Whether you have a question about our products or services, our team is ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 bg-gradient-to-br from-green-700 to-green-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <strong>Address:</strong> 123 Bloom Avenue, Floral City, FC 12345
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:+15559876543" className="hover:underline">
                  +1 (555) 987-6543
                </a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@bloomshop.com" className="hover:underline">
                  contact@bloomshop.com
                </a>
              </li>
              <li>
                <strong>Working Hours:</strong> Mon-Fri: 9am - 6pm | Sat-Sun: 10am - 4pm
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="mt-8 py-3 w-full bg-white hover:bg-gray-100 text-green-700 font-medium rounded-md shadow-lg transition duration-300"
          >
            Send Us a Message
          </button>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full rounded-md bg-gray-50 text-gray-900 border border-gray-300 focus:ring-green-500 focus:border-green-500 shadow-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full rounded-md bg-gray-50 text-gray-900 border border-gray-300 focus:ring-green-500 focus:border-green-500 shadow-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-2 block w-full rounded-md bg-gray-50 text-gray-900 border border-gray-300 focus:ring-green-500 focus:border-green-500 shadow-sm"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="mt-2 block w-full rounded-md bg-gray-50 text-gray-900 border border-gray-300 focus:ring-green-500 focus:border-green-500 shadow-sm"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
