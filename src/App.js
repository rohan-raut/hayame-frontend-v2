import './App.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import FAQPage from './pages/FAQ/FAQPage';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';

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
  ]);


  return <RouterProvider router={router} />;

}

export default App;
