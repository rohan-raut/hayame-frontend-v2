import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import FAQPage from './pages/FAQ/FAQPage';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import CleanerBooking from './pages/CleanerBooking/CleanerBooking';
import Register from './pages/Register/Register';
import UserVerification from './pages/UserVerification/UserVerification';
import { AuthProvider } from './context/AuthContext'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/faq',
      element: <FAQPage />,
    },
    {
      path: '/contact-us',
      element: <ContactUs />,
    },
    {
      path: '/login',
      element: <AuthProvider><Login /></AuthProvider>,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/user-verification',
      element: <UserVerification />,
    },
    {
      path: '/book-cleaner',
      element: <CleanerBooking />,
    },

  ])


  return (
    // <AuthProvider>
      <RouterProvider router={router} />
    // </AuthProvider>

  );

}

export default App;
