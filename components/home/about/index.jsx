import React from "react";
import { SectionWrapper } from "../../general";
import StatCard from "./StatCard";

const About = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-yellow -mt-4 md:-mt-12 min-h-60 md:min-h-90"}
      className={"py-20 md:py-36 px-5 md:px-0 text-center"}
    >
      <h1 className={"h2 leading-8 md:leading-11"}>
        Software development company in Kenya |{" "}
        <br className={"hidden md:flex"} /> Glitex Solutions Limited.
      </h1>

      {/*    desc   */}
      <p
        className={
          "w-full md:w-1/2 mx-auto leading-6 my-2 md:my-5 text-base text-primary text-left md:text-center"
        }
      >
        Glitex Solutions Limited is a tech-solutions company built by passionate
        individuals, dedicated to help our clients continuously create value for
        their customers.We believe in transforming ideas into reality through
        technology. Dedicating our lives to providing our clients with top-notch
        software solutions that serves their business needs right. You can count
        on us to convert your business use-case into an innovative software
        solution leveraging modern day tech stacks.
      </p>

      {/*  stats   */}
      <div className={"center gap-5 md:gap-10"}>
        <StatCard
          number={"100+"}
          subtext={"Projects Completed"}
          className={"bg-primary"}
        />
        <StatCard
          number={"200+"}
          subtext={"Happy Clients"}
          className={"bg-c-yellow"}
        />
      </div>
    </SectionWrapper>
  );
};

export default About;
