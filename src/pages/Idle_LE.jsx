import React from "react";
import CustomCard from "../components/customCard";
import CustomNewCard from "../components/CustomNewCard";

const Idle_LE = ({ setScene, style }) => {
  return (
    <CustomNewCard setScene={setScene}>
    <div className="flex flex-col justify-center items-center md:items-start grow w-full gap-6 sm:gap-12 md:gap-14 lg:gap-20">
             <h1 className="text-xl sm:text-5xl lg:text-7xl capitalize z-20 w-fit font-bold mx-auto">Our Leadership Experience</h1>
             
             <div className="flex justify-between w-full gap-4 flex-wrap lg:flex-nowrap   ">
   <FeaturesCard heading="18">End to End Live Services</FeaturesCard>
   <FeaturesCard heading="40">World class Mobile Games</FeaturesCard>
   <FeaturesCard heading="15">Prototype & New Games</FeaturesCard>
   <FeaturesCard heading="12">AAA Studios partneres with</FeaturesCard>
   
             </div>
   
           </div>
       </CustomNewCard>

  );
};
const FeaturesCard= ({heading, children})=>{
  return (
   <div className="flex flex-col justify-stretch items-center gap-4 max-w-96 p-2 mx-auto  ">
 <div className="text-lg sm:text-xl lg:text-3xl z-20 w-fit text-center font-semibold ">{heading}+</div>
 <div className=" sm:text-lg lg:text-xl text-center z-20">{children}</div>
   </div>
  )
 }

export default Idle_LE;
