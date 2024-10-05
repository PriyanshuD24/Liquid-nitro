import React, { useEffect, useState } from "react";
import "./loader.css";
import backgroundImg  from "../../assets/loading/backgroundImg.svg";
import logo  from "../../assets/loading/logo.svg";

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
    }, 5);

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
          <img src={backgroundImg} alt="background" />
        </div>

        <div className="centre-content">
          <img src={logo} alt="logo" />
          <div className="loading-container"></div>
          <div className="counter">{counter}%</div>
        </div>
      </div>
    </>
  );
};

export default Loader;
