import React from 'react';

const FooterSec = ({heroImg}) => {
    return (
    <footer className="bg-[#0B0D17] text-gray-300 pt-32 pb-8 relative mt-[280px]">
      {/* Newsletter Section */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4">
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 shadow-lg rounded-2xl p-8 text-center border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-l-full border border-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-r-full hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed text-[16px] max-w-[291px] h-[117px]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-l-full border border-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold px-4 py-3 rounded-r-full hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center my-10">
        <img
          src={heroImg}
          alt="Cricket Logo"
          className="w-24"
        />
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm">
        ©2024 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSec;