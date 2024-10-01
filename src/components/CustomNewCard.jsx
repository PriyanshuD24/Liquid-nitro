import React, { Children, useEffect } from "react";
import Data from "../utils/particles.json"; // Imported JSON configuration
import {audio, share, expand , crossButton, logoWhite} from "../assets/icons/index"
import { bg, bgGradient, chakra } from "../assets/background";

const CustomNewCard = ({children, setScene}) => {
  useEffect(() => {
    // Initialize particles directly using the configuration object
    if (window.particlesJS) {
      window.particlesJS("particles-js", Data); // Direct initialization with the imported JSON object
      console.log("particles.js initialized");
    }
  }, []);

  return (
    <div className="flex font-titillium flex-col top-0 left-0 bottom-0 right-0 max-w-[100vw] overflow-hidden   min-h-screen   text-white  fixed w-full  animate-fade">
      {/* Particles background */}
      <div 
                className={`fixed text-black top-0 left-0 bottom-0 right-0 w-full h-full bg-cover bg-no-repeat  z-[10] mix-blend-screen bg-backgroundCard `}
              

            />
              <div 
                className="fixed text-black top-0 left-0 bottom-0 right-0  w-full h-full bg-cover bg-no-repeat   z-[10] mix-blend-screen bg-backgroundGradientCard "
              

            />
             <div 
                // className="absolute text-black top-0 left-0 w-96 h-96 bg-no-repeat bg-cover z-[10] mix-blend-screen bg-chakra  "
              
className="absolute opacity-[0.03]  -top-1/3 -left-1/2 sm:left-auto sm:-top-1/2  sm:-right-1/2   sm:-translate-x-1/2 "
            >
              <img src={chakra} alt="" srcset="" className="animate-spin-slow w-[450px] sm:w-auto " /> 
            </div>
              
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-10 mix-blend-screen"></div>
      
      <div className="2xl:w-[1500px] h-full mx-auto flex flex-col justify-center gap-4 relative ">
        {/* --------header------- */}
        <div className="justify-between gap-4 hidden md:flex fixed top-0   w-[1500px]   p-4 ">
          <div className="text-2xl font-bold z-20">
            <img src={logoWhite} alt="" className="w-40" />
          </div>
          <div className="flex items-center text-xl uppercase gap-3 lg:gap-4">
            <span className="z-20">About us</span>
            <span className="z-20">offerings</span>
            <span className="z-20">why us</span>
            <span className="z-20">nitro life</span>
            <span className="z-20">react out</span>
            <span className="z-20">careers</span>
          </div>
        </div>
        {/* ------cross----------- */}
<div className="absolute z-30 right-4 top-[2%] sm:top-[10%] md:top-[10%] "
onClick={()=>setScene(0)}
>

    <img src={crossButton} alt="" className="w-10 sm:w-12 md:w-16 z-30 hover:cursor-pointer  hover:scale-90 transition-all duration-300 " />
</div>
{/* -----body------ */}
  <div className="overflow-y-scroll space-y-8  z-20  mb-24 mt-10 md:my-24  p-2 px-4  ">

{children}
  </div>
{/* </div> */}
        {/* <div className="flex flex-col justify-center items-center md:items-start grow w-full md:max-w-[80%] gap-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl capitalize z-20 w-fit ">Company history</h1>
          <p className="text-lg sm:text-xl lg:text-3xl z-20 w-fit text-center md:text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam voluptate laudantium ut rerum facilis consequuntur nesciunt ullam expedita obcaecati nisi exercitationem enim aspernatur nihil tempora qui, est minus. Aut.
          </p>
        </div> */}
        {/* ---footer----- */}
        <div className="flex justify-between fixed bottom-0 w-[1500px] p-4 ">
    <div className="flex gap-8">
<img src={audio} alt="" className="w-10 sm:w-12 md:w-16 z-20 hover:cursor-pointer hover:scale-90 transition-all duration-300" />
<img src={share} alt="" className="w-10 sm:w-12 md:w-16 z-20 hover:cursor-pointer hover:scale-90 transition-all duration-300" />

    </div>
<img src={expand} alt="" className="w-10 sm:w-12 md:w-16 z-20 hover:cursor-pointer hover:scale-90 transition-all duration-300" />

        </div>
      </div>
    </div>
  );
};

export default CustomNewCard;
