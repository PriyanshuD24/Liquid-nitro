import React, { useEffect, useState } from "react";
import "./loader.css";
import { bgLoadingSound } from "../../assets/musics";
// import { bgLoading } from "";

const App = ({setLoading}) => {
  const [overlayVisible, setOverlayVisible] = useState(true); // State to manage overlay visibility
  const [lineLoadingComplete, setLineLoadingComplete] = useState(false); // State to manage loading completion

  useEffect(() => {
    // Simulate loading animation duration
    const loadingDuration = 2000; // 2 seconds
    const timeout = setTimeout(() => {
      setLineLoadingComplete(true); // Set loading complete to true after 2 seconds
    }, loadingDuration);

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
    };
  }, []);

  const handleEnter = () => {
    const audio = new Audio(bgLoadingSound);
    audio.onended = () => {
      audio.play(); // restart the audio when it ends
    };
    audio.play();
    setOverlayVisible(false);
    setTimeout(() => {
      setLoading(false)
      console.log('Website Loaded')
    }, 5000);
  };

  return (
    <div>
      {/* Conditionally render the overlay based on state */}
      {overlayVisible && (
        <div className="overlay" id="overlay">
          <div className="loading-container"></div>
          {lineLoadingComplete && (
            <button onClick={handleEnter} className="enterBtn pulsating-text">
              ENTER
            </button>
          )}
        </div>
      )}

      <div className="tilt-wrapper">
        <div
          className="tilt-background"
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
