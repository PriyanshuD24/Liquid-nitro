import React, { useState } from 'react';
import CustomNewCard from '../components/CustomNewCard';
import { back, music } from '../assets/icons';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ceo, cfo, coo, cpo } from '../assets/founders';


// import "react-responsive-carousel/lib/styles/carousel.min.css";

const Members = ({ setScene, idx }) => {
    const info = [
        {
            name: "Sandeep Kowdley",
            description: "24+ years of experience in the games industry. Founded India's leading early games company and was the Studio Director for Electronic Arts India for over a decade. ",
            designation: "CEO",
            image: ceo,
        },
        {
            name: "Krishna Dhanekula",
            description: "Operations Leader with 18+ years of expertise in financial strategy, operational controls and resource management. In his previous role, as Director of Operations, he managed multi-million dollar budgets and was responsible for driving financial rigor and profitability. ",
            designation: "CFO",
            image: cfo,
        },
        {
            name: "Arun Kunchala",
            description: "20 years experience in the Games Industry and was the creative + product leader for EA's India studio for over 17 years. He led several game transitions and end to end live services for some of EA's biggest mobile games during his time. ",
            designation: "CPO",
            image: cpo,
        },
        {
            name: "Suresh Manthena",
            description: "Seasoned leader with 17+ years in the industry and spent over a decade at EA collaborating with executives and studios across the globe - spearheading ops for game transitions, assembling teams for diverse Mobile freemium games. ",
            designation: "COO",
            image: coo,
        },
    ];

    const [index, setIndex] = useState(idx);

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
            <div className="flex items-center justify-center w-full grow   ">
                {/* Custom Prev Button */}
                <div onClick={handlePrev} className=" z-20 cursor-pointer">
                    <img src={back} alt="prev" className="min-w-6 md:min-w-16 lg:min-w-20 " />
                </div>

                <div className="  ">
                    {/* Carousel */}
                    <Carousel className='carasol' interval={null} 
                    // find real way
                    onSlide={()=>{
                        document.querySelector(".carasol").classList.add("z-20");

                    }}
                    onSlid={()=>{
                        setTimeout(()=>{

                            document.querySelector(".carasol").classList.remove("z-20");
                        },100)

                    }} >
                        <Carousel.Item className='carasol'>
                        <Content index={0} info={info} />

                        </Carousel.Item>
                        <Carousel.Item className='carasol'>
                        <Content index={1} info={info} />

                        </Carousel.Item>
                        <Carousel.Item className='carasol'>
                        <Content index={2} info={info} />

                        </Carousel.Item>
                        <Carousel.Item className='carasol'>
                        <Content index={3} info={info} />

                        </Carousel.Item>

                    </Carousel>
                    {/* <Carousel
                        showArrows={false}
                        infiniteLoop={true}
                        transitionTime={800}
                        showStatus={false}
                        selectedItem={index}
                        className="w-auto"
                    >
                        <Content index={0} info={info} />
                        <Content index={1} info={info} />
                        <Content index={2} info={info} />
                        <Content index={3} info={info} />
                    </Carousel> */}
                </div>

                {/* Custom Next Button */}
                <div onClick={handleNext} className="z-20 cursor-pointer">
                    <img src={back} alt="next" className="min-w-6 md:min-w-16 lg:min-w-20 rotate-180" />
                </div>
            </div>
        </CustomNewCard>
    );
};

const Content = ({ index, info }) => {
    return (
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between   w-full ">
            <div className="flex flex-col justify-center gap-4 sm:gap-8 w-full md:basis-1/2  mx-auto md:mx-0">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-left hidden md:block ">
                    {info[index]?.designation}
                </h1>
                <p className="  min-h-32 sm:min-h-[auto] text-sm  sm:text-lg md:text-xl lg:text-2xl text-left ">
                    {info[index]?.description}
                </p>
                <div className="flex gap-2 items-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl ">Video</p>
                    <img src={music} alt="icon" className="max-w-8 " />
                    <img src={music} alt="icon" className="max-w-8 " />
                </div>
            </div>

            <div className="flex flex-col  space-y-6 mx-auto md:mx-0   ">
                {/* <div className='bg-black rounded-xl overflow-hidden z-20'> */}

                <img
                    src={info[index]?.image}
                    alt="profile"
                    className=" max-w-[300px] md:max-w-[320px] h-[300px] object-cover rounded-xl  z-20 "
                    />
                    {/* </div> */}
                <div className="sm:space-y-2 mb-4 sm:mb-0">
                    <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold">
                        {info[index]?.name}
                    </h2>
                    <p className="text-center text-lg md:text-xl lg:text-2xl">
                        {info[index]?.designation}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Members;
