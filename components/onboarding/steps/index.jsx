import React from "react";
import { SectionWrapper } from "../../general";
import Card from "./Card";
import { ONBOARDING_STEPS } from "../../../providers/onboarding/data";
import { AreYouInSearch } from "../../mobile";

const Steps = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white relative"}
      className={"flex md:px-5 relative pb-32"}
    >
      <div
        className={
          "min-h-80 w-full -mt-32 md:-mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 p-2"
        }
      >
        {ONBOARDING_STEPS.map((step) => (
          <Card
            key={step.id}
            index={step.id}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>

      <AreYouInSearch />
    </SectionWrapper>
  );
};

export default Steps;
