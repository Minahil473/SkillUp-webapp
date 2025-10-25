import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Event Image */}
      <div className="w-full h-48 bg-lightGray overflow-hidden">
        {event.image ? (
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className={`w-full h-full ${event.image ? 'hidden' : 'flex'} items-center justify-center bg-gradient-to-br from-primary to-blue-600`}
        >
          <div className="text-center text-white">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Event</span>
          </div>
        </div>
      </div>
      
      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          📅 {formatDate(event.date)}
        </p>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>
        
        {event.location && (
          <p className="text-gray-600 text-sm mb-4">
            📍 {event.location}
          </p>
        )}
        
        <div className="flex gap-2">
          <Link
            to={`/events/${event.id}`}
            className="flex-1 bg-primary text-white text-center py-2 px-4 rounded hover:bg-primary/90 transition-colors duration-200"
          >
            View Details
          </Link>
          <Link
            to={`/register/${event.id}`}
            className="flex-1 bg-white text-primary border border-primary text-center py-2 px-4 rounded hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
