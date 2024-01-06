import React from "react";
import { SectionWrapper } from "../general";
import Card from "../onboarding/steps/Card";
import { UNIQUE_ADVANTAGES } from "../../providers/low_code/Advantages";
import ComparisonTable from "./ComparisonTable";

const Advantages = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-blue relative"}
      className={"py-10 md:py-28 px-5 md:px-0"}
    >
      <div className={"mb-20 md:mb-40"}>
        <h2
          className={
            "leading-8 md:leading-11 md:w-1/2 mx-auto mb-5 text-center"
          }
        >
          The Unique Advantages
        </h2>

        <p
          className={
            "w-full md:w-3/5 lg:w-1/2 mx-auto my-3 md:my-5 text-base text-primary text-left md:text-center"
          }
        >
          The low-code/no-code approach is best suited for certain product
          development scenarios compared to the traditional full coding process.
        </p>

        <div
          className={
            "w-full md:w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 p-2 mt-10 md:mt-24"
          }
        >
          {UNIQUE_ADVANTAGES?.map((step, ind) => (
            <Card
              key={ind}
              index={ind + 1}
              title={step.title}
              description={step.body}
              icon={step.icon}
            />
          ))}
        </div>
      </div>

      <div className={"my-12 md:my-24"}>
        <h2
          className={
            "leading-8 md:leading-11 md:w-1/2 mx-auto mb-5 text-center"
          }
        >
          Better Than Full Coding
        </h2>

        <p
          className={
            "w-full md:w-3/5 lg:w-1/2 mx-auto my-3 md:my-5 text-base text-primary text-left md:text-center"
          }
        >
          Low-code/No-code platforms present components that form an application
          so its a matter of selecting what you need and integrating them
        </p>

        <ComparisonTable />
      </div>
    </SectionWrapper>
  );
};

export default Advantages;
