import CustomCard from "../../components/customCard";

const Idle_LG = ({ setScene }) => {
  return (
    <CustomCard setScene={setScene}>
      <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
        <h2 className="text-2xl xl:text-5xl  mb-4 sm:mb-10 text-white text-center sm:text-left font-bold sm:font-normal ">
          {" "}
          End-to-End Live Services
        </h2>

        <h3 className="text-xl text-white font-semibold sm:font-medium mb-3 sm:mb-5">
          New features & content, quality of life improvements - driving growth
          of AERM metrics
        </h3>
        <div className="text-sm xl:text-lg text-white font-light sm:space-y-5 pl-3 sm:px-5">
          <p>
            Experience across genres
            <br />
            20+ AAA F2P games transitioned
            <br />
            Managed end to end P&L +<br />
            production Licensor management <br />
          </p>
        </div>
        <h3 className="text-xl text-white font-semibold sm:font-medium mb-3 sm:mb-5 sm:mt-10 mt-4">
          We partner to drive growth and profitability
        </h3>
        <div className="text-sm xl:text-lg text-white font-light space-y-5 px-3 sm:px-5">
          <p>
            Team Chemistry: cross functional teams with a deep understanding of
            Players, motivations and the game/brand Data driven insights, player
            inspired decisions: translate to high impact feature and content
            investments Technology investments to speed up live services and
            operations - automated liveops, personalized player journeys etc.
            Processes to drive efficiency, predictability and quality
          </p>
          <p className="font-semibold sm:font-normal">
            Transition Live F2P Games to Liquidnitro
            <br />
            Boost profitability and invest for growth <br />
            Grow KPIs and long tail revenues <br />
            Free up existing teams
            <br />
          </p>
        </div>
        <h3 className="sm:text-xl text-white font-semibold sm:font-medium sm:mb-5 sm:mt-10 mb-3 mt-4">
          Examples of what we've done
        </h3>
        <div className="text-sm xl:text-lg text-white font-light sm:space-y-5 sm:px-5 pl-3 space-y-3 " >
          <p>
            Clocked over $280M on a Match-3 game post transition.
            <br />
            <br />
            Managed big franchises with multiple games in simulation and puzzle
            category which involved end to end licensor and portfolio
            management, turning low/negative OC games into profitable titles{" "}
            <br />
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
