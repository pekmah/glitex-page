import React from "react";
import { CButton, SectionWrapper } from "../general";

export default function AiPortfolioSection() {
  return (
    <div className="bg-[url('/images/ai/ai-portfolio-bg.jpg')] bg-contain bg-center bg-no-repeat bg-primary">
      <SectionWrapper
        sectionClassName={"min-h-80"}
        className={"px-5 md:px-0"}
        sectionStyles={undefined}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 py-20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-12 text-white">
              Our Product Portfolio
            </h3>

            <div className="">
              <h3 className="text-2xl text-white mb-2">Attorney Shield</h3>
              <p className="text-white pr-3 md:pr-10">
                This app seeks addresses the rampant issue of police brutality
                in the United States by instantly connecting a person of color
                suspected by the police to an attorney who now provides
                instructions on how to respond and talk to the police or
                addresses them on the person’s behalf.
              </p>
            </div>

            <div className="flex gap-12">
              {stats.map(({ title, value, className = "" }, ind) => (
                <StatItem
                  key={ind}
                  title={title}
                  value={value}
                  className={className}
                />
              ))}
            </div>

            <div className="flex py-5 gap-10">
              <CButton
                text={"Read Case Study"}
                className={
                  "bg-white text-base md:text-base text-primary px-10 mt-5"
                }
                handleClick={() => {}}
              />

              <CButton
                text={"View Full Portfolio"}
                className={
                  "bg-transparent text-base md:text-base text-white mr-auto px-10 mt-5"
                }
                handleClick={() => {}}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end items-center">
            <img
              className={"object-contain max-h-[450px]"}
              src="/images/ai/ai-portfolio.png"
              alt="bg_logo"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

const StatItem = ({ value, title, className }) => {
  return (
    <div className={`flex-1 flex items-center py-10 ${className}`}>
      <h3 className="text-c-yellow text-2xl md:text-2xl xl:text-2xl mr-3">
        {value}
      </h3>

      <div
        className="font-lato font-normal tracking-wide text-xs lg:text-sm text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

const stats = [
  {
    title: `Capital Raised <br/> by Jan 2025`,
    value: "$590.8K",
    className: "mr-2 flex-[1.5]",
  },
  {
    title: `Investors <br/> by Jan 2025`,
    value: "13",
  },
  {
    title: `Paying users<br/> by Jan 2025`,
    value: "8.1K",
  },
];
