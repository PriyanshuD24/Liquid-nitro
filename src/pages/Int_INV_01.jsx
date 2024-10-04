import React from "react";
import CustomCard from "../components/customCard";

const Int_INV_01 = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene} className={"top-1/4 left-4 md:top-1/3 md:left-1/3"}>
      <h2 className="text-2xl xl:text-7xl mb-4 sm:mb-10 text-white font-bold sm:font-normal">Our Investor</h2>
      <p className="sm:text-sm xl:text-lg text-white font-light">
        We believe in nurturing excellence. That means equipping our team with cutting-edge projects and the finest
        tools. But more importantly, it means fostering an environment of freedom and support. This empowers them to
        unleash their full potential and create works that leave a lasting impact.
      </p>
    </CustomCard>
  );
};

export default Int_INV_01;
