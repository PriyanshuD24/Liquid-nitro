import CustomCard from "../components/customCard";

const AboutUs = ({ setScene, style }) => {
  return (
    <CustomCard setScene={setScene} className={"sm:z-0"}>
      <h2 className="text-2xl xl:text-7xl mb-4 sm:mb-10 text-white font-bold sm:font-normal text-center sm:text-left">Company History</h2>
      <p className="text-center sm:text-left xl:text-lg text-white font-light">
        We believe in nurturing excellence. That means equipping our team with cutting-edge projects and the finest
        tools. But more importantly, it means fostering an environment of freedom and support. This empowers them to
        unleash their full potential and create works that leave a lasting impact.
      </p>
    </CustomCard>
  );
};

export default AboutUs;

