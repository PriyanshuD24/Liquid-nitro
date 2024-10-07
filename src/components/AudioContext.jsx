import { createContext, useEffect, useState } from "react";
import Music from "../assets/bgMusic/sound.mp3";
export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [playAudio, setPlayAudio] = useState(false);
  const audio = new Audio(Music);

  useEffect(() => {
    if (playAudio) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset to start when stopped
    }
    
    // Cleanup on component unmount
    return () => {
      audio.pause();
    };
  }, [playAudio, audio]);
  
  return (
    <AudioContext.Provider value={{ playAudio, setPlayAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
