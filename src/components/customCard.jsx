import React, { useEffect, useState } from "react";
import AuroraBg from "../assets/imgs/Gradient Aurora web png@0.75x.png";
import MainBg from "../assets/imgs/BG with stars@0.75x.png";
import ReactLogo from "../assets/icons/Shatkona-SVG.svg?react";
import CrossIcon from "../assets/icons/Cross Button.svg?react";

import AudioIcon from "../assets/icons/Audio.svg?react";
import ShareIcon from "../assets/icons/Share.svg?react";
import ExpandIcon from "../assets/icons/expand.svg?react";
import Data from "../constants/particle.json";
import CustomMobileCard from "./CustomMobileCard";

const CustomCard = ({ setScene, style, className, children }) => {
  useEffect(() => {
    // Initialize particles directly using the configuration object
    if (window?.particlesJS && width>640) {
      window?.particlesJS("particles-js", Data); // Direct initialization with the imported JSON object
    }
  }, []);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);
// console.log(width);

  return (
    <>
    {
      width>640 ? (   <div
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
  
        <div className={`py-0 px-4 sm:p-4  w-full max-w-screen-lg mx-auto lg:mt-0 mt-14   sm:mb-0   ${className} `}>
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
          onClick={() => setScene(0)}
          className="fixed top-16 sm:top-20 right-5 size-10 cursor-pointer z-[1] hover:scale-90 transition-transform duration-300 "
        >
          <CrossIcon className="[&_path]:fill-gray-500 " />
        </div>
      </div>) : (
    <CustomMobileCard setScene={setScene} children={children}/>

      )
    }
    
    </>
  
  );
};

export default CustomCard;
