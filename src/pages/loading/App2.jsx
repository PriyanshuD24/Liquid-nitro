import React, { useEffect, useState } from "react";
import "./loader.css";
import {bgLoadingSound} from '../../assets/musics';

const App = () => {
  const [overlayVisible, setOverlayVisible] = useState(true); // State to manage overlay visibility

  useEffect(() => {
    // Simulate page load by using setTimeout directly on component mount
    const timeout = setTimeout(() => {
      setOverlayVisible(false); // Hide the overlay after 2 seconds
    }, 2000);

    const handleClick = () => {
      const audio = new Audio(bgLoadingSound);
      audio.play();
    };

    window.addEventListener("click", handleClick, { once: true });

    const bgImg = document.querySelector(".tilt-background");
    if (bgImg) {
      VanillaTilt.init(bgImg, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: true,
        transition: true,
      });
    }

    return () => {
      clearTimeout(timeout); // Clean up the timeout if the component unmounts
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {/* Conditionally render the overlay based on state */}
      {overlayVisible && (
        <div className="overlay" id="overlay">
          <div className="loading-container"></div>
        </div>
      )}

      <div className="tilt-wrapper">
        <div
          className="tilt-background "
          data-tilt
          data-tilt-max="5"
          data-tilt-transition="true"
          data-tilt-gyroscope="true"
          data-tilt-glare="true"
          data-tilt-max-glare="0.2"
          
        >
          <img
            src="https://i.ibb.co/Kq7F7YF/Planet-for-web-02.png"
            alt="Planet-and-Ring-for-web"
            className="center-image object-cover "
          />
        </div>
      </div>

      <img
        src="https://i.ibb.co/WxwY8dK/New-0-75x.png"
        alt="Spaceship"
        className="fullscreen-image"
        id="spaceship"
      />
    </div>
  );
};

export default App;
