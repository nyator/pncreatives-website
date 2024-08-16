import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx"
import LandingPage from "../src/pages/LandingPage.jsx"
import Portfolio from "../src/pages/Portfolio.jsx"
import ComingSoon from "../src/pages/ComingSoon.jsx"
import NotFound from "./pages/NotFound.jsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
