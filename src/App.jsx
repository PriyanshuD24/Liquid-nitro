import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <div id="landscape-warning">This website is not optimized for landscape mode. Please switch to portrait mode.</div>
      <div id="app-content">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
