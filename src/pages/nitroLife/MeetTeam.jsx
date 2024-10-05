import React, { useEffect, useState } from "react";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import  back  from "../../assets/icons/arrow.svg";
import { Anton, anurag, nitin, sarvanan, siva } from "../../assets/founders";
import Linkedin from "../../assets/icons/LinkedIn.png";
import { IoChevronBack } from "react-icons/io5";


const MeetTeam = ({info, fullInfo, setClicked}) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

// console.log(screenWidth);




  const chunkArray = (array, chunkSize) => {
    const result = [];
    let i = 0;
  
    // Keep chunking until you've grouped all elements
    while (i < array.length) {
      // Create a chunk and ensure it wraps around using modulo
      if(array[i].name== info.name) {
        i++;
        continue;
      }
      const chunk = [];
      for (let j = 0; j < chunkSize; j++) {
        const index = (i + j) % array.length; // Wrap around when index exceeds array length
        chunk.push(array[index]);
      }
      result.push(chunk);
      i += chunkSize;
    }
  
    return result;
  };
  const groupedInfo = chunkArray(fullInfo, screenWidth>834 ? 3:screenWidth>578 ? 2 :1); 
  const handleNext = () => {
    document.querySelector(".carousel-control-next").click();
    // setIndex(index === 3 ? 0 : index + 1);
  };

  const handlePrev = () => {
    // console.log("clicked");
    document.querySelector(".carousel-control-prev").click();

    // setIndex(index === 0 ? 3 : index - 1);
  };
  return (
    <div className="space-y-4 sm:space-y-8 h-[70svh] text-white ">
      <div className="text-xl md:text-3xl lg:text-4xl font-bold">
        Meet Our Team
      </div>
      <div>
        <Card info={info}/>
      </div>
      <div className="text-xl md:text-3xl lg:text-4xl font-bold">
        More Team Members
      </div>
      <div className="flex justify-between items-center relative">
        <div onClick={handlePrev} className=" z-20 cursor-pointer text-2xl sm:text-4xl ">
          {/* <img
            src={back}
            alt="prev"
            className="min-w-6 w-6 md:min-w-8 md:w-8 lg:min-w-10 lg:w-10 rotate-180  opacity-50 "
          /> */}
          <IoChevronBack/>
        </div>
        
        <Carousel
          wrap={true}
          touch={true}
          interval={null}
          indicators={false}
          className="grow mx-auto  "
     
        >
          {groupedInfo.map((group, i) => (
        <CarouselItem key={i}>
          <div className="flex justify-around"> {/* Flex container for 3 cards */}
            {group.map((info, j) => (
              <Card2 key={j} info={info} setClicked={setClicked} />
            ))}
          </div>
        </CarouselItem>
      ))}
        </Carousel>
        <div onClick={handleNext} className=" z-20 cursor-pointer text-2xl sm:text-4xl rotate-180  relative ">
        <IoChevronBack/>
          
        </div>
      </div>
    </div>
  );
};

const Card = ({ info }) => {
  // console.log(info);

  const { name, designation, description, linkedIn, photo } = info;
  return (
    <div className="w-full flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-between items-start lg:items-end mx-auto">
    <div  className="text-lg lg:basis-1/2 description  lg:overflow-y-scroll lg:max-h-[310px] ">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    <div className="flex flex-col gap-4 lg:basis-1/2  ">
      <div  className="mx-auto animate-start images">
        <img src={photo} className="w-[250px]  object-cover  " alt="" />
      </div>
      <div className="space-y-2">
        <div className="text-xl md:text-3xl lg:text-4xl text-center">{name}</div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-center uppercase gap-2 flex items-center justify-center">
          <span className=" p-1 text-white text-base sm:text-xl">{designation}</span>
          <span className="bg-white p-1 hover:cursor-pointer">
            <a href={linkedIn} target="_blank">
              <img src={Linkedin} alt="LinkedIn" className="w-10" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
  
  );
};
const Card2= ({info , setClicked})=> {
  return (
    <div className='flex min-w-60   h-fit  flex-col items-center gap-4 hover:cursor-pointer'
    onClick={()=>setClicked(info)} >
      <div>
        <img src={info.photo} alt="" className='w-44' />
      </div>
      <div className='space-y-2 text-center'>
        <h1 className='text-xl font-semibold'>{info?.name}</h1>
        <h2 className='text-gray-300'>{info?.designation}</h2>
      </div>
    </div>
  )
}

export default MeetTeam;
