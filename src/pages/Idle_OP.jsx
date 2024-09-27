import React from "react";
import CustomCard from "../components/customCard";
import CustomNewCard from "../components/CustomNewCard";

const Idle_OP = ({ setScene, style }) => {
  return (
   <CustomNewCard setScene={setScene}>
     <div className="flex flex-col justify-center items-center md:items-start grow w-full gap-6 sm:gap-12 md:gap-14 lg:gap-20">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl capitalize z-20 mx-auto font-bold ">Our Philosophy</h1>
          <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12">

          
          <div className="sm:flex justify-between items-baseline w-full space-y-3 sm:gap-4 flex-wrap lg:flex-nowrap   ">
<h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">Product</h2>
<h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">People</h2>
<h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">Player</h2>
<h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">Process</h2>

          </div>
          <p className=" sm:text-xl lg:text-2xl">We truly believe that creating fun, unforgettable player and player experiences are what great timeless and profitable.</p>

          </div>
        </div>
   </CustomNewCard>
  );
};

export default Idle_OP;
