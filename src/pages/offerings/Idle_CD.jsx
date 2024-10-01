import React from "react";
import CustomNewCard from "../../components/CustomNewCard";

const Idle_CD = ({ setScene }) => {
  return (
    <CustomNewCard setScene={setScene}>
      {/* <div className="grow space-y-8 max-w-[1200px] mx-auto z-20 overflow-y-scroll "> */}
<div className="grow space-y-8 max-w-[1200px] mx-auto px-2 flex flex-col md:pt-10 z-20 "> 

        <h1 className="text-3xl sm:text-5xl lg:text-5xl capitalize ">Co-Production</h1>
        <div className="space-y-4 sm:space-y-8">
          <Content
            heading={
              "Dedicated cross functional pods tallored for your game needs"
            }
          >
            <p>
              <span className="font-bold"> Extend your game team </span> - We will mirror your game team's DNA and
              deep understanding of the game 
              </p>
              <p><span className="font-bold">  Harness India Talent Value
              proposition </span> - tag team to optimise production costs
            </p>
            <p>
              <span className="font-bold"> Flexible Scaling </span>-Tweak your team size based on need, market
              performance and opportunities
              </p>
              <p><span className="font-bold">  Leverage our expertise </span> - in data
              driven live services and game production.
            </p>
          </Content>
          <Content heading={"Tag Team with us | Do more or Optimize P&L!"}>
            <p>
           <span className="font-bold">   Co-op for every production type</span> - Prototyping, New game production, Mature Live Services - we've built passionate team augments for more than a decade.
            </p>
            <p>
            <span className="font-bold">    Fast, Efficient, Predictable </span>- We have years of experience
              perfecting our processes to ensure seamless collaboration across
              disciplines, pods, time zones and more!
            </p>
            <p className="font-bold mt-3">
              We are not a staff augmentation solution. We deeply care about the
              game, the players and operate as a specialized product team or
              pod.
            </p>
            </Content>

            <Content heading={"Examples of what we've done"}>
              <p>
          <span className="font-bold">       Built co-development teams to work on different types of
                engagements</span> - new game productions and games in live services
                Built co-development pods for a new shooter game, multiple
                iterations of a tower defence game, a sports clash game
                Co-development teams as extensions of existing live services
                teams for multiple Simulation & Casual games, sim games, sports
                games etc.
              </p>
              <p className="mt-4">
                {" "}
                Contributed to new features, content release cycles, sequel
                launches, prototyping and new game launches across Genres.
              </p>
          </Content>
        </div>
      </div>
    </CustomNewCard>
  );
};

export default Idle_CD;

const Content = ({ heading, children }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{heading}</h2>
      <p className="text-base sm:text-lg lg:text-xl px-2">{children}</p>
    </div>
  );
};
