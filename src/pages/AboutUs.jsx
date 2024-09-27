import CustomCard from "../components/customCard";
import CustomNewCard from "../components/CustomNewCard";

const AboutUs = ({ setScene, style }) => {
  return (
    <CustomNewCard setScene={setScene}>
        <div className="flex flex-col justify-center items-center md:items-start grow w-full md:max-w-[80%] gap-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl capitalize z-20 w-fit ">Company history</h1>
          <p className="text-lg sm:text-xl lg:text-3xl z-20 w-fit text-center md:text-left ">
          We believe in nurturing excellence. That means equipping our team with cutting-edge projects and the finest tools. But more importantly, it means fostering an environment of freedom and support. This empowers them to unleash their full potential and create works that leave a lasting impact.
          </p>
        </div>
    </CustomNewCard>
  );
};

export default AboutUs;
