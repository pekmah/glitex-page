import React from "react";
import { SectionWrapper } from "../general";
import { FigmaSvg, FlutterSvg, NodeSvg, NotionSvg, SupabaseSvg } from "./svg";
import TurnYourIdeas from "./TurnYourIdeas";

export default function OurLearnings() {
  return (
    <div className=" bg-white">
      <SectionWrapper
        sectionClassName={"py-28"}
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

          <div className="flex py-10">
            {/* text */}
            <div className="flex-1 flex flex-col gap-5">
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
                src="/images/portfolio/learnings.jpeg"
                alt="bg_logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-20 py-10 pt-16 pb-12">
            <div className="flex-1">
              {/* image */}
              <img
                className={"max-h-[450px] rounded-[40px]"}
                src="/images/portfolio/trade-tools.png"
                alt="bg_logo"
              />
            </div>

            <div className="flex-1">
              <h3 className={"leading-8 md:leading-11 mx-auto mb-5"}>
                Our Tools Of Trade
              </h3>

              <div className={"flex flex-col gap-1"}>
                <p className={"mb-5 text-primary leading-7"}>
                  We collaborate with you to design and build AI models that
                  help unlock new markets across industries to explore untapped
                  opportunities. We provide AI development services designed to
                  help established businesses streamline operations by
                  automating manual tasks, building AI models to extract
                  insights from data, and uncovering patterns that drive smarter
                  decision-making.
                </p>

                <div className="flex gap-5 flex-wrap">
                  {tools.map((tool, ind) => (
                    <div
                      key={ind}
                      className="flex items-center gap-3 border border-slate-50 rounded-full py-1.5 px-3"
                    >
                      {tool.icon}
                      <span className="text-primary">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
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

const tools = [
  {
    name: "Figma",
    icon: <FigmaSvg />,
  },
  {
    name: "Supabase",
    icon: <SupabaseSvg />,
  },
  {
    name: "Flutter",
    icon: <FlutterSvg />,
  },
  {
    name: "Node Js",
    icon: <NodeSvg />,
  },
  {
    name: "Notion",
    icon: <NotionSvg />,
  },
];
