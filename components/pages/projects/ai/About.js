import React from "react";

const About = () => {
  return (
    <div
      className={
        "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
      }
    >
      <h1 className="lg:text-4xl sm:text-2xl text-xl font-bold w-[95%] lg:w-[90%] leading-8 md:leading-10 lg:leading-[50px]">
        Ai Companies in Kenya
      </h1>

      <p className="md:my-6 lg:text-xl sm:text-lg w-[95%] lg:w-2/3 leading-8 lg:leading-9">
        Glitex Solutions Limited is an AI and ML (Artificial Intelligence &
        Machine learning) Software development company based in Nairobi Kenya.
        We have a skilled team that focuses on delivering quality.
      </p>
    </div>
  );
};

export default About;
