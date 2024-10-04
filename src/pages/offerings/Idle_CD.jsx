import CustomCard from "../../components/customCard";

const Idle_CD = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene} className={""}>
      {/* <CustomCard setScene={setScene}> */}
        <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
          <h2 className="text-2xl xl:text-5xl mb-4 sm:mb-10 text-white text-center sm:text-left font-bold sm:font-semibold">Co-Production</h2>

          <h3 className=" sm:text-xl text-white font-semibold sm:font-medium mb-4 sm:mb-5">
            Dedicated cross functional pods tallored for your game needs
          </h3>
          <div className="text-sm xl:text-lg text-white font-light space-y-2 sm:space-y-5 pl-3 sm:pl-5">
            <p>
            <span className="font-semibold sm:font-medium">  Extend your game team </span> - We will mirror your game team's DNA and deep understanding of the game Harness
              India Talent Value proposition - tag team to optimise production costs
            </p>
            <p>
             <span className="font-semibold sm:font-medium"> Flexible Scaling </span>-Tweak your team size based on need, market performance and opportunities Leverage our
              expertise - in data driven live services and game production.
            </p>
          </div>

          <h3 className="sm:text-xl text-white font-semibold sm:font-medium mb-4 sm:mb-5 mt-4 sm:mt-10">Tag Team with us | Do more or Optimize P&L!</h3>
          <div className="text-sm xl:text-lg text-white font-light space-y-2 sm:space-y-5  sm:pl-5">
            <p>
             <span className="font-semibold sm:font-normal"> Co-op for every production type</span> - Prototyping, New game production, Mature Live Services - we've built
              passionate team augments for more than a decade.
            </p>
            <p>
             <span className="font-semibold sm:font-normal"> Fast, Efficient, Predictable </span>- We have years of experience perfecting our processes to ensure seamless
              collaboration across disciplines, pods, time zones and more!
            </p>
            <p className="font-semibold sm:font-normal">
              We are not a staff augmentation solution. We deeply care about the game, the players and operate as a
              "specialized product team or pod.
            </p>
          </div>

          <h3 className="text-xl text-white font-medium mb-5 mt-10 hidden sm:block">Examples of what we've done</h3>
          <div className="text-sm xl:text-lg text-white font-light space-y-2 sm:space-y-5  sm:px-4 mt-4 sm:mt-0">
            <div className="space-y-2" >
           <p className="font-semibold sm:font-normal ">   Built co-development teams to work on different types of engagements </p> 
           <p>New game productions and games in
              live services </p>
              <p>Built co-development pods for a new shooter game, multiple iterations of a tower defence
              game</p> <p> Co-development teams as extensions of existing live services teams for multiple
              Simulation & Casual games, sim games, sports games etc.</p>
            </div >
            <p>
              Contributed to new features, content release cycles, sequel launches, prototyping and new game launches
              across Genres.
            </p>
          </div>
        </div>
      {/* </CustomCard> */}
    </CustomCard>
  );
};

export default Idle_CD;
