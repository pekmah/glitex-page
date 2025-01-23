import React from "react";
import Card from "../onboarding/steps/Card";
import { SectionWrapper } from "../general";
import { QuotesSvg } from "./svg";

const Hypothesis = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white relative"}
      className={"py-14 pt-0 px-5 md:px-0"}
      sectionStyles={undefined}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 py-10 pt-16">
        <div className="flex-1">
          {/* image */}
          <img
            className={"max-h-[450px] rounded-[40px]"}
            src="/images/portfolio/portfolio-hypothesis.png"
            alt="bg_logo"
          />
        </div>

        <div className="flex-1">
          <h2 className={"leading-8 md:leading-11 mx-auto mb-5"}>
            The Hypothesis
          </h2>

          <div className={"flex gap-1"}>
            <QuotesSvg />
            <p
              className={
                "mb-5 font-tinos text-2xl font-semibold text-primary leading-9"
              }
            >
              People of color want and can pay for a platform that provides
              attorneys on demand.
            </p>
          </div>
          <div
            className="text-primary"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hypothesis;

const body = `
    We collaborate with you to design and build AI models that help <strong>unlock new markets</strong> across industries to <strong>explore untapped opportunities.</strong>
    <br />
    <br />
    We provide AI development services designed to help established businesses streamline operations by automating manual tasks, building AI models to extract insights from data, and uncovering patterns that drive smarter decision-making.
`;
