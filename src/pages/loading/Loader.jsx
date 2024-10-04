import React, { useEffect, useState } from "react";
import "./loader.css";
import Starfield from "react-starfield";

const Loader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        }
        return prevCounter;
      });
    }, 1);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div style={{
          position: "fixed",
        
          display: "flex",
       
        
      }} className="bgImg">
        <img src="../../assets/loading/backgroundImg.svg" alt="background" />
      </div>

      <div className="centre-content">
        <img src="../../assets/loading/logo.svg" alt="" />
        <div className="loading-container"></div>
        <div className="counter">{counter}%</div>
      </div>
      <Starfield
      speedFactor={0.2}
      starCount={7000}
      starSize={20}
    />
    
    </>
  );
};

export default Loader;
