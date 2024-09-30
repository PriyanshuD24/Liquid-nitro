import React from "react";
import CustomNewCard from "../../components/CustomNewCard";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
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
      <div className="flex justify-between grow">
        <div onClick={handlePrev} className=" z-20 cursor-pointer">
          <img
            src={back}
            alt="prev"
            className="min-w-6 md:min-w-16 lg:min-w-20 "
          />
        </div>
        <Carousel className="grow">
          <CarouselItem >
            <img src="https://picsum.photos/200/300" className="" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://picsum.photos/200/300" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://picsum.photos/200/300" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://picsum.photos/200/300" alt="" />
          </CarouselItem>
        </Carousel>
        <div onClick={handleNext} className=" z-20 cursor-pointer">
          <img
            src={back}
            alt="prev"
            className="min-w-6 md:min-w-16 lg:min-w-20 rotate-180"
          />
        </div>
      </div>
    </CustomNewCard>
  );
};

export default Int_NL01;
