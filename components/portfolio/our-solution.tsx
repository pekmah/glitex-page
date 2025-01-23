import React from "react";
import { SectionWrapper } from "../general";

export default function OurSolution() {
  return (
    <div className="bg-[url('/images/ai/ai-build-bg.png')] bg-contain bg-right">
      <SectionWrapper
        className={
          "h-full my-auto flex flex-col justify-center items-center py-14 md:py-20"
        }
        sectionClassName={undefined}
        sectionStyles={undefined}
      >
        <div className="flex ">
          <div className="flex-1">
            <h2 className={"leading-8 md:leading-11 mx-auto mb-5"}>
              Our Solution
            </h2>

            <div className={"flex gap-1"}>
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

            <div className="flex gap-5 py-6">
              <a>
                <img
                  className={"object-contain h-14"}
                  src="/images/portfolio/appstore.png"
                  alt="bg_logo"
                />
              </a>
              <a>
                <img
                  className={"object-contain h-14"}
                  src="/images/portfolio/googleplay.png"
                  alt="bg_logo"
                />
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* image */}
            <img
              className={"max-h-[550px] rounded-[40px] relative -mb-20 mx-auto"}
              src="/images/ai/ai-portfolio.png"
              alt="bg_logo"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

const body = `
    We collaborate with you to design and build AI models that help <strong>unlock new markets</strong> across industries to <strong>explore untapped opportunities.</strong>
    <br />
    <br />
    We provide AI development services designed to help established businesses streamline operations by automating manual tasks, building AI models to extract insights from data, and uncovering patterns that drive smarter decision-making.
`;
