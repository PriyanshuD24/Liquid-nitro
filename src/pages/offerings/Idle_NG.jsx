import CustomCard from "../../components/customCard";

const Idle_NG = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene}>
      <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
        <h2 className="text-2xl xl:text-5xl mb-4 sm:mb-10 text-white font-bold sm:font-normal text-center sm:text-center">
          LMTs & New Games
        </h2>

        <h3 className="text-xl text-white mb-4 sm:mb-5 font-semibold sm:font-medium">
          Successfully Launch New Games
          <br /> Create | Iterate | Test | Produce
        </h3>
        <div className="text-sm xl:text-lg text-white font-light space-y-5">
          <p>
            Produced several prototypes and LMTs in different genres - casual,
            strategy, sports & core
            <br />
            <br />
           

           <span className="font-semibold"> Innovate & Test</span> - Transform ideas/IPs into prototypes & limited
            market tests
            <br />
           <span className="font-semibold "> New Launches</span> - Convert proven LMTs into AAA games
            <br />
           <span className="font-semibold"> Liquidnitro Platform</span> - Leverage cost and production efficiencies at
            scale
            <br />
          
          </p>
        </div>

        <div className="text-sm xl:text-lg text-white font-light sm:space-y-5 mt-4 sm:mt-10">
          <p>
           <span className="font-semibold sm:font-normal"> Examples of what we've done</span>
            <br />
            Conceptualized and fully produced a game mode for a Battle Royale
            FPS (a $1 billion IP)
            <br />
            Worked on LMTs for a sequel to one of mobile's biggest tower defense
            casual game IPs
            <br />
            Built several Match 3 LMTs combining core M3 gameplay with
            story/decorative meta
            <br />
            Reimagined a core sports game for arcade/clash audience with sync
            multiplayer gameplay
            <br />
            <br />
          <div className="mt-3 font-semibold sm:font-normal">  Partner to test and launch new games</div>
            <br />
            <div className="space-y-2">
<div>

           <span className="font-semibold sm:font-normal"> Rapid Prototyping Experts</span> - Proven ability to quickly brainstorm,
            build and test prototypes across various genres (Casual, Sports,
            Strategy, Core etc)
</div>
            {/* <br /> */}
            <div>
              
           <span className="font-semibold sm:font-normal"> Full Cycle Development</span> - Seamlessly transform market tested
            prototypes into AAA quality productions
            </div>
            {/* <br /> */}
            <div>

           <span className="font-semibold sm:font-normal"> Collaborative and Agile</span> - Flexible co-development models to
            integrate into your existing teams and workflows
            </div>
            </div>
          </p>
        </div>
      </div>
    </CustomCard>
  );
};

export default Idle_NG;
