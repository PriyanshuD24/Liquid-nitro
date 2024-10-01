import React from "react";
import App from "./App2";
import Star from "./Star";

const Loader = ({setLoading}) => {
  return (
    <>
      <App setLoading= {setLoading} />
      <Star />
    </>
  );
};

export default Loader;
