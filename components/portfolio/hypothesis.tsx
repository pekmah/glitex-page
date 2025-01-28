import React from "react";
import { SectionWrapper } from "../general";
import { QuotesSvg } from "./svg";

const Hypothesis = ({
  hypothesis,
  subtitle,
  hypothesisImage,
}: {
  hypothesis?: string;
  subtitle: string;
  hypothesisImage?: string;
}) => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white relative"}
      className={"py-6 md:py-14 pt-0 px-5 md:px-0"}
      sectionStyles={undefined}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 py-5 md:py-10 pt-5 md:pt-16 ">
        <div className="flex-1">
          {/* image */}
          <img
            className={"max-h-[450px] rounded-[40px]"}
            src={
              hypothesisImage ?? "/images/portfolio/portfolio-hypothesis.png"
            }
            alt="bg_logo"
          />
        </div>

        <div className="flex-1">
          <h2 className={"leading-8 md:leading-11 mx-auto mb-3 md:mb-5"}>
            The Hypothesis
          </h2>

          <div className={"flex gap-1"}>
            <QuotesSvg />
            <p
              className={
                "mb-5 font-tinos text-xl md:text-2xl font-semibold text-primary leading-9"
              }
            >
              {subtitle || _subtitle}
            </p>
          </div>
          <div
            className="text-primary"
            dangerouslySetInnerHTML={{ __html: hypothesis || body }}
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

const _subtitle =
  " People of color want and can pay for a platform that provides attorneys on demand.";