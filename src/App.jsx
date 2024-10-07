import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AudioProvider from "./components/AudioContext";
import Loader from "./pages/loading/Loader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AudioProvider>
          {" "}
          <Home />{" "}
        </AudioProvider>
      ),
    },
  ]);

  return (
    <>
      <div id="landscape-warning">
        This website is not optimized for landscape mode. Please switch to
        portrait mode.
      </div>
      <div id="app-content">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
