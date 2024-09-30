import React from "react";
import CustomCard from "../components/customCard";
import CustomNewCard from "../components/CustomNewCard";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Idle_OV = ({ setScene }) => {
  return (
    // <CustomCard setScene={setScene} style={style} className={"top-1/4 left-4 md:top-1/3 md:left-1/5"}>
    //   <h2 className="text-2xl xl:text-3xl font-bold mb-2 text-white">Our Values</h2>
    //   <p className="text-sm xl:text-md text-white">
    //     We truly believe that creating fun, unforgettable player experiences are what make great games timeless! We
    //     strongly believe that happy, passionate teams transform insights into fun, engaging experiences for players.
    //   </p>
    //   <br />
    //   <p className="text-sm xl:text-md text-white">
    //     We truly believe that creating fun, unforgettable player experiences are what make great games timeless! We
    //     strongly believe that happy, passionate teams transform insights into fun, engaging experiences for players.
    //   </p>
    // </CustomCard>
    <>
    <CustomNewCard setScene={setScene}>
 <div className="flex flex-col justify-center items-center md:items-center grow w-full gap-6 sm:gap-12 md:gap-14 lg:gap-20">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl capitalize   font-bold text-center ">Our Core values</h1>
          
          <div className="flex justify-between w-full gap-4 flex-wrap lg:flex-nowrap   ">
<FeaturesCard heading="Passion">Be passionate about what we doin our craft, the games we work on and more</FeaturesCard>
<FeaturesCard heading="Transparency">In our choices, decisions, communications and the way we do things</FeaturesCard>
<FeaturesCard heading="Fairness">To each other, our partners and everyone we work with</FeaturesCard>
<FeaturesCard heading="Meritocracy">Where capability, skill and contribution defines our structure and culture</FeaturesCard>

          </div>

        </div>
    </CustomNewCard>
    </>
  );
};

const FeaturesCard= ({heading, children})=>{
 return (
  <div className="flex flex-col justify-stretch items-center gap-4 max-w-96 p-2 mx-auto  ">
<div className="text-lg sm:text-xl lg:text-2xl z-20 w-fit text-center font-semibold ">{heading}</div>
<div className=" sm:text-lg lg:text-xl text-center z-20">{children}</div>
  </div>
 )
}
export default Idle_OV;
