import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, provider, db } from "../firebase";
import Loader from "../components/Loader";

function AdminLogin() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [signingIn, setSigningIn] = useState(false);
  const navigate = useNavigate();

  // Check if admin is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().isAdmin) {
            navigate("/admin/dashboard", { replace: true });
          } else {
            await auth.signOut();
          }
        } catch (err) {
          console.error("Error checking admin:", err);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      setSigningIn(true);
      setError(null);

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Only allow specific admin email
      if (user.email !== "minahilyounas473@gmail.com") {
        setError("Access denied. You are not authorized.");
        await auth.signOut();
        return;
      }

      // Ensure Firestore has admin record
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await setDoc(userRef, { email: user.email, isAdmin: true });
      }

      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Sign-in error:", err);
      setError("Sign-in failed. Please try again.");
    } finally {
      setSigningIn(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">A</span>
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
            <p className="text-gray-600">
              Sign in with your Google account to access the admin dashboard
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <button
            onClick={handleGoogleSignIn}
            disabled={signingIn}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors duration-200"
          >
            {signingIn ? "Signing in..." : "Sign in with Google"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
