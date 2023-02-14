import LandingPage from "./components/landingPage/landingPage.jsx";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact.jsx";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
