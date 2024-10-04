import React from "react";
import CustomCard from "../components/customCard";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AudioIcon from "../assets/icons/Audio.svg?react";
import ShareIcon from "../assets/icons/Share.svg?react";
import ArrowIcon from "../assets/icons/Arrow SVG.svg?react";

import ArunPng from "../assets/imgs/Arunpng.png";
import KrishnaPng from "../assets/imgs/Krishnapng.png";
import SandeepPng from "../assets/imgs/Sandeeppng.png";
import SureshPng from "../assets/imgs/Sureshpng.png";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const TeamMember = ({ setScene ,width, idx}) => {
  var settings = {
    infinite: true,
    arrow: false,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
  };

  const info = [
    {
      name: "Sandeep Kowdley",
      title: "Founder",
      description:
        "24+ years of experience in the games industry. Founded India's leading early games company and was the Studio Director for Electronic Arts India for over a decade. ",
      designation: "CEO",
      image: SandeepPng,
      linkedIn : "https://www.linkedin.com/in/sandeepkowdley/"
    },
    {
      name: "Krishna Dhanekula",
      title: "Founder",
      description:
        "Operations Leader with 18+ years of expertise in financial strategy, operational controls and resource management. In his previous role, as Director of Operations, he managed multi-million dollar budgets and was responsible for driving financial rigor and profitability. ",
      designation: "CFO",
      image: KrishnaPng,
      linkedIn: "https://www.linkedin.com/in/krishna-phani-dhanekula-06436128/"
    },
    {
      name: "Arun Kunchala",
      title: "Founder",
      description:
        "20 years experience in the Games Industry and was the creative + product leader for EA's India studio for over 17 years. He led several game transitions and end to end live services for some of EA's biggest mobile games during his time. ",
      designation: "CPO",
      image: ArunPng,
      linkedIn: "https://www.linkedin.com/in/arun-kunchala/"
    },
    {
      name: "Suresh Manthena",
      title: "Founder",
      description:
        "Seasoned leader with 17+ years in the industry and spent over a decade at EA collaborating with executives and studios across the globe - spearheading ops for game transitions, assembling teams for diverse Mobile freemium games. ",
      designation: "COO",
      image: SureshPng,
      linkedIn : "https://www.linkedin.com/in/sk-manthena/"
    },
  ];

  return (
    <CustomCard setScene={setScene}>
    {width>640 ? <Slider {...settings}>
        {info.map((item, idx) => (
          <div
            key={idx}
            className="!flex flex-wrap text-white justify-center items-center"
          >
            <h2 className="text-3xl font-medium xl:text-7xl lg:hidden block w-full mb-3 text-center">
              {item.title}
            </h2>
            <div className="lg:order-1 order-2 lg:w-1/2 lg:max-w-full w-full max-w-[400px] lg:mt-0 mt-3">
              <h2 className="text-4xl xl:text-7xl mb-5 lg:block hidden">
                {item.title}
              </h2>
              <p className="text-sm xl:text-lg font-light">
                {item.description}
              </p>
              <div className="flex gap-5 items-center mt-3 italic w-full lg:justify-start justify-end">
                Video
                <div className="flex gap-2">
                  <AudioIcon className="[&_path]:fill-white size-10" />
                  <ShareIcon className="[&_path]:fill-white size-10" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-white lg:order-2 order-1 lg:w-1/2 w-full">
              <img
                className="lg:max-w-[300px] max-w-[200px] w-full backdrop-blur-sm bg-white/10 rounded-xl"
                src={item.image}
              />
              <h2 className="text-3xl lg:mt-3 mt-5">{item.name}</h2>
              <p className="font-lg mt-2">{item.designation}</p>
            </div>
          </div>
        ))}
      </Slider>
      :(
        <div className="space-y-4">
          <div className=" flex gap-2">
          <div className="rounded-xl overflow-hidden" >
            <img src={info[idx]?.image} alt="profile-logo" className="w-20 " />
          </div>
          <div className="space-y-2 pt-2">
            <h2 className="text-xl font-bold text-nowrap">{info[idx]?.name}</h2>
            <div className="space-x-2 flex gap-2 items-center">
            <span className="border-gray-400 border-[1px] rounded-lg  px-1 py-[2px] "> {info[idx]?.designation}</span>
           <span className="text-xl border-gray-400 border-[1px] rounded-lg  p-1 ">
           <a href={info[idx]?.linkedIn} target="_blank">   <FaLinkedinIn/> 
           </a></span>

            </div>
          </div>
          </div>
          <div>{info[idx]?.description}</div>
        </div>
      )
      }
    </CustomCard>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute lg:-left-20 left-0 top-1/2 -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <ArrowIcon className="[&_path]:fill-gray-500 lg:size-10 size-5 -rotate-180" />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute lg:-right-20 right-0 top-1/2 -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <ArrowIcon className="[&_path]:fill-gray-500 lg:size-10 size-5" />
    </div>
  );
};

export default TeamMember;
