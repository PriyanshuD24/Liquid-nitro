import CustomCard from "../../components/customCard";

const Idle_LG = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene}>
      <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
        <h2 className="text-2xl xl:text-5xl mb-10 text-white">
          {" "}
          End-to-End Live Services
        </h2>

        <h3 className="text-xl text-white font-medium mb-5">
          New features & content, quality of life improvements - driving growth
          of AERM metrics
        </h3>
        <div className="text-sm xl:text-lg text-white font-light space-y-5 px-5">
          <p>
            Experience across genres
            <br />
            20+ AAA F2P games transitioned
            <br />
            Managed end to end P&L +<br />
            production Licensor management <br />
          </p>
        </div>
        <h3 className="text-xl text-white font-medium mb-5 mt-10">
          We partner to drive growth and profitability
        </h3>
        <div className="text-sm xl:text-lg text-white font-light space-y-5 px-5">
          <p>
            Team Chemistry: cross functional teams with a deep understanding of
            Players, motivations and the game/brand Data driven insights, player
            inspired decisions: translate to high impact feature and content
            investments Technology investments to speed up live services and
            operations - automated liveops, personalized player journeys etc.
            Processes to drive efficiency, predictability and quality
          </p>
          <p>
            Transition Live F2P Games to Liquidnitro
            <br />
            Boost profitability and invest for growth <br />
            Grow KPIs and long tail revenues <br />
            Free up existing teams
            <br />
          </p>
        </div>
        <h3 className="text-xl text-white font-medium mb-5 mt-10">
          Examples of what we've done
        </h3>
        <div className="text-sm xl:text-lg text-white font-light space-y-5 px-5">
          <p>
            Clocked over $280M on a Match-3 game post transition.
            <br />
            Managed big franchises with multiple games in simulation and puzzle
            category which involved end to end licensor and portfolio
            management, turning low/negative OC games into profitable titles{" "}
            <br />
            Generated over $120M ARR by running a portfolio of games -
            Casual/Puzzle, Strategy, CCG, Sports, Simulation among others.
          </p>
        </div>
      </div>
    </CustomCard>
  );
};

export default Idle_LG;
