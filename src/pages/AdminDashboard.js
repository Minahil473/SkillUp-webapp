// src/pages/AdminDashboard.js
import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/Loader";

function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editEventId, setEditEventId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
    image: "",
  });

  // Fetch all events
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const eventsRef = collection(db, "events");
      const q = query(eventsRef, orderBy("date", "asc"));
      const snapshot = await getDocs(q);
      const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
      setError(null);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Add/Edit form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.description || !formData.location) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setFormLoading(true);
      if (editEventId) {
        // Edit event
        const eventRef = doc(db, "events", editEventId);
        await updateDoc(eventRef, formData);
      } else {
        // Add new event
        await addDoc(collection(db, "events"), formData);
      }
      setFormData({ title: "", date: "", description: "", location: "", image: "" });
      setEditEventId(null);
      setShowForm(false);
      fetchEvents();
    } catch (err) {
      console.error(err);
      setError("Failed to save event");
    } finally {
      setFormLoading(false);
    }
  };

  // Handle delete event
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteDoc(doc(db, "events", id));
        fetchEvents();
      } catch (err) {
        console.error(err);
        setError("Failed to delete event");
      }
    }
  };

  // Handle edit button
  const handleEdit = (event) => {
    setFormData({
      title: event.title,
      date: event.date,
      description: event.description,
      location: event.location,
      image: event.image || "",
    });
    setEditEventId(event.id);
    setShowForm(true);
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Admin Dashboard - Manage Events</h1>

      {/* Error */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Add / Edit Form */}
      {showForm && (
        <div className="bg-gray-100 p-6 rounded mb-6 shadow">
          <h2 className="text-xl font-semibold mb-4">{editEventId ? "Edit Event" : "Add New Event"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Event Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Event Image URL (optional)"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={formLoading}
                className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                {formLoading ? "Saving..." : editEventId ? "Update Event" : "Add Event"}
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); setEditEventId(null); setFormData({ title: "", date: "", description: "", location: "", image: "" }); }}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add Event Button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 bg-primary text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Add New Event
        </button>
      )}

      
{/* Events Table */}
{/* Events Table / Card Layout */}
{events.length === 0 ? (
  <p>No events available.</p>
) : (
  <div className="w-full">
    {/* Desktop Table */}
    <div className="hidden md:block overflow-x-auto rounded shadow-md">
      <table className="min-w-full bg-white text-sm sm:text-base">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">Title</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Location</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b">
              <td className="py-2 px-4">{event.title}</td>
              <td className="py-2 px-4">{event.date}</td>
              <td className="py-2 px-4">{event.location}</td>
              <td className="py-2 px-4 flex gap-2 flex-wrap">
                <button
                  onClick={() => handleEdit(event)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Card Layout */}
   {/* Mobile Card Layout */}
<div className="md:hidden space-y-4">
  {events.map((event) => (
    <div key={event.id} className="bg-white shadow rounded overflow-hidden">
      {/* Event Image */}
      {/* {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-40 object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      )} */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-primary mb-1">{event.title}</h3>

        {/* Date */}
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Date:</span> {event.date}
        </p>

        {/* Location */}
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Location:</span> {event.location}
        </p>

        {/* Description */}
        {event.description && (
          <p className="text-gray-600 mb-3 line-clamp-3">
            {event.description}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 flex-wrap mt-2">
          <button
            onClick={() => handleEdit(event)}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(event.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
)}



    </div>
  );
}

export default AdminDashboard;
