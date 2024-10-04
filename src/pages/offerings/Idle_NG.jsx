import CustomCard from "../../components/customCard";

const Idle_NG = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene}>
      <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
        <h2 className="text-2xl xl:text-5xl mb-10 text-white">
          LMTs & New Games
        </h2>

        <h3 className="text-xl text-white font-medium mb-5">
          Successfully Launch New Games
          <br /> Create | Iterate | Test | Produce
        </h3>
        <div className="text-sm xl:text-lg text-white font-light space-y-5">
          <p>
            Produced several prototypes and LMTs in different genres - casual,
            strategy, sports & core
            <br />
            <br />
            Innovate & Test - Transform ideas/IPs into prototypes & limited
            market tests
            <br />
            New Launches - Convert proven LMTs into AAA games
            <br />
            Liquidnitro Platform - Leverage cost and production efficiencies at
            scale
            <br />
          </p>
        </div>

        <div className="text-sm xl:text-lg text-white font-light space-y-5 mt-10">
          <p>
            Examples of what we've done
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
            Partner to test and launch new games
            <br />
            Rapid Prototyping Experts - Proven ability to quickly brainstorm,
            build and test prototypes across various genres (Casual, Sports,
            Strategy, Core etc)
            <br />
            Full Cycle Development - Seamlessly transform market tested
            prototypes into AAA quality productions
            <br />
            Collaborative and Agile - Flexible co-development models to
            integrate into your existing teams and workflows
          </p>
        </div>
      </div>
    </CustomCard>
  );
};

export default Idle_NG;
