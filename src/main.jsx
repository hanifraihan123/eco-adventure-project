import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Experience from './Components/Experience.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AdventureDetails from './Components/AdventureDetails.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Experience></Experience>,
        loader: () => fetch("/fakedata.json"),
      },
    ]
  },
    {
      path: "/adventuredetails/:id",
      element: <AdventureDetails></AdventureDetails>
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
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
