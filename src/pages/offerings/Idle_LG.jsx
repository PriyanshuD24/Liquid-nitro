import React from "react";
import CustomNewCard from "../../components/CustomNewCard";

const Idle_LG = ({setScene}) => {
  return (
    <CustomNewCard setScene={setScene}>
      {/* <div className="grow space-y-8 max-w-[1200px] mx-auto z-20  "> */}
<div className="grow space-y-8 max-w-[1200px] mx-auto px-2 flex flex-col md:pt-10 z-20 "> 

        <h1 className="text-3xl sm:text-5xl lg:text-5xl capitalize">
          End-to-End Live Services
        </h1>
        <div className="text-base sm:text-lg lg:text-xl space-y-4 sm:space-y-8">
            <div className="space-y-2 ">

          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            New features & content, quality of life improvements - driving
            growth of AERM metrics
          </h2>
          <p className="px-4">
            <ul className="list-disc">
              <li> Experience across genres.</li>
              <li>20+ AAA F2P games transitioned.</li>
              <li>Managed end to end P&L + production.</li>
              <li>Licensor management.</li>
            </ul>
          
          </p>
            </div>
            <div className="space-y-2 ">

          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">We partner to drive growth and profitability</h2>
          <p className="px-2 ">
          
    Team Chemistry: cross functional teams with a deep understanding of Players, motivations and the game/brand <br />
    Data driven insights, player inspired decisions: translate to high impact feature and content investments <br />
    Technology investments to speed up live services and operations - automated liveops, personalized player journeys etc. <br />
    Processes to drive efficiency, predictability and quality
          </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Transition Live F2P Games to Liquidnitro <br />
Boost profitability and invest for growth <br />
Grow KPIs and long tail revenues <br />
Free up existing teams <br />
              </h2>
            </div>
            <div className="space-y-2 ">

          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Examples of what we've done</h2>
          <p className="px-2">
          Examples of what we’ve done <br />
    ~ Clocked over $280M on a Match-3 game post transition <br />
    ~ Managed big franchises with multiple games in simulation and puzzle category which involved end to end licensor and portfolio management, turning low/negative  OC games into profitable titles <br />
  ~ Generated over $120M ARR by running a portfolio of games -    Casual/Puzzle, Strategy, CCG, Sports, Simulation among others.
          </p>
            </div>
        </div>
      </div>
    </CustomNewCard>
  );
};

export default Idle_LG;
