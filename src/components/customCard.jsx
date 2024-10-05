import React, { useEffect } from "react";
import AuroraBg from "../assets/imgs/Gradient Aurora web png@0.75x.png";
import MainBg from "../assets/imgs/BG with stars@0.75x.png";
import ReactLogo from "../assets/icons/Shatkona-SVG.svg?react";
import CrossIcon from "../assets/icons/Cross Button.svg?react";

import AudioIcon from "../assets/icons/Audio.svg?react";
import ShareIcon from "../assets/icons/Share.svg?react";
import ExpandIcon from "../assets/icons/expand.svg?react";
import Data from "../constants/particle.json";

const CustomCard = ({ setScene, style, className, children }) => {
  useEffect(() => {
    // Initialize particles directly using the configuration object
    if (window.particlesJS) {
      window.particlesJS("particles-js", Data); // Direct initialization with the imported JSON object
    }
  }, []);

  return (
    <div
      style={{
        background: `url(${MainBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`fixed top-0 left-0 w-screen h-svh overflow-hidden z-10 animate-card flex items-center `}
    >
      <div
        id="particles-js"
        className="absolute top-0 left-0 w-full h-full mix-blend-screen z-[1]"
      ></div>

      <img className="w-full fixed bottom-0 z-[-1]" src={AuroraBg} />

      <div className="fixed top-0 right-0 translate-x-1/2 -translate-y-1/2">
        <ReactLogo
          viewBox="0 0 1024 1024"
          className="[&_path]:fill-white/10 animate-spin-slow lg:size-[1000px] md:size-[800px] sm:size-[700px] size-[600px]"
        />
      </div>

      <div 
    
      className={` px-4 sm:py-2  w-full max-w-screen-lg mx-auto lg:mt-0 mt-14   font-pointBlack   ${className} `}>
        <div >{children}</div>
      </div>

      <div className="flex justify-between fixed bottom-0 sm:bottom-4 left-5 right-5 z-10">
        <div className="flex gap-5">
        

          <AudioIcon className="[&_path]:fill-gray-500 size-10 cursor-pointer hover:scale-90 transition-transform duration-300  " />
        
          <ShareIcon className="[&_path]:fill-gray-500 size-10 cursor-pointer hover:scale-90 transition-transform duration-300" />
        </div>
        <ExpandIcon className="[&_path]:fill-gray-500 size-10 hover:scale-90 transition-transform duration-300 " />
      </div>

      <div
      style={{
        zIndex: 50,
      }}
        onClick={() => setScene(0)}
        className="fixed top-16 sm:top-24 right-5 size-10 cursor-pointer !z-50 hover:scale-90 transition-transform duration-300 "
      >
        <CrossIcon className="[&_path]:fill-gray-500 !z-50 " />
      </div>
    </div>
  );
};

export default CustomCard;
