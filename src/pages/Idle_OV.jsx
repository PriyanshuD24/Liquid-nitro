import React from "react";
import CustomCard from "../components/customCard";

const Idle_OV = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene} className={"top-1/4 left-4 md:top-1/3 md:left-1/5  sm:z-[0]  max-h-[70svh] py-2 overflow-y-auto theme-scroll z-20 "}>
      <div className=" ">

      <h2 className="text-2xl xl:text-5xl mb-4 sm:mb-10 text-white text-center sm:text-left font-bold sm:font-normal">Our Core Values</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-4 sm:gap-5">
        <div>
          <h2 className="text-xl md:text-2xl mb-2 sm:mb-5 text-center sm:text-left font-semibold sm:font-medium">Passion</h2>
          <p className=" text-center sm:text-left">Be passionate about what we do in our craft, the games we work on and more</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl mb-2 sm:mb-5 text-center sm:text-left font-semibold sm:font-medium">Transparency</h2>
          <p className=" text-center sm:text-left">In our choices,decisions, communication and the way we do things</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl mb-2 sm:mb-5 text-center sm:text-left font-semibold sm:font-medium">Fairness</h2>
          <p className=" text-center sm:text-left">To each other, our players, our partners and everyone we work with</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl mb-2 sm:mb-5 text-center sm:text-left font-semibold sm:font-medium">Meritocracy</h2>
          <p className=" text-center sm:text-left">Where capability, skill and contribution defines our structure and culture</p>
        </div>
      </div>
      </div>
    </CustomCard>
  );
};

export default Idle_OV;
