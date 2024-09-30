import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomNewCard from "./components/CustomNewCard";
import Loader from "./pages/loading/Loader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  
  ]);

  return <RouterProvider router={router} />;
};

export default App;
