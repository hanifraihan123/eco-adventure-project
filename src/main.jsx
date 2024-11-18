import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
    {
      path: "/updateprofile",
      element: <h3>Update Profile Component</h3>
    },
    {
      path: "/userprofile",
      element: <h3>User Profile Section</h3>
    },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
