import React from "react";
import { SectionWrapper } from "../general";
import { LowCodeFloater } from "./index";

const HowItWorks = () => {
  return (
    <SectionWrapper
      sectionClassName={" relative"}
      className={"py-10 md:py-28 px-5 md:px-0"}
    >
      <h2
        className={"leading-8 md:leading-11 md:w-1/2 mx-auto mb-5 text-center"}
      >
        How it all works
      </h2>

      <p
        className={
          "w-full md:w-3/5 lg:w-1/2 mx-auto my-3 md:my-5 text-base text-primary text-left md:text-center"
        }
      >
        Low-code/No-code platforms present components that form an application
        so its a matter of selecting what you need and integrating them
      </p>

      {/*  Image  */}
      <div className={"my-12 md:my-32 center"}>
        <img
          src={"/images/low_code/how_it_works.png"}
          alt={"how_it_works"}
          className={"h-auto w-full md:w-10/12"}
        />
      </div>

      <h3
        className={"leading-8 md:leading-11 md:w-1/2 mx-auto my-12 text-center"}
      >
        Your product can go to market in the sooner
      </h3>

      <LowCodeFloater />
    </SectionWrapper>
  );
};

export default HowItWorks;
