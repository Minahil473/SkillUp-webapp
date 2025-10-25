// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyANsD8rMVa-qtDqVo01LWHniZB1kIAWTr8",
  authDomain: "hackathon-b4354.firebaseapp.com",
  projectId: "hackathon-b4354",
  storageBucket: "hackathon-b4354.firebasestorage.app",
  messagingSenderId: "255716012899",
  appId: "1:255716012899:web:02a00c968fc11fe003d956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // for Google sign-in
const db = getFirestore(app);
export { auth, provider, db };
