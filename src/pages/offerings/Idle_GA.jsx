import CustomCard from "../../components/customCard";

const Idle_GA = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene}>
      <div className="h-[70svh] overflow-y-auto theme-scroll pb-10 z-10 relative">
        <h2 className="text-2xl xl:text-5xl mb-10 text-white">Geo Adaptation</h2>

        <h3 className="text-xl text-white font-medium mb-5">
          Culturalized features & content, Economy, targeted Live Services
        </h3>
        <div className="text-sm xl:text-lg text-white font-light space-y-5">
          <p>
            Unlock new market opportunities by geo adapting player experiences to drive material KPI impact Indian
            Subcontinent-700+ Million mobile gamers, $3 Billion revenue in 2023
          </p>
          <p>We help you expand TAM</p>
          <p>
            Deep understanding of Indian subcontinent - player preferences, needs/wants/desires 360 degrees adaptation -
            feature & economy, design changes, geo targeted marketing, community and promotions
          </p>
          <p>
            Geo Adapted Live Services - Technology, events, local partners and systems targeted to drive engagement and
            monetization
          </p>
          <p>
            Collaborative Partners-proven track record of co-development on large games ensuring seamless integration
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
