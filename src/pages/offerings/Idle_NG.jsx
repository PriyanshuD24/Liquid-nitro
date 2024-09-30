import React from "react";
import CustomNewCard from "../../components/CustomNewCard";

const Idle_NG = ({ setScene }) => {
  return (
    <CustomNewCard setScene={setScene}>
      {/* <div className="grow space-y-8 max-w-[1200px] mx-auto px-2 flex flex-col justify-center  overflow-y-scroll z-20"> */}
<div className="grow space-y-8 max-w-[1200px] mx-auto px-2 flex flex-col md:pt-10 z-20 overflow-y-scroll"> 

        <h1 className="text-3xl sm:text-5xl lg:text-5xl capitalize z-20">LMTs & New Games</h1>
        <div className="text-lg sm:text-xl  space-y-4 sm:space-y-8 max-h-fit ">

        <p className="w-fit">
          Successfully Launch New Games
          <br />
          Create | Iterate | Test | Produce
        </p>
        <p className="w-fit">
          Produced several prototypes and LAMTS in different genres casual
          strategy, sports & core
        </p>
        <p className="w-fit">
          Innovate & Test - Transform ideas/IPs into procotypes & limited market
          tests<br/> New Launches - Convert proven LMTs into AAA Games.<br/> Liquidnitro Platform - 
          Leverage cost and production efficiencies at scale
        </p>
        <p className="w-fit">
        Examples of what we've done

Conceptualized and fully produced a game mode for a Battle Royale FPS (a $1 billion IP)

Worked on LMTs for a sequel to one of mobile's biggest tower defense casual game IPs

Built several Match 3 LMTs combining core M3 gameplay with story/decorative meta

Reimagined a core sports game for arcade/clash audience with sync multiplayer gameplay</p>
<p className="w-fit">

Partner to test and launch new games <br />

Rapid Prototyping Experts - Proven ability to quickly brainstorm, build and test prototypes across various genres (Casual, Sports, Strategy. Core etc) <br />

Full Cycle Development-Seamlessly transform market tested prototypes into AAA quality productions. <br />

Collaborative and Agile - Flexible co-development models to integrate into your existing teams and workflows 
        </p>
        </div>
      </div>
    </CustomNewCard>
  );
};

export default Idle_NG;

/*

*/
