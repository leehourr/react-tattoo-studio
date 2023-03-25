import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import About from "./components/Home/About";
import GallerySection from "./components/Home/GallerySection";
import Interview from "./components/Home/Interview";
import Contact from "./components/Home/Contact";
import LandingPage from "./components/Home/LandingPage";

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
          { path: "/interview", element: <Interview /> },
          { path: "/article", element: <Interview /> },
          { path: "/contact", element: <Contact /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
