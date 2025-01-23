import React from "react";
import Card from "../onboarding/steps/Card";
import { SectionWrapper } from "../general";

const BuildingProcess = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white min-h-90 relative"}
      className={"py-14 md:pt-28 px-5 md:px-0"}
      sectionStyles={undefined}
    >
      <>
        <h2 className={"leading-8 md:leading-11 md:w-1/2 mr-auto"}>
          Our Building Process
        </h2>

        {/*    Steps section  */}
        <div
          className={
            "min-h-80 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 p-2 pt-8 md:pt-20"
          }
        >
          {steps?.map((step, ind) => (
            <Card
              key={ind}
              index={ind + 1}
              title={step.title}
              description={step.body}
            />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

export default BuildingProcess;

const steps = [
  {
    title: "Problem Statement Research",
    body: "We begin by understanding your objectives and offer a free consultation to explore AI possibilities for your specific use case.",
  },
  {
    title: "Solution Development and System Design",
    body: "Our product, design, and research teams dive deep into your problem and use case to assess technical feasibility and report on the potential AI solutions.",
  },
  {
    title: "Design and Prototyping",
    body: " If your business lacks a data foundation, our data and design team crafts a robust data acquisition strategy to fill that gap.",
  },
  {
    title: "Development and Testing",
    body: "For established businesses, our data science and machine learning teams analyze existing data to identify what to work with.",
  },
  {
    title: "Deployment, Documentation and Handover",
    body: "Using our 'Product First' approach, our product and design team collaboratively design solutions with you to ensure AI aligns strategically with your desired outcomes.",
  },
];
