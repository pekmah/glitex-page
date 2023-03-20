import React from "react";

const About = () => {
  return (
    <div
      className={
        "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
      }
    >
      <h3 className="lg:text-4xl sm:text-2xl text-xl font-bold w-[95%] lg:w-[90%] leading-8 md:leading-10 lg:leading-[50px]">
        Elearning student portal | E learning system in Kenya | E-learning
        platform in Kenya
      </h3>

      <p className="md:my-6 lg:text-xl sm:text-lg w-[94%] lg:w-2/3 leading-8 lg:leading-9">
        Glitex Solutions Limited is a company that specializes in creating and
        delivering technology-based educational solutions. Their offerings
        include custom e-learning, multi-device and mobile learning, platforms,
        and consulting for designing interactive e-learning curriculum.We have
        developed our own e-learning platform, which is available for use in
        Kenya and worldwide. The platform is designed to meet the increasing
        need for online digital education solutions in a constantly changing
        world. The platform is now available for primary and secondary level
        teachers and students to access and learn online.
      </p>
    </div>
  );
};

export default About;
