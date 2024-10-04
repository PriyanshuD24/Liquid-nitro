import React from "react";
import CustomCard from "../components/customCard";

const Idle_OP = ({ setScene ,width}) => {

  return (
    <CustomCard setScene={setScene}>
      <h2 className="font-bold sm:font-normal text-2xl xl:text-5xl mb-4 sm:mb-10 lg:mb-20 text-white">Our Philosophy</h2>

   {width>640 ?    <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-5 text-center">
        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5"> Product</h2>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5">People</h2>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5">Player</h2>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5">Process</h2>
        </div>
      </div>
:
<div className="space-y-2">
<p className="sm:hidden">We truly believe that creating fun, unforgettable player and
player experiences are what great games timeless and profitable</p>
      <p className="sm:text-sm md:text-lg text-white mt-10">
        We truly believe that creating fun, unforgettable player and player experiences are what great games timeless
        and profitable
      </p>
</div>}
    </CustomCard>
  );
};

export default Idle_OP;
