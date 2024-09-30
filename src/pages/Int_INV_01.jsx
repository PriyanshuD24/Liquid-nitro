import React from "react";
import CustomCard from "../components/customCard";
import CustomNewCard from "../components/CustomNewCard";

const Int_INV_01 = ({ setScene, style }) => {
  return (
   <CustomNewCard setScene={setScene}>
   <div className="flex flex-col justify-center items-center md:items-start grow w-full gap-10"> 
    <div className="flex justify-center w-full items-center flex-wrap sm:flex-nowrap gap-6">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl capitalize z-20 w-fit mx-auto sm:mx-0 font-bold">Our Investor</h1>
<img src="https://cdn.prod.website-files.com/62f543f81cd426262b783c80/6402638de57bed64c45baa0c_uqhio4wcyjl0danhwkny.jpeg" className="w-32 h-12 mx-auto sm:mx-0  object-cover" alt="" />
    </div>
          <p className="text-lg sm:text-xl lg:text-2xl z-20 w-fit md:max-w-[80%]  md:text-center mx-auto ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam voluptate laudantium ut rerum facilis consequuntur nesciunt ullam expedita obcaecati nisi exercitationem enim aspernatur nihil tempora qui, est minus. Aut.
          </p>
        </div>
   </CustomNewCard>
  );
};

export default Int_INV_01;
