import React from "react";
import Loader from "./Loader";
import Starfield from "react-starfield";

const MainLoader = () => {
  return (
    <div className="max-w-full h-[100vh] overflow-hidden">
      <Loader />
      <Starfield speedFactor={0.2} starCount={7000} starSize={20} />
    </div>
  );
};

export default MainLoader;
