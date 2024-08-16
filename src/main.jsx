import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Portfolio from "./pages/Portfolio.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFound />
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);