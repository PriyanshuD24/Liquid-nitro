import React, { useState } from 'react';
import CustomNewCard from '../components/CustomNewCard';
import { back, music } from '../assets/icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Members = ({ setScene, idx }) => {
    const info = [
        {
            name: "Sandeep Kowdley",
            description: "24+ years of experience in the games industry. Founded India's leading early games company and was the Studio Director for Electronic Arts India for over a decade. ",
            designation: "CEO",
            image: "",
        },
        {
            name: "Krishna Dhanekula",
            description: "Operations Leader with 18+ years of expertise in financial strategy, operational controls and resource management. In his previous role, as Director of Operations, he managed multi-million dollar budgets and was responsible for driving financial rigor and profitability. ",
            designation: "CFO",
            image: "",
        },
        {
            name: "Arun Kunchala",
            description: "20 years experience in the Games Industry and was the creative + product leader for EA's India studio for over 17 years. He led several game transitions and end to end live services for some of EA's biggest mobile games during his time. ",
            designation: "CPO",
            image: "",
        },
        {
            name: "Suresh Manthena",
            description: "Seasoned leader with 17+ years in the industry and spent over a decade at EA collaborating with executives and studios across the globe - spearheading ops for game transitions, assembling teams for diverse Mobile freemium games. ",
            designation: "COO",
            image: "",
        },
    ];

    const [index, setIndex] = useState(idx);

    const handleNext = () => {
        setIndex(index === 3 ? 0 : index + 1);
    };

    const handlePrev = () => {
        setIndex(index === 0 ? 3 : index - 1);
    };

    return (
        <CustomNewCard setScene={setScene}>
            <div className="flex items-center justify-center w-full grow ">
                {/* Custom Prev Button */}
                <div onClick={handlePrev} className=" cursor-pointer">
                    <img src={back} alt="prev" className="w-10 md:w-16 lg:w-20 " />
                </div>

                <div className="w-full max-w-6xl mx-4 z-20">
                    {/* Carousel */}
                    <Carousel
                        showArrows={false}
                        infiniteLoop={true}
                        transitionTime={800}
                        showStatus={false}
                        selectedItem={index}
                        className=""
                    >
                        <Content index={0} info={info} />
                        <Content index={1} info={info} />
                        <Content index={2} info={info} />
                        <Content index={3} info={info} />
                    </Carousel>
                </div>

                {/* Custom Next Button */}
                <div onClick={handleNext} className="z-20 cursor-pointer">
                    <img src={back} alt="next" className="w-10 md:w-16 lg:w-20 rotate-180" />
                </div>
            </div>
        </CustomNewCard>
    );
};

const Content = ({ index, info }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full ">
            <div className="flex flex-col justify-center gap-8 w-full md:w-1/2 pl-4 md:pl-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-left">
                    {info[index]?.designation}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-left">
                    {info[index]?.description}
                </p>
                <div className="flex gap-2 items-center">
                    <p className="text-lg md:text-xl lg:text-2xl">Video</p>
                    <img src={music} alt="icon" className="max-w-8" />
                    <img src={music} alt="icon" className="max-w-8" />
                </div>
            </div>

            <div className="flex flex-col items-center mx-auto space-y-6 ">
                <img
                    src="https://picsum.photos/400"
                    alt="profile"
                    className="rounded-xl max-w-xs md:max-w-md  "
                />
                <div className="space-y-2">
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
