import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import LandingPage from "./pages/LandingPage.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./Layout.jsx";
import Booking from "./pages/Booking.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/works",
        element: <Portfolio />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);