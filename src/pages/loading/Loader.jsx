import React, { useEffect, useState } from "react";
import "./loader.css";
// import Starfield from "react-starfield";

const Loader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 2;
        }
        return prevCounter;
      });
    }, 1);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <div
          style={{
            position: "fixed",
            display: "flex",
          }}
          className="bgImg"
        >
          <img src="../../../src/assets/loading/backgroundImg.svg" alt="background" />
        </div>

        <div className="centre-content">
          <img src="../../../src/assets/loading/logo.svg" alt="logo" />
          <div className="loading-container"></div>
          <div className="counter">{counter}%</div>
        </div>
      </div>
    </>
  );
};

export default Loader;
