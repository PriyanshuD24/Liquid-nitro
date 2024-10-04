import CustomCard from "../../components/customCard";

const Idle_CD = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene}>
      <CustomCard setScene={setScene}>
        <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
          <h2 className="text-2xl xl:text-5xl mb-10 text-white">Co-Production</h2>

          <h3 className="text-xl text-white font-medium mb-5">
            Dedicated cross functional pods tallored for your game needs
          </h3>
          <div className="text-sm xl:text-lg text-white font-light space-y-5 px-5">
            <p>
              Extend your game team - We will mirror your game team's DNA and deep understanding of the game Harness
              India Talent Value proposition - tag team to optimise production costs
            </p>
            <p>
              Flexible Scaling-Tweak your team size based on need, market performance and opportunities Leverage our
              expertise - in data driven live services and game production.
            </p>
          </div>

          <h3 className="text-xl text-white font-medium mb-5 mt-10">Tag Team with us | Do more or Optimize P&L!</h3>
          <div className="text-sm xl:text-lg text-white font-light space-y-5 px-5">
            <p>
              Co-op for every production type - Prototyping, New game production, Mature Live Services - we've built
              passionate team augments for more than a decade.
            </p>
            <p>
              Fast, Efficient, Predictable - We have years of experience perfecting our processes to ensure seamless
              collaboration across disciplines, pods, time zones and more!
            </p>
            <p>
              We are not a staff augmentation solution. We deeply care about the game, the players and operate as a
              "specialized product team or pod.
            </p>
          </div>

          <h3 className="text-xl text-white font-medium mb-5 mt-10">Examples of what we've done</h3>
          <div className="text-sm xl:text-lg text-white font-light space-y-5 px-5">
            <p>
              Built co-development teams to work on different types of engagements - new game productions and games in
              live services Built co-development pods for a new shooter game, multiple iterations of a tower defence
              game, a sports clash game Co-development teams as extensions of existing live services teams for multiple
              Simulation & Casual games, sim games, sports games etc.
            </p>
            <p>
              Contributed to new features, content release cycles, sequel launches, prototyping and new game launches
              across Genres.
            </p>
          </div>
        </div>
      </CustomCard>
    </CustomCard>
  );
};

export default Idle_CD;
