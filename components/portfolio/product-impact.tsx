import React from "react";

import { SectionWrapper } from "../general";

export default function ProductImpact({ impact }: { impact: string }) {
  return (
    <div className=" bg-primary">
      <SectionWrapper
        sectionClassName={"min-h-80"}
        className={"px-5 md:px-0"}
        sectionStyles={undefined}
      >
        <div className="bg-[url('/images/portfolio/map-base.png')] bg-contain bg-bottom bg-no-repeat flex flex-col md:flex-row gap-0 sm:gap-6 md:gap-10 md:min-h-[70vh]">
          <div className="flex-1 py-14 sm:py-20 md:py-32">
            <h3 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-8 text-white text-center">
              Product Impact
            </h3>

            <p className="text-white w-11/12 sm:w-3/4 md:w-1/2 mx-auto text-center leading-8">
              {impact || _impact}
            </p>

            <div className="flex flex-wrap w-11/12 sm:w-3/4 md:w-1/2 gap-3 md:gap-12 pt-10 md:pt-16 mx-auto">
              {stats.map(({ title, value, className = "" }, ind) => (
                <StatItem
                  key={ind}
                  title={title}
                  value={value}
                  className={className}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

const _impact =
  "Okapy Secure is a tech-driven end-to-end local and cross border goods transport platform for individuals and businesses. Okapy partners with retailers, manufacturers, suppliers, and startups to transport goods and shop directly from the U.S. stores and delivers to your door step.";

const stats = [
  {
    title: `Capital Raised <br/> by Jan 2025`,
    value: "$590.8K",
    className: "mr-2 flex-[1.5]",
  },
  {
    title: `Investors <br/> by Jan 2025`,
    value: "752",
  },
  {
    title: `Paying users<br/> by Jan 2025`,
    value: "8.1K",
  },
];

export const StatItem = ({ value, title, className }) => {
  return (
    <div
      className={`flex-1 flex items-center py-3 sm:py-6 md:py-10 ${className}`}
    >
      <h3 className="text-c-yellow text-2xl md:text-3xl  mr-3">{value}</h3>

      <div
        className="font-lato font-normal tracking-wide text-xs lg:text-sm text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};
