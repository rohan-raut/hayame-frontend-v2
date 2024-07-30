import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import FAQPage from './pages/FAQ/FAQPage';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import BookingForm from './pages/BookingForms/BookingForm';
import CleanerBooking from './pages/BookingForms/CleanerBooking/CleanerBooking';
import GeneralWorkerBooking from './pages/BookingForms/GeneralWorkerBooking/GeneralWorkerBooking';
import GardenerBooking from './pages/BookingForms/GardenerBooking/GardenerBooking';
import MoversPackersBooking from './pages/BookingForms/MoverPackerBooking/MoversPackersBooking';
import ElderlyCareBooking from './pages/BookingForms/ElderlyCareBooking/ElderlyCareBooking';
import TaskErrandsBooking from './pages/BookingForms/TaskErrandsBooking/TaskErrandsBooking';
import Register from './pages/Register/Register';
import UserVerification from './pages/UserVerification/UserVerification';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import BookingHistory from './pages/BookingHistory/BookingHistory';
import CheckBookings from './pages/CheckBookings/CheckBookings';
import Profile from './pages/Profile/Profile';
import BookingDetails from './pages/BookingDetails/BookingDetails';
import AllocateWorkers from './pages/AllocateWorkers/AllocateWorkers';
import CleaningServiceLanding from './pages/ServiceLandingPages/CleaningServiceLanding/CleaningServiceLanding';
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
      path: '/about-us',
      element: <AuthProvider><AboutUs /></AuthProvider>,
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
      path: '/book',
      element: <AuthProvider><BookingForm /></AuthProvider>,
    },
    {
      path: '/book-cleaner',
      element: <AuthProvider><CleanerBooking /></AuthProvider>,
    },
    {
      path: '/book-general-worker',
      element: <AuthProvider><GeneralWorkerBooking /></AuthProvider>,
    },
    {
      path: '/book-gardener',
      element: <AuthProvider><GardenerBooking /></AuthProvider>,
    },
    {
      path: '/book-mover-packer',
      element: <AuthProvider><MoversPackersBooking /></AuthProvider>,
    },
    {
      path: '/book-elderly-care',
      element: <AuthProvider><ElderlyCareBooking /></AuthProvider>,
    },
    {
      path: '/book-task-errands',
      element: <AuthProvider><TaskErrandsBooking /></AuthProvider>,
    },
    {
      path: '/booking-history',
      element: <AuthProvider><BookingHistory /></AuthProvider>,
    },
    {
      path: '/check-bookings',
      element: <AuthProvider><CheckBookings /></AuthProvider>,
    },
    {
      path: '/profile',
      element: <AuthProvider><Profile /></AuthProvider>,
    },
    {
      path: '/booking-details',
      element: <AuthProvider><BookingDetails /></AuthProvider>,
    },
    {
      path: '/allocate-workers',
      element: <AuthProvider><AllocateWorkers /></AuthProvider>,
    },
    {
      path: '/book-cleaning-service',
      element: <AuthProvider><CleaningServiceLanding /></AuthProvider>,
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
