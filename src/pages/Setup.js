// src/pages/Setup.js
// This page helps set up the Firebase database with sample data
// Remove this page after initial setup is complete

import React, { useState } from "react";
import { addSampleEvents, adminSetupInstructions } from "../setupFirebaseData";

function Setup() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleAddSampleEvents = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("Adding sample events...");
      
      const success = await addSampleEvents();
      
      if (success) {
        setMessage("✅ Sample events added successfully! You can now view them on the Events page.");
      } else {
        setError("❌ Failed to add sample events. Please check the console for details.");
      }
    } catch (err) {
      setError("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const showAdminInstructions = () => {
    adminSetupInstructions();
    setMessage("📝 Admin setup instructions printed to console. Check the browser console for details.");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Firebase Setup</h1>
          <p className="text-xl text-gray-600">
            Initialize your database with sample data
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Setup Steps</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Add sample events to your Firestore database</li>
            <li>Create an admin user in the users collection</li>
            <li>Test the admin dashboard functionality</li>
            <li>Remove this setup page from your application</li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Add Sample Events */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">1. Add Sample Events</h3>
            <p className="text-gray-600 mb-4">
              This will add 10 sample events to your Firestore "events" collection.
            </p>
            <button
              onClick={handleAddSampleEvents}
              disabled={loading}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding Events..." : "Add Sample Events"}
            </button>
          </div>

          {/* Admin Setup */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">2. Admin User Setup</h3>
            <p className="text-gray-600 mb-4">
              Instructions for creating an admin user in Firestore.
            </p>
            <button
              onClick={showAdminInstructions}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
            >
              Show Admin Instructions
            </button>
          </div>
        </div>

        {/* Messages */}
        {message && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Manual Admin Setup Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Manual Admin User Setup</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Option 1: Firebase Console</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Go to <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firebase Console</a></li>
              <li>Select your project</li>
              <li>Go to Firestore Database</li>
              <li>Create collection "users"</li>
              <li>Add document with your Google account UID</li>
              <li>Add fields: email, displayName, isAdmin: true, createdAt</li>
            </ol>
            
            <p className="mt-4"><strong>Option 2: Sign in and check console</strong></p>
            <p>Sign in with Google on the admin page, then check the browser console for your UID to use in the users collection.</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <a
            href="/events"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors mr-4"
          >
            View Events
          </a>
          <a
            href="/admin"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Admin Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Setup;
