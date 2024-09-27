import React from "react";
import CustomCard from "../components/customCard";

const Idle_CEO = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene} style={style} className={"top-1/4 left-4 md:top-1/3 md:left-1/3"}>
      <h2 className="text-2xl xl:text-3xl font-bold mb-2 text-white">Chief Executive Officer</h2>
      <div className="grid md:grid-cols-3 gap-5 mt-2">
        <img
          className="w-full h-40 rounded-lg object-cover object-top"
          src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
        />
        <div className="md:col-span-2">
          <p className="text-sm xl:text-md text-white">
            We truly believe that creating fun, unforgettable player experiences are what make great games timeless! We
            strongly believe that happy, passionate teams transform insights into fun, engaging experiences for players.
          </p>
          <div className="text-white text-sm grid grid-cols-2 mt-3 hover:[&_button]:underline">
            <button className="border-r">Watch Video</button>
            <button>See Profile</button>
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default Idle_CEO;
