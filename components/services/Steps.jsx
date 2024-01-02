import React from "react";
import {SectionWrapper} from "../general";
import Card from "../onboarding/steps/Card";

/**
 * renders procedures
 * @param {{title:string,subtitle:string,steps:Object[]}} props
 * @returns {JSX.Element}
 * @constructor
 */
const Steps = (props) => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-blue min-h-90"}
      className={"py-10 md:py-24 px-5 md:px-0"}
    >
      <h2 className={"leading-8 md:leading-11 md:w-1/2 mx-auto mb-5"}>
        {props?.title}
      </h2>

      <p
        className={
          "leading-7 text-primary-pale text-left md:text-center md:w-3/4 mx-auto my-3"
        }
      >
        {props?.subtitle}
      </p>

      <div
        className={
          "min-h-80 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 p-2"
        }
      >
        {props?.steps.map((step, ind) => (
          <Card
            key={ind}
            index={ind + 1}
            title={step.title}
            description={step.body}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Steps;
