import React from "react";
import Loader from "./Loader";
import Starfield from "react-starfield";

const MainLoader = () => {
  return (
    <>
      <Loader />
      <Starfield speedFactor={0.2} starCount={7000} starSize={20} />
    </>
  );
};

export default MainLoader;
