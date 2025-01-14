import React from "react";
import { SectionWrapper } from "../general";
import AiExplore from "./svg/ai-explore";
import AiWhyWorkShake from "./svg/ai-why-work-shake";
import AiWhyWorkSpeedSvg from "./svg/ai-why-work-speed";

export default function AiWhyWork({
  handleSwitch,
  currentStage,
}: {
  handleSwitch: (stage: number) => void;
  currentStage: number;
}) {
  return (
    <div className="py-16 md:py-20">
      <SectionWrapper
        className={"lg:px-10"}
        sectionStyles={undefined}
        sectionClassName={undefined}
      >
        <>
          <h3 className={"leading-8 md:leading-11 text-center"}>
            What does this mean for your startup?
          </h3>

          <Card />

          <div className="pt-20">
            <div className="text-center lg:w-1/2 mx-auto flex flex-col gap-3">
              <h3 className={"leading-8 md:leading-10 lg:px-10"}>
                What’s the magic sauce to ensure as a business you ship faster?
              </h3>

              <span className="text-base md:text-xl text-primary font-tinos">
                We integrate AI models with low-code development
              </span>
            </div>
            {/* image */}
            <img
              className={"w-full object-contain my-5 sm:my-10 md:my-20"}
              src="/images/ai/ai-work-implementation.png"
              alt="why-work-implementation"
            />

            <div className="flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-10">
              <div className="flex-1 px-6">
                <h3 className={"leading-8 md:leading-10"}>
                  What stage are you?
                </h3>
                <div className="flex flex-col gap-8 py-5">
                  <StageSwitch
                    title={"I am building a startup "}
                    desc="And I need help with AI"
                    isCurrent={currentStage === 1}
                    handleSwitch={() => handleSwitch(1)}
                  />
                  <StageSwitch
                    title={
                      "I have and existing business & want to incorporate AI "
                    }
                    desc="Show me the possibilities and where to start"
                    isCurrent={currentStage === 2}
                    handleSwitch={() => handleSwitch(2)}
                  />
                </div>
              </div>

              <div className="flex-1 mx-5 md:mx-0 rounded-3xl md:rounded-[40px] overflow-hidden">
                <img
                  className={"object-contain "}
                  src="/images/ai/ai-work-stage.jpg"
                  alt="why-work-implementation"
                />
              </div>
            </div>
          </div>
        </>
      </SectionWrapper>
    </div>
  );
}

const Card = () => (
  <div
    className={`flex flex-col md:flex-row mx-3 md:mx-0 gap-5 md:gap-10 p-10 shadow-lg rounded-3xl lg:rounded-[40px] text-primary `}
  >
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-xl md:text-2xl font-tinos lg:mr-12">
        With over <strong>40% of our team made of ex-founders</strong> and
        <strong> ex-employees of startups</strong> we understand that products
        increase their odds of success with by ensuring;
      </p>

      <div className="my-6 font-medium flex flex-col gap-2">
        <span className="flex gap-3">
          <AiWhyWorkSpeedSvg />
          Speed of execution
        </span>

        <span className="flex gap-3">
          <AiWhyWorkShake />
          Speed of execution
        </span>
      </div>
    </div>
    <div className="flex-1 lg:pr-10">
      <div className="rounded-3xl overflow-hidden">
        <img src={"/images/ai/ai-why-work-card.jpg"} alt="choose" />
      </div>
    </div>
  </div>
);

const StageSwitch = ({
  title,
  desc,
  isCurrent,
  handleSwitch,
}: {
  isCurrent?: boolean;
  title: string;
  desc: string;
  handleSwitch: () => void;
}) => (
  <div
    className={`flex flex-col rounded-3xl  p-5 px-8 cursor-pointer shadow-md ${!isCurrent ? "bg-white text-primary" : "bg-primary text-white"}`}
    onClick={handleSwitch}
  >
    <h3 className={"leading-8 md:leading-10 text-inherit text-2xl mb-3"}>
      {title}
    </h3>

    <span>{desc}</span>

    <div className="flex justify-end">
      <a className="flex gap-2">
        Explore
        <AiExplore isCurrent={isCurrent} />
      </a>
    </div>
  </div>
);
