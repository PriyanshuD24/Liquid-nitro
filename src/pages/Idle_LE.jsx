import React from "react";
import CustomCard from "../components/customCard";

const Idle_LE = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene} className={"sm:z-0  max-h-[70svh] py-2 overflow-y-auto  theme-scroll z-20"}>
      <div className=" ">
        
      <h2 className="text-2xl xl:text-5xl mb-4 sm:mb-10 lg:mb-20 text-white text-center sm:text-left font-bold sm:font-normal">Our Leadership Experience</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-3 sm:gap-5 text-center">
        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-2 sm:mb-5">18+</h2>
          <p className="text-sm md:text-lg">
            End to End <br /> Live Services
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-2 sm:mb-5">40+</h2>
          <p className="text-sm md:text-lg">
            World class
            <br /> Mobile Games
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-2 sm:mb-5">15+</h2>
          <p className="text-sm md:text-lg">
            Prototypes <br /> & New Games
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-2 sm:mb-5">12+</h2>
          <p className="text-sm md:text-lg">
            AAA Studios
            <br /> partnered with
          </p>
        </div>
      </div>
      </div>
    </CustomCard>
  );
};

export default Idle_LE;
