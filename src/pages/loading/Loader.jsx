import React, { useEffect, useState } from "react";
import "./loader.css";
import backgroundImg from "../../assets/loading/backgroundImg.svg";
import logo from "../../assets/loading/logo.svg";
import Starfield from "react-starfield";

const Loader = ({ progress }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 4;
        }
        return prevCounter;
      });
    }, 1);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <Starfield speedFactor={0.2} starCount={7000} starSize={20} />
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
          <div
            style={{
              width: "70%",
              position: "absolute",
              left: "0",
              top: "62px",
            }}
          >
            <div
              className="loading-container"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="counter">{progress}%</div>
        </div>
      </div>
    </>
  );
};

export default Loader;
