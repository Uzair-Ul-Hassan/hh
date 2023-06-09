import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import RootLayout from "./pages/Root";
import ServicesPage from "./pages/Services";
import ErrorPage from "./pages/Error";

import "./App.scss";
import "./input.css";
import Career from "./pages/Career";
import Smart from "./pages/Smart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "smart-home",
        element: <Smart />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
