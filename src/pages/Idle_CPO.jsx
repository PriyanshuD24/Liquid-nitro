import React from "react";
import CustomCard from "../components/customCard";

const Idle_CPO = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene} style={style} className={"top-1/4 left-4 md:top-1/3 md:left-1/3"}>
      <h2 className="text-2xl xl:text-3xl font-bold mb-2 text-white">Chief Product Officer</h2>
      <p className="text-sm xl:text-md text-white">
        We truly believe that creating fun, unforgettable player experiences are what make great games timeless! We
        strongly believe that happy, passionate teams transform insights into fun, engaging experiences for players.
      </p>
      <br />
      <p className="text-sm xl:text-md text-white">
        We truly believe that creating fun, unforgettable player experiences are what make great games timeless! We
        strongly believe that happy, passionate teams transform insights into fun, engaging experiences for players.
      </p>
    </CustomCard>
  );
};

export default Idle_CPO;
