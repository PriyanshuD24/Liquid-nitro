import React from "react";
import CustomNewCard from "../../components/CustomNewCard";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import Logo from "../../assets/imgs/team.jpg"
import Img1 from "../../assets/imgs/Pic1.jpg";
import Img2 from "../../assets/imgs/Pic2.jpg";
import Img3 from "../../assets/imgs/Pic3.jpg";
import { back } from "../../assets/icons";



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
    <CustomNewCard setScene={setScene}>
      <div className="text-xl md:text-3xl lg:text-4xl font-bold">Live. Create. Thrive. @Liquidnitro</div>
      <div className="flex justify-between items-center">
        <div onClick={handlePrev} className=" z-20 cursor-pointer">
          <img
            src={back}
            alt="prev"
            className="w-6 md:w-8 lg:w-10 rotate-180"
          />
        </div>
        <Carousel wrap={true} touch={true} interval={2000}  className="basis-full  mx-auto">
          <CarouselItem  >
            <img src={Img1} className="h-[300px] w-[300px] sm:h-[50vh] sm:w-[80%] mx-auto rounded-xl object-cover" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={Img2} className="h-[300px] w-[300px] sm:h-[50vh] sm:w-[80%] mx-auto rounded-xl object-cover"  alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={Img3} className="h-[300px] w-[300px] sm:h-[50vh] sm:w-[80%] mx-auto rounded-xl object-cover" alt="" />
          </CarouselItem>
          
        </Carousel>
        <div onClick={handleNext} className=" z-20 cursor-pointer">
          <img
            src={back}
            alt="prev"
            className="w-6 md:w-8 lg:w-10 "
          />
        </div>
      </div>
      <div className="text-sm  sm:text-lg md:text-xl lg:text-2xl">
      We believe in nurturing excellence. That means equipping our team with cutting-edge projects and the finest tools. But more importantly, it means fostering an environment of freedom and support. This empowers them to unleash their full potential and create works that leave a lasting impact.
      </div>
    </CustomNewCard>
  );
};

export default Int_NL01;
