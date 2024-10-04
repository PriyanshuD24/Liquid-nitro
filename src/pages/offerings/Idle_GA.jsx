import CustomCard from "../../components/customCard";

const Idle_GA = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene}>
      <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
        <h2 className="text-2xl xl:text-5xl mb-4 sm:mb-10 text-white text-center sm:text-left font-bold sm:font-normal">Geo Adaptation</h2>

        <h3 className="sm:text-xl text-white sm:font-medium mb-3 sm:mb-5 font-semibold ">
          Culturalized features & content, Economy, targeted Live Services
        </h3>
        <div className="sm:text-sm xl:text-lg text-white font-light space-y-3 sm:space-y-5">
          <p>
            Unlock new market opportunities by geo adapting player experiences to drive material KPI impact Indian
            Subcontinent-700+ Million mobile gamers, $3 Billion revenue in 2023
          </p>
          <p className="font-semibold sm:font-normal">We help you expand TAM</p>
          <p>
          <span className="font-semibold sm:font-normal">  Deep understanding of Indian subcontinent  </span> - player preferences, needs/wants/desires 360 degrees adaptation -
            feature & economy, design changes, geo targeted marketing, community and promotions
          </p>
          <p>
          <span className="font-semibold sm:font-normal">  Geo Adapted Live Services  </span> - Technology, events, local partners and systems targeted to drive engagement and
            monetization
          </p>
          <p>
           <span className="font-semibold sm:font-normal"> Collaborative Partners </span> -proven track record of co-development on large games ensuring seamless integration
            into your teams/processes.
          </p>
          <p className="font-semibold">
            Geo adapted live services (India) on one of the world's biggest sports games lead to 10x DAU and SX Revenue
          </p>
        </div>
      </div>
    </CustomCard>
  );
};

export default Idle_GA;
