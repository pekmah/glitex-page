import React from "react";
import SectionWrapper from "../general/SectionWrapper";

const OnboardingDevelopment = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-yellow -mt-4 md:-mt-12 min-h-90"}
      className={"py-20 md:py-36 px-5 md:px-0 text-center"}
    >
      <h1 className={"h2 leading-8 md:leading-11 font-normal"}>
        We have developed a <strong>13 step process</strong> to help us
        <br className={"hidden md:block"} /> align and serve our customers to
        the very best of <br className={"hidden md:block"} /> our ability, here
        is a breakdown of the process:
      </h1>
    </SectionWrapper>
  );
};

export default OnboardingDevelopment;
