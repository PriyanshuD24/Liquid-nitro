import React, { useEffect, useState } from "react";
import MainLogo from "../assets/imgs/LiquidNitro_VectorWhite.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import MainBg from "../assets/imgs/BG with stars@0.75x.png";
import ReactLogo from "../assets/icons/Shatkona-SVG.svg?react";
import AuroraBg from "../assets/imgs/Gradient Aurora web png@0.75x.png";
import Data from "../constants/particle.json";
import { headData, findIndexByValue } from "../constants";
import { useNavigate } from "react-router-dom";

const CustomHeader = ({ splineData, setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const bgStyle = {
    background: `url(${MainBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const menuItems = [
    { label: "About us", key: "about", page: 1 },
    { label: "Offerings", key: "offerings", page: 3 },
    { label: "Nitro Life", key: "nitroLife", page: 4 },
    { label: "Reach out", key: "reachOut", page: 2 },
    // { label: "Home", key: "home", page: 0 },

  ];

  function triggerAnimation(objectName) {
    console.log(objectName, "trigger animation");
    
    if (objectName) {
      setIsMenuOpen(false);
      const obj = splineData.findObjectById(objectName);
      if (obj) {
        console.log(obj, "tA obj");
        
        obj.emitEvent("mouseUp");
        findIndexByValue(objectName);
        setCurrentPage(findIndexByValue(objectName));
      } else {
        console.error(`Object with name ${objectName} not found.`);
      }
    } else {
      console.error("No object name provided.");
    }
  }

  function triggerHoverEffect(objectName, isHovering) {
    // console.log(objectName , "++++++++++");

    if (objectName) {
      const obj = splineData.findObjectById(objectName);
      // console.log(obj);
      
      if (obj) {
        if(isHovering){
          obj.emitEvent("mouseHover")
        }
        else{

            obj.emitEventReverse("mouseHover");
        }
        
        
      } else {
        console.error(`Object with name ${objectName} not found.`);
      }
    } else {
      console.error("No object name provided for hover effect.");
    }
  }

  return (
    <nav
      style={isMenuOpen ? bgStyle : {}}
      className={`fixed top-0 w-full  z-20 ${isMenuOpen && `lg:auto lg:bg-transparent h-screen`}`}>
      {isMenuOpen && (
        <div className="relative">
          <div id="particles-js2" className="absolute top-0 left-0 w-full h-screen mix-blend-screen z-[1]"></div>
          <div className="fixed top-0 right-0 translate-x-1/2 -translate-y-1/2">
            <ReactLogo
              viewBox="0 0 1024 1024"
              className="[&_path]:fill-white/10 animate-spin-slow lg:size-[1000px] md:size-[800px] sm:size-[700px] size-[600px]"
            />
          </div>
          <img className="w-full fixed bottom-0 z-[-1]" src={AuroraBg} />
        </div>
      )}

      <div className="lg:h-18 mx-auto container flex items-center justify-between flex-wrap lg:flex-nowrap md:px-8 px-4 md:px-auto py-4 ">
        {/* Logo */}
        <div 
       
        className="lg:w-48 sm:w-40 w-36 hover:scale-[1.15] transition-transform duration-300  "
       onClick={()=> triggerAnimation(headData[currentPage].home)}
        >
          <img src={MainLogo} />
        </div>
        <Icon
          icon={!isMenuOpen ? "hugeicons:menu-03" : "material-symbols-light:close"}
          onClick={handleMenuToggle}
          className="text-white text-4xl cursor-pointer lg:hidden block absolute top-5 right-5 z-20"
        />
        <div
          className={`text-white uppercase lg:w-auto w-full lg:block 
            ${isMenuOpen ? "" : "hidden"} lg:p-0 p-6 z-20`}>
          <ul className="lg:flex text-center justify-between relative mt-20 lg:mt-0 text-xl lg:text-sm gap-2">
            {menuItems.map((item) => (
              <li
                key={item.page}
                onClick={() => triggerAnimation(headData[currentPage][item.key])}
                onMouseEnter={() => triggerHoverEffect(headData[currentPage][item.key], true)}
                onMouseLeave={() => triggerHoverEffect(headData[currentPage][item.key], false)}
                className={`md:px-4 md:py-2 lg:mb-0 mb-6 cursor-pointer hover:scale-[1.15] transition-all hover:font-bold   text-base sm:text-lg  duration-300 ${
                  currentPage === item.page ? "scale-[1.15] font-bold " : ""
                }`}
                role="button"
                tabIndex={0}>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomHeader;
