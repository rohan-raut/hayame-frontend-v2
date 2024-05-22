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
import { AuthProvider } from './context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      element: <AuthProvider><Register /></AuthProvider>,
    },
    {
      path: '/user-verification',
      element: <UserVerification />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/book-cleaner',
      element: <CleanerBooking />,
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
