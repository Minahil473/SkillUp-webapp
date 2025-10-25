# Event Registration System

A responsive event registration system built with React, Firebase, and Tailwind CSS. This application allows users to browse events, register for them, and contact organizers. It also includes an admin dashboard for managing registrations and contact messages.

##  Features
- Event browsing & detailed view
- Event registration with form validation
- Contact form for user inquiries
- Google Sign-In for admin access
- Real-time Firestore data
- Fully responsive design
##  Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Auth (Google Sign-In)
- **Icons**: React Icons
- **Deployment**: Firebase Hosting

## 📦 Installation
- git clone <repository-url>
- cd hackathon
- npm install
- npm start

##Firebase Setup

- Create a project in Firebase Console
- Enable Firestore and Google Authentication
- Copy your config and update src/firebase.js

## 🎨 Design System

### Colors
- **Primary**: `#284b63` (Deep Blue)
- **Secondary**: `#d9d9d9` (Light Gray)
- **Background**: `#ffffff` (White)


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


##  Testing

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

# Deployment

- Build and deploy with Firebase Hosting:
- npm run build
- firebase deploy

## 📄 License

This project is licensed under the MIT License.
