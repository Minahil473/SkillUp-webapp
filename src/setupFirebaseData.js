// src/setupFirebaseData.js
// This script sets up sample data in Firebase Firestore
// Run this script once to populate your database with sample events and admin user

import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

// Sample events data
const sampleEvents = [
  {
    title: "CodeCraft Hackathon",
    date: "2025-09-15",
    description: "A 48-hour coding competition where developers, designers, and entrepreneurs come together to build innovative solutions. Participants will work in teams to create web applications, mobile apps, or other tech solutions addressing real-world problems. Prizes include cash awards, mentorship opportunities, and potential job offers from sponsoring companies.",
    location: "Tech Innovation Center, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop"
  },
  {
    title: "Global Research Summit",
    date: "2025-10-20",
    description: "A prestigious international conference bringing together researchers, academics, and industry leaders to discuss breakthrough discoveries and future research directions. Covers topics in computer science, engineering, medicine, and environmental science. Features paper presentations, poster sessions, and panel discussions.",
    location: "University Campus, Boston, MA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop"
  },
  {
    title: "Python Masterclass",
    date: "2025-10-05",
    description: "An intensive 3-day workshop covering advanced Python programming concepts including data structures, algorithms, web development with Django/Flask, data science with pandas and NumPy, and machine learning basics. Perfect for intermediate to advanced developers looking to level up their Python skills.",
    location: "Online Event - Zoom",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop"
  },
  {
    title: "Digital Marketing Workshop",
    date: "2025-11-10",
    description: "Learn the latest digital marketing strategies including SEO, social media marketing, content marketing, email campaigns, and analytics. Hands-on sessions with real-world case studies and tools. Perfect for marketers, entrepreneurs, and business owners looking to enhance their digital presence.",
    location: "Marketing Hub, New York, NY",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
  },
  {
    title: "Future Leaders Training",
    date: "2025-12-01",
    description: "A comprehensive leadership development program designed for emerging leaders and managers. Topics include team management, strategic thinking, communication skills, emotional intelligence, and change management. Interactive workshops, role-playing exercises, and mentorship opportunities included.",
    location: "Leadership Institute, Chicago, IL",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
  },
  {
    title: "AI & Robotics Expo",
    date: "2025-11-01",
    description: "Explore the latest advancements in artificial intelligence and robotics. Features keynote speakers from leading tech companies, hands-on workshops with cutting-edge AI tools, robot demonstrations, and networking opportunities with industry professionals. Topics include machine learning, computer vision, natural language processing, and autonomous systems.",
    location: "Convention Center, Austin, TX",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop"
  },
  {
    title: "Cybersecurity Awareness Week",
    date: "2025-11-18",
    description: "A week-long event focused on cybersecurity education and awareness. Features workshops on password security, phishing prevention, data protection, and incident response. Includes hands-on labs, security assessments, and expert presentations on current cyber threats and defense strategies.",
    location: "Security Training Center, Washington, DC",
    image: "https://images.unsplash.com/photo-1550751827-4d9c7856b5e1?w=500&h=300&fit=crop"
  },
  {
    title: "Startup Pitch Day",
    date: "2025-12-08",
    description: "An exciting event where entrepreneurs present their startup ideas to a panel of investors, mentors, and industry experts. Features pitch competitions, networking sessions, and one-on-one meetings with potential investors. Great opportunity for startups to gain visibility and funding.",
    location: "Innovation Hub, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
  },
  {
    title: "Cloud Computing Bootcamp",
    date: "2025-10-30",
    description: "An intensive 5-day bootcamp covering cloud technologies including AWS, Azure, and Google Cloud Platform. Learn cloud architecture, serverless computing, containerization with Docker and Kubernetes, DevOps practices, and cloud security. Hands-on labs and real-world projects included.",
    location: "Cloud Academy, Seattle, WA",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop"
  },
  {
    title: "Innovation in Education Forum",
    date: "2025-12-15",
    description: "A forward-thinking conference exploring the future of education technology and innovative teaching methods. Features presentations on EdTech solutions, virtual learning, AI in education, and student engagement strategies. Perfect for educators, administrators, and EdTech professionals.",
    location: "Education Center, Boston, MA",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop"
  }
];

// Function to add sample events to Firestore
export const addSampleEvents = async () => {
  try {
    console.log("Adding sample events to Firestore...");
    
    for (const event of sampleEvents) {
      await addDoc(collection(db, "events"), event);
      console.log(`Added event: ${event.title}`);
    }
    
    console.log("✅ All sample events added successfully!");
    return true;
  } catch (error) {
    console.error("❌ Error adding sample events:", error);
    return false;
  }
};

// Function to create an admin user
export const createAdminUser = async (uid, email, displayName) => {
  try {
    console.log("Creating admin user...");
    
    await setDoc(doc(db, "users", uid), {
      email: email,
      displayName: displayName,
      isAdmin: true,
      createdAt: new Date()
    });
    
    console.log("✅ Admin user created successfully!");
    return true;
  } catch (error) {
    console.error("❌ Error creating admin user:", error);
    return false;
  }
};

// Function to run the complete setup
export const setupFirebaseData = async () => {
  console.log("🚀 Starting Firebase data setup...");
  
  const eventsAdded = await addSampleEvents();
  
  if (eventsAdded) {
    console.log("🎉 Firebase data setup completed successfully!");
    console.log("📝 Next steps:");
    console.log("1. Create an admin user by signing in with Google");
    console.log("2. Add the user's UID to the users collection with isAdmin: true");
    console.log("3. Or use the createAdminUser function with the user's details");
  } else {
    console.log("❌ Firebase data setup failed. Please check the console for errors.");
  }
};

// Instructions for manual admin user creation
export const adminSetupInstructions = () => {
  console.log(`
🔐 ADMIN USER SETUP INSTRUCTIONS:

1. Sign in to your Firebase Console: https://console.firebase.google.com
2. Go to Firestore Database
3. Create a new collection called "users"
4. Add a document with your Google account's UID as the document ID
5. Add the following fields:
   - email: "your-email@gmail.com"
   - displayName: "Your Name"
   - isAdmin: true
   - createdAt: [current timestamp]

Alternatively, you can use the createAdminUser function in this file with your user details.
  `);
};

// Export for use in other files
export default {
  addSampleEvents,
  createAdminUser,
  setupFirebaseData,
  adminSetupInstructions
};
