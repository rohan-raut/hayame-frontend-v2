import './App.css';
import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import FAQPage from './pages/FAQ/FAQPage';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import CleanerBooking from './pages/CleanerBooking/CleanerBooking';

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
      element: <Login />,
    },
    {
      path: '/book-cleaner',
      element: <CleanerBooking />,
    },

  ])


  return <RouterProvider router={router} />;

}

export default App;
