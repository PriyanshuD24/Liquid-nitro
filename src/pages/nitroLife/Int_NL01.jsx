import React from "react";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
// import Logo from "../../assets/imgs/team.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

import Img1 from "../../assets/imgs/Pic1.jpg";
import Img2 from "../../assets/imgs/Pic2.jpg";
import Img3 from "../../assets/imgs/Pic3.jpg";
import  back  from "../../assets/icons/arrow.svg";
import { IoChevronBack } from "react-icons/io5";

import CustomCard from "../../components/customCard";



const Int_NL01 = ({ setScene }) => {
    const handleNext = () => {
        document.querySelector(".carousel-control-next").click()
        // setIndex(index === 3 ? 0 : index + 1);
    };

    const handlePrev = () => {
        // console.log("clicked");
        document.querySelector(".carousel-control-prev").click()
        
        // setIndex(index === 0 ? 3 : index - 1);
    };
  return (
    <CustomCard setScene={setScene} className={" "} >
      <div className="max-h-[70svh] sm:max-h-[75svh]  pr-2  overflow-y-auto theme-scroll relative">

      <div className="text-xl md:text-3xl lg:text-4xl font-bold sm:font-normal text-center sm:text-left     text-white">Live. Create. Thrive. @Liquidnitro</div>
      <div className="flex justify-between items-center gap-2 ">
        <div onClick={handlePrev} className=" z-20 cursor-pointer absolute text-white top-1 right-10 text-3xl ">
       
          <IoChevronBack/>
        </div>

        <Carousel indicators={false} wrap={true} touch={true} interval={2000}  className="basis-full font-bold  mx-auto my-4 sm:my-10 ">
          <CarouselItem  >
            <img src={Img1} className="h-[200px] w-[300px] sm:h-[50vh] sm:w-[100%] mx-auto rounded-xl object-cover " alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={Img2} className="h-[200px] w-[300px] sm:h-[50vh] sm:w-[100%] mx-auto rounded-xl object-cover bg-no-repeat"  alt="" />
          </CarouselItem> 
          <CarouselItem>
            <img src={Img3} className="h-[200px] w-[300px] sm:h-[50vh] sm:w-[100%] mx-auto rounded-xl object-cover bg-no-repeat" alt="" />
          </CarouselItem>
          
        </Carousel>
        <div onClick={handleNext} className=" z-20 cursor-pointer text-white rotate-180 absolute top-1 right-0 text-3xl">
        
          <IoChevronBack/>
        </div>
      </div>
      <div className="text-sm  sm:text-lg md:text-xl lg:text-xl text-white ">
      We believe in nurturing excellence. That means equipping our team with cutting-edge projects and the finest tools. But more importantly, it means fostering an environment of freedom and support. This empowers them to unleash their full potential and create works that leave a lasting impact.
      </div>
      </div>
    </CustomCard>
  );
};

export default Int_NL01;
