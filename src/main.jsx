import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Experience from './Components/Experience.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Experience></Experience>,
        loader: () => fetch("fakedata.json"),
      },
    ]
  },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/updateprofile",
      element: <h3>Update Profile Component</h3>
    },
    {
      path: "/userprofile",
      element: <h3>User Profile Section</h3>
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
