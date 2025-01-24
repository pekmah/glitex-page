import React from "react";
import { SectionWrapper } from "../general";
import TurnYourIdeas from "./TurnYourIdeas";

export default function OurLearnings() {
  return (
    <div className=" bg-white">
      <SectionWrapper
        sectionClassName={"py-14 md:py-28"}
        className={"px-5 md:px-0"}
        sectionStyles={undefined}
      >
        <>
          <h3 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-8 text-primary mr-auto">
            Our Learnings
          </h3>
          <p className="text-primary w-11/12 sm:w-3/4 mr-auto leading-6">
            We document the insights we gather from our product development life
            cycle to build a knowledge base that both the team involved and
            others can learn from to improve their skill and refer to when such
            scenarios come up in the future.{" "}
          </p>

          <div className="flex flex-col-reverse md:flex-row py-5 md:py-10">
            {/* text */}
            <div className="flex-1 flex flex-col gap-5 pt-5">
              {new Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex gap-8">
                  <div className="h-5 w-5 rounded-full font-tinos text-primary text-xl md:text-2xl font-semibold">
                    0{i + 1}.
                  </div>

                  <div
                    className="font-lato font-normal tracking-wide text-sm lg:text-[15px] text-primary pr-10 leading-6"
                    dangerouslySetInnerHTML={{ __html: learnings }}
                  />
                </div>
              ))}
            </div>
            {/* image */}
            <div className="flex-1">
              {/* image */}
              <img
                className={"max-h-[450px] rounded-[40px]"}
                src="/images/portfolio/trade-tools.png"
                alt="bg_logo"
              />
            </div>
          </div>
        </>
      </SectionWrapper>
      <div className="bg-primary py-32 relative">
        <TurnYourIdeas
          className="-top-10 md:-top-16 mx-3 md:mx-20 "
          innerClassName="rounded-[40px]"
        />
      </div>
    </div>
  );
}

const learnings =
  "<strong>Demand Forecast Solution:</strong> Minimize stock outs and reduce inventory holding costs by implementing AI-powered demand forecasting. By accurately predicting future demand, you can optimize production schedules, ensuring you produce the right amount of goods at the right time. This leads to improved inventory management, reduced waste, and increased profitability.";
