import React from "react";
import { SectionWrapper } from "../general";
import Card from "../onboarding/steps/Card";

export default function Strategy() {
  return (
    <SectionWrapper
      sectionClassName={"bg-white min-h-90 relative"}
      className={"py-14 md:pt-28 px-5 md:px-0"}
      sectionStyles={undefined}
    >
      <>
        <h2
          className={
            "leading-8 md:leading-11 md:w-1/2 mx-auto mb-5 text-center"
          }
        >
          Our AI Strategry
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

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 py-10 pt-16">
          <div className="flex-1">
            {/* image */}
            <img
              className={"max-h-[450px]"}
              src="/images/ai/ai-strategy-work.jpg"
              alt="bg_logo"
            />
          </div>

          <div className="flex-1">
            <h2 className={"leading-8 md:leading-11 mx-auto mb-5"}>
              We work with Founders and Organizations
            </h2>

            <div
              className="text-primary"
              dangerouslySetInnerHTML={{ __html: workDescription }}
            />
          </div>
        </div>
      </>
    </SectionWrapper>
  );
}

const steps = [
  {
    title: "Understand & Consult",
    body: "We begin by understanding your objectives and offer a free consultation to explore AI possibilities for your specific use case.",
  },
  {
    title: "Research & Feasibility",
    body: "Our product, design, and research teams dive deep into your problem and use case to assess technical feasibility and report on the potential AI solutions.",
  },
  {
    title: "Data Acquisition",
    body: "If your business lacks a data foundation, our data and design team crafts a robust data acquisition strategy to fill that gap.",
  },
  {
    title: "Data Exploration",
    body: "For established businesses, our data science and machine learning teams analyze existing data to identify what to work with.",
  },
  {
    title: "Product-First Design",
    body: `Using our 'Product First' approach, our product and design team collaboratively design solutions with you to ensure AI aligns strategically with your desired outcomes.`,
  },
  {
    title: "Collaborative Development",
    body: `Acting as an extension of your team, we work closely with you to build the AI systems, fostering seamless collaboration.`,
  },
  {
    title: "Implementation & Testing",
    body: `We train, test, deploy, and deliver the solution for initial testing phases.`,
  },
  {
    title: "Iterative Improvement",
    body: `Finally, we iterate on the AI solution based on user feedback to continuously optimize performance.`,
  },
];

const workDescription = `
    We collaborate with you to design and build AI models that help <strong>unlock new markets</strong> across industries to <strong>explore untapped opportunities.</strong>
    <br />
    <br />
    We provide AI development services designed to help established businesses streamline operations by automating manual tasks, building AI models to extract insights from data, and uncovering patterns that drive smarter decision-making.
`;
