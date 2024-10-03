import React from "react";
import CustomCard from "../components/customCard";

const Idle_OV = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene} className={"top-1/4 left-4 md:top-1/3 md:left-1/5"}>
      <h2 className="text-2xl xl:text-5xl mb-10 text-white">Our Core Values</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-5">
        <div>
          <h2 className="text-xl md:text-2xl font-medium mb-5">Passion</h2>
          <p>Be passionate about what we do in our craft, the games we work on and more</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-medium mb-5">Transparency</h2>
          <p>In our choices,decisions, communication and the way we do things</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-medium mb-5">Fairness</h2>
          <p>To each other, our players, our partners and everyone we work with</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-medium mb-5">Meritocracy</h2>
          <p>Where capability, skill and contribution defines our structure and culture</p>
        </div>
      </div>
    </CustomCard>
  );
};

export default Idle_OV;
