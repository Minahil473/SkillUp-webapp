// src/pages/EventDetails.js
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/Loader";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const eventRef = doc(db, "events", id);
        const eventSnap = await getDoc(eventRef);
        
        if (eventSnap.exists()) {
          setEvent({ id: eventSnap.id, ...eventSnap.data() });
          setError(null);
        } else {
          setError("Event not found");
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to load event details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleRegister = () => {
    navigate(`/register/${id}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            to="/events"
            className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Event Not Found</h2>
          <p className="text-gray-500 mb-6">The event you're looking for doesn't exist.</p>
          <Link
            to="/events"
            className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Link
          to="/events"
          className="inline-flex items-center text-primary hover:text-blue-800 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Event Image */}
  <div className="order-1 lg:order-1">
    <div className="w-full h-64 lg:h-96 bg-lightGray rounded-lg overflow-hidden">
      {event.image ? (
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
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
          <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-lg font-medium">Event Image</span>
        </div>
      </div>
    </div>
  </div>

  {/* Event Information */}
  <div className="order-2 lg:order-2">
    <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{event.title}</h1>
    <div className="space-y-4 mb-8">
      <div className="flex items-center text-gray-700">
        <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-lg font-medium">{formatDate(event.date)}</span>
      </div>
      {event.location && (
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-lg">{event.location}</span>
        </div>
      )}
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-semibold text-primary mb-3">About This Event</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{event.description}</p>
    </div>

    {/* Registration Button */}
    <div className="flex flex-col sm:flex-row gap-4">
     <button
  onClick={handleRegister}
  className="flex-1 bg-primary text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
>
  Register Now
</button>


      <Link
        to="/contact"
        className="flex-1 bg-white text-primary border-2 border-primary py-4 px-8 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200 text-center"
      >
        Contact Us
      </Link>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default EventDetails;