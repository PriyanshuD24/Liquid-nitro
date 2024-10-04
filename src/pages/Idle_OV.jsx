import React, { useEffect, useState } from "react";
import CustomCard from "../components/customCard";


const Idle_OV = ({ setScene, style }) => {
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);
  
  return (
    <CustomCard setScene={setScene} className={"top-1/4 left-4 md:top-1/3 md:left-1/5 "}>
      <h2 className=" text-2xl xl:text-5xl mb-4 font-bold sm:font-normal sm:mb-10 text-white">Our <span className="hidden sm:inline"> Core </span>Values</h2>
     {
      width>640 ?(
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
      ) :(
<div className="space-y-2">
<p>We believe in nurturing excellence. That means equipping our team with cutting-edge projects and the finest tools. But more importantly, it means fostering an environment of freedom and support. This empowers them to unleash their full potential and create works that leave a lasting impact.</p>
<p>We truly believe that creating fun, unforgettable player experiences are what make great games timeless! We strongly believe that happy, passionate teams transform insights into fun, engaging experiences for players.</p>
</div>
      ) 
     }
     
    </CustomCard>
  );
};

export default Idle_OV;
