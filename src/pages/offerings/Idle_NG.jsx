import React from "react";
import CustomNewCard from "../../components/CustomNewCard";

const Idle_NG = ({ setScene }) => {
  return (
    <CustomNewCard setScene={setScene}>
      {/* <div className="grow space-y-8 max-w-[1200px] mx-auto px-2 flex flex-col justify-center  overflow-y-scroll z-20"> */}
<div className=" space-y-8 max-w-[1200px] mx-auto px-2 flex flex-col md:pt-10 z-20 "> 

        <h1 className="text-3xl sm:text-5xl lg:text-5xl capitalize z-20">LMTs & New Games</h1>
        <div className="text-lg sm:text-xl  space-y-4 sm:space-y-8   ">

        <p className="w-fit font-bold">
          Successfully Launch New Games
          <br />
          Create | Iterate | Test | Produce
        </p>
        <p className="w-fit">
          Produced several prototypes and LAMTS in different genres casual
          strategy, sports & core
        </p>
        <p className="w-fit">
          <span className="font-bold"> Innovate & Test</span> - Transform ideas/IPs into procotypes & limited market
          tests<br/> <span className="font-bold"> New Launches </span>- Convert proven LMTs into AAA Games.<br/> <span className="font-bold"> Liquidnitro Platform </span> 
         - Leverage cost and production efficiencies at scale
        </p>
        <p className="w-fit">
  <span className="block font-bold sm:mb-2 md:mb-4">      Examples of what we've done</span>

Conceptualized and fully produced a game mode for a Battle Royale FPS (a $1 billion IP) <br />

Worked on LMTs for a sequel to one of mobile's biggest tower defense casual game IPs <br />

Built several Match 3 LMTs combining core M3 gameplay with story/decorative meta <br />

Reimagined a core sports game for arcade/clash audience with sync multiplayer gameplay</p>
<p className="w-fit">

<div className="font-bold"> Partner to test and launch new games </div><br />

<span className="font-bold"> Rapid Prototyping Experts</span> - Proven ability to quickly brainstorm, build and test prototypes across various genres (Casual, Sports, Strategy. Core etc) <br />

<span className="font-bold"> Full Cycle Development</span>-Seamlessly transform market tested prototypes into AAA quality productions. <br />

<span className="font-bold"> Collaborative and Agile</span> - Flexible co-development models to integrate into your existing teams and workflows 
        </p>
        </div>
      </div>
    </CustomNewCard>
  );
};

export default Idle_NG;

/*

*/
