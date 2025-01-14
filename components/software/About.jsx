import React from "react";
import SectionWrapper from "../general/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-yellow -mt-4 md:-mt-12 md:min-h-90"}
      className={"py-20 md:py-36 px-5 md:px-0 text-center"}
    >
      <h1 className={"h2 leading-8 md:leading-11"}>
        Tech company in Nairobi, kenya
      </h1>

      {/*    desc   */}
      <p
        className={
          "w-full md:w-3/5 mx-auto my-2 md:my-5 text-base text-primary text-left md:text-center"
        }
      >
        Are you in search of the top software development company in Kenya and
        beyond? Your search ends here. Glitex Solutions Limited is the pinnacle
        of innovation, excellence, and client satisfaction. Based in Nairobi, we
        are at the forefront of technology, providing state-of-the-art software
        development services that elevate businesses to new levels of success.
        We build lasting relationships with our clients by offering exceptional
        customer support and truly understanding your needs. We are among the
        leading software development companies in Kenya. Contact us today.
        <br />
        <br />
      </p>
    </SectionWrapper>
  );
};

export default About;
