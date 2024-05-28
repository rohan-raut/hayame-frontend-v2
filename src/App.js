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
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import BookingHistory from './pages/BookingHistory/BookingHistory';
import CheckBookings from './pages/CheckBookings/CheckBookings';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthProvider><Home /></AuthProvider>,
    },
    {
      path: '/faq',
      element: <AuthProvider><FAQPage /></AuthProvider>,
    },
    {
      path: '/contact-us',
      element: <AuthProvider><ContactUs /></AuthProvider>,
    },
    {
      path: '/login',
      element: <AuthProvider><Login /></AuthProvider>,
    },
    {
      path: '/register',
      element: <AuthProvider><Register /></AuthProvider>,
    },
    {
      path: '/user-verification',
      element: <AuthProvider><UserVerification /></AuthProvider>,
    },
    {
      path: '/forgot-password',
      element: <AuthProvider><ForgotPassword /></AuthProvider>,
    },
    {
      path: '/reset-password',
      element: <AuthProvider><ResetPassword /></AuthProvider>,
    },
    {
      path: '/book-cleaner',
      element: <AuthProvider><CleanerBooking /></AuthProvider>,
    },
    {
      path: '/booking-history',
      element: <AuthProvider><BookingHistory /></AuthProvider>,
    },
    {
      path: '/check-bookings',
      element: <AuthProvider><CheckBookings /></AuthProvider>,
    },

  ])


  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
