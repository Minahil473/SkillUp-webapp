// src/pages/Success.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const { eventName, registrantName } = location.state || {};

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-primary mb-6">
          Registration Successful!
        </h1>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Thank you for registering for the event!
          </p>
          
          {registrantName && (
            <p className="text-lg font-semibold text-primary mb-2">
              Hello {registrantName},
            </p>
          )}
          
          {eventName && (
            <p className="text-lg text-gray-700 mb-4">
              You have successfully registered for <span className="font-semibold text-primary">{eventName}</span>.
            </p>
          )}
          
          <p className="text-gray-600">
            We'll send you a confirmation email shortly with all the event details. 
            If you have any questions, please don't hesitate to contact us.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/events"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            View More Events
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">What's Next?</h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Check your email for confirmation details
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Save the event date and time in your calendar
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Follow us for updates and announcements
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Contact us if you have any questions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Success;