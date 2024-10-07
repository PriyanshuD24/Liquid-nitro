import React from "react";
import CustomCard from "../components/customCard";

const Idle_OP = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene} className={"sm:z-[0]  max-h-[70svh] py-2 overflow-y-auto z-20"}>
      <h2 className="text-2xl xl:text-5xl sm:font-normal font-bold mb-4 sm:mb-10 lg:mb-20 text-white text-center sm:text-left">Our Philosophy</h2>

      <div className="flex flex-col items-center sm:flex-row justify-center text-white  text-center">
        <div className=" h-24 sm:h-auto w-24 md:w-32">
          <Card> Product</Card>
        </div>

        <div className="h-24 sm:h-auto w-24 md:w-32">
        <Card> People</Card>

          {/* <h2 className="text-xl md:text-4xl font-semibold mb-5 ">People</h2> */}
        </div>

        <div className="h-24 sm:h-auto w-24 md:w-32">
        <Card> Player</Card>

          {/* <h2 className="text-xl md:text-4xl font-semibold mb-5 ">Player</h2> */}
        </div>

        <div className="h-24 sm:h-auto w-24 md:w-32">
        <Card> Process</Card>

          {/* <h2 className="text-xl md:text-4xl font-semibold mb-5 ">Process</h2> */}
        </div>
      </div>

      <p className="text-sm md:text-lg text-white mt-10 text-center">
        We truly believe that creating fun, unforgettable player and player experiences are what great games timeless
        and profitable.
      </p>
    </CustomCard>
  );
};

const Card = ({children})=> {
return (
  <div 
style={{
  backgroundColor: "rgba(255,255,255,0.5)",

}}
  className="h-28 md:h-36 w-28 md:w-36 rounded-full  text-xl md:text-2xl font-semibold flex items-center justify-center text-[#03142F]">
{children}
  </div>
)
}

export default Idle_OP;
