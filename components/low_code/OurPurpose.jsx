import React from "react";

import { SectionWrapper } from "../general";
import { FOUNDER } from "../../constants/defaults";
import StatCard from "../home/about/StatCard";

const OurPurpose = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white relative"}
      className={"md:px-5 pb-10 md:pb-20 relative"}
    >
      <div className="h-32 md:h-[380px] w-full" />

      <img
        src="/images/low_code/our_purpose-1.webp"
        alt="low code"
        className={
          "absolute mx-auto inset-x-0 -top-28 md:-top-60 object-contain w-11/12 md:w-8/12"
        }
      />

      <h1
        className={
          "h2 leading-8 md:leading-11 w-3/4 md:w-1/2 mx-auto text-center"
        }
      >
        Our Purpose
      </h1>

      <p
        className={
          "w-10/12 md:w-1/2 mx-auto my-2 md:my-5 text-base md:text-2xl text-primary text-left md:text-center"
        }
      >
        &quot;We exist to help you build a market-ready product{" "}
        <br className={"hidden md:flex"} /> fastest and with least
        expenses&quot;
      </p>

      <p
        className={
          "w-full w-3/4 md:w-1/2 mx-auto my-2 md:my-5 text-base md:text-2xl text-primary text-left md:text-center"
        }
      >
        ~ {FOUNDER}
        <p className="text-c-yellow mt-1">CEO Glitex Solutions Ltd.</p>
      </p>

      {/*  stats   */}
      <div className={"center gap-5 md:gap-10"}>
        <StatCard
          number={"24+"}
          subtext={"Apps we've built"}
          className={"bg-c-yellow"}
        />
        <StatCard
          number={"24+"}
          subtext={"Partner Startups"}
          className={"bg-primary"}
        />
      </div>
    </SectionWrapper>
  );
};

export default OurPurpose;
