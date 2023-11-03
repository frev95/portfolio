import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './Resume.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
