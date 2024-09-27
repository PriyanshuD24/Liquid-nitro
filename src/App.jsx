import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomNewCard from "./components/CustomNewCard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/custom",
      element: <CustomNewCard/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
