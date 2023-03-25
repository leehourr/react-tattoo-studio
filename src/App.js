import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import About from "./components/Home/About";
import GallerySection from "./components/Home/GallerySection";
import Interview from "./components/Home/Interview";
import Contact from "./components/Home/Contact";
import LandingPage from "./components/Home/LandingPage";
import Skills from "./components/Home/Skills";
import Testimonial from "./components/Home/Testimonial";
import Footer from "./components/Home/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/", element: <LandingPage /> },
          { path: "/about", element: <About /> },
          { path: "/gallery", element: <GallerySection /> },
          { path: "/skill", element: <Skills /> },
          { path: "/quotes", element: <Testimonial /> },
          { path: "/interview", element: <Interview /> },
          { path: "/contacts", element: <Contact /> },
          { path: "/footer", element: <Footer /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
