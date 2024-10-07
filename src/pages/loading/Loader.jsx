import React, { useEffect, useState } from "react";
import "./loader.css";
import backgroundImg from "../../assets/loading/backgroundImg.svg";
import logo from "../../assets/loading/logo.svg";
import Starfield from "react-starfield";

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
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <Starfield
          speedFactor={0.2}
          starCount={7000}
          starSize={20}
        />
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
