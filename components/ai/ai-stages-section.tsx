import React from "react";
import { SectionWrapper } from "../general";

export default function AiStagesSection() {
  return (
    <SectionWrapper
      className={"lg:px-10"}
      sectionClassName={"bg-[#002345]"}
      sectionStyles={undefined}
    >
      <div className="bg-[url('/images/ai/ai-stages-bg.jpg')] bg-contain bg-center bg-no-repeat py-20 ">
        <h2 className={"leading-8 md:leading-11 text-white"}>
          What does this mean for your startup
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 p-2 pt-20">
          {stages.map((stage, ind) => (
            <Card
              key={ind}
              title={stage.title}
              description={stage.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white p-7 rounded-[40px] border border-gray-200 min-h-48">
    <h3 className="text-2xl font-bold font-tinos my-3 mb-8">{title}</h3>

    <p className="text-base text-primary mr-6">{description}</p>
  </div>
);

const stages = [
  {
    title: "Startup specific approach to developmen tof AI",
    description:
      "We understand exploring a new market or creating one requires a lot of iteration, that is why we devise a fast and cost efficient way to build.",
  },
  {
    title: "AI Native development",
    description:
      "Our approach is to build native AI products that take into account deploying a data acquisition strategy, privacy, and reinforcement learning to improve your models over time.",
  },
  {
    title: "Scalability",
    description:
      "Solutions are built with growth in mind, allowing startups to expand their offerings seamlessly as their business grows.",
  },
  {
    title: "Fast development",
    description:
      "Leveraging low code/ no code tools such as Framer and Webflow, we can ship your AI project faster. Ideally less than 12 weeks.",
  },
  {
    title: "Stable development",
    description:
      "We support founders who have already built a prototype to build a fully scalable AI powered or Native application.",
  },
];
