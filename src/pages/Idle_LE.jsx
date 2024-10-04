import React from "react";
import CustomCard from "../components/customCard";


const Idle_LE = ({ setScene , width}) => {
  return (
    <CustomCard setScene={setScene}>
      <h2 className="text-2xl xl:text-5xl mb-4 sm:mb-10 lg:mb-20 text-white">Our Leadership Experience</h2>

     {width>640 ?  <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-5 text-center">
        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5">18+</h2>
          <p className="text-sm md:text-lg">
            End to End <br /> Live Services
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5">40+</h2>
          <p className="text-sm md:text-lg">
            World class
            <br /> Mobile Games
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5">15+</h2>
          <p className="text-sm md:text-lg">
            Prototypes <br /> & New Games
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-5">12+</h2>
          <p className="text-sm md:text-lg">
            AAA Studios
            <br /> partnered with
          </p>
        </div>
      </div>
    : (
      <div>
        <p>We believe in nurturing excellence. That means equipping our team with cutting-edge projects and the finest tools. But more importantly, it means fostering an environment of freedom and support. This empowers them to unleash their full potential and create works that leave a lasting impact.</p>
      </div>
    )  
    }
    </CustomCard>
  );
};

export default Idle_LE;
