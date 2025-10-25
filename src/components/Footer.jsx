// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Event Registration System</h3>
            <p className="text-gray-200 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Your one-stop platform for discovering, registering, and managing tech and educational events. 
              Connect with like-minded individuals and expand your knowledge.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                </svg>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69..." />
                </svg>
              </a>
              {/* Add other icons similarly */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-base font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-200 hover:text-white transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-base font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm sm:text-base">
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26..." />
                </svg>
                info@eventregistration.com
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28..." />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9..." />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Event Street<br />
                Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-6 sm:mt-8 pt-4 sm:pt-6 text-sm sm:text-base">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200">
              © 2024 Event Registration System. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
