import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import EventCard from "../components/EventCard";
import Loader from "../components/Loader";
import hero from '../assets/hero.jpeg';
import ServiceCard from "../components/ServiceCard";

import { services } from "./Services"; // Import the services array


function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRef = collection(db, "events");
        const q = query(eventsRef, orderBy("date", "asc"), limit(3)); // show first 3 events as featured
        const snapshot = await getDocs(q);
        const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
        setError(null);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load featured events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
      <div className="flex-1">
  <h1 className="text-4xl font-bold text-primary mb-4">
    Ignite Your Potential with SkillUp!
  </h1>
  <p className="text-gray-700 mb-6">
    Discover the smartest tech and education events, register in seconds, and join a community of innovators, learners, and future leaders ready to make their mark.
  </p>
  <Link
    to="/events"
    className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition-colors duration-200"
  >
    View Events
  </Link>
</div>


        <div className="flex-1">
          <div className="w-full h-64 lg:h-80 bg-gray-200 flex items-center justify-center">
            <img src={hero} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Featured Events</h2>

        {loading ? (
          <Loader />
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No events available yet.</p>
        )}

        <div className="text-center mt-8">
          <Link
            to="/events"
            className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition-colors duration-200"
          >
            See All Events
          </Link>
        </div>
      </section>
<section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-primary text-white px-6 py-3 rounded hover:brightness-110 transition"
          >
            View All Services
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
