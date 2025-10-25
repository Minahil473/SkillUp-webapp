# Event Registration System

A responsive event registration system built with React, Firebase, and Tailwind CSS. This application allows users to browse events, register for them, and contact organizers. It also includes an admin dashboard for managing registrations and contact messages.

## 🚀 Features

### User Features
- **Browse Events**: View all upcoming events in a responsive grid layout
- **Event Details**: Detailed event pages with full information and registration options
- **Event Registration**: Simple registration form with validation
- **Contact Form**: Contact organizers with questions or feedback
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Admin Features
- **Google Authentication**: Secure admin login with Google Sign-In
- **Admin Dashboard**: View all registrations and contact messages
- **Data Management**: Real-time data from Firebase Firestore
- **Protected Routes**: Secure admin-only access

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Auth (Google Sign-In)
- **Icons**: React Icons
- **Deployment**: Firebase Hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hackathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Firestore Database
   - Enable Authentication with Google provider
   - Get your Firebase config and update `src/firebase.js`

4. **Start the development server**
   ```bash
   npm start
   ```

## 🔧 Firebase Configuration

### 1. Firestore Collections

The app uses the following Firestore collections:

- **`events`**: Stores event information
- **`registrations`**: Stores user event registrations
- **`contacts`**: Stores contact form messages
- **`users`**: Stores user information and admin roles

### 2. Sample Data Setup

1. Visit `/setup` in your browser after starting the app
2. Click "Add Sample Events" to populate the events collection
3. Create an admin user in the `users` collection with `isAdmin: true`

### 3. Admin User Creation

**Option 1: Firebase Console**
1. Go to Firestore Database
2. Create collection "users"
3. Add document with your Google account UID
4. Add fields: `email`, `displayName`, `isAdmin: true`, `createdAt`

**Option 2: Programmatic**
```javascript
import { createAdminUser } from './src/setupFirebaseData';
await createAdminUser('your-uid', 'your-email@gmail.com', 'Your Name');
```

## 🎨 Design System

### Colors
- **Primary**: `#284b63` (Deep Blue)
- **Secondary**: `#d9d9d9` (Light Gray)
- **Background**: `#ffffff` (White)

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 📱 Pages & Routes

- `/` - Home page with featured events
- `/events` - All events listing
- `/events/:id` - Event details page
- `/register/:id` - Event registration form
- `/contact` - Contact form
- `/success` - Registration success page
- `/admin` - Admin login
- `/admin/dashboard` - Admin dashboard (protected)
- `/setup` - Database setup (remove after initial setup)

## 🔐 Authentication & Security

- **User Authentication**: No authentication required for browsing and registration
- **Admin Authentication**: Google Sign-In with Firestore role verification
- **Protected Routes**: Admin dashboard requires `isAdmin: true` flag
- **Data Validation**: Form validation on both client and server side

## 📊 Data Structure

### Event Document
```javascript
{
  title: "Event Title",
  date: "2025-09-15",
  description: "Event description...",
  location: "Event location",
  image: "https://example.com/image.jpg"
}
```

### Registration Document
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  eventId: "event-doc-id",
  eventName: "Event Title",
  timestamp: Date,
  createdAt: Date
}
```

### Contact Document
```javascript
{
  name: "Jane Smith",
  email: "jane@example.com",
  message: "Contact message...",
  timestamp: Date,
  createdAt: Date
}
```

### User Document
```javascript
{
  email: "admin@example.com",
  displayName: "Admin User",
  isAdmin: true,
  createdAt: Date
}
```

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 🧪 Testing

The application includes comprehensive error handling and loading states:

- **Loading States**: Spinner components during data fetching
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time validation with error messages
- **Responsive Testing**: Tested across different screen sizes

## 📝 Development Notes

### File Structure
```
src/
├── components/          # Reusable components
│   ├── EventCard.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── pages/              # Page components
│   ├── AdminDashboard.js
│   ├── AdminLogin.js
│   ├── Contact.js
│   ├── EventDetails.js
│   ├── Events.js
│   ├── Home.js
│   ├── Register.js
│   ├── Setup.js
│   └── Success.js
├── firebase.js         # Firebase configuration
├── setupFirebaseData.js # Database setup utilities
└── App.js             # Main app component
```

### Key Features Implemented

✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
✅ **Firebase Integration**: Real-time data with Firestore
✅ **Form Validation**: Client-side validation with error handling
✅ **Admin Authentication**: Google Sign-In with role-based access
✅ **Protected Routes**: Secure admin dashboard access
✅ **Loading States**: User-friendly loading indicators
✅ **Error Handling**: Comprehensive error management
✅ **Modern UI**: Clean, professional design
✅ **Accessibility**: Semantic HTML and keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Check the Firebase Console for data issues
- Review browser console for JavaScript errors
- Ensure all Firebase services are properly configured
- Verify admin user has `isAdmin: true` in Firestore

---

**Note**: Remember to remove the `/setup` route and `Setup.js` file after initial database setup is complete.