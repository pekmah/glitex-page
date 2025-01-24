import React from "react";
import { SectionWrapper } from "../general";
import {
  BrandSvg,
  ConferencingSvg,
  PerformanceSvg,
  SubscriptionSvg,
  UiSvg,
} from "./svg";

export default function KeyFeatures({
  features,
}: {
  features: Partial<IFeature>[];
}) {
  return (
    <SectionWrapper
      sectionClassName={"bg-white min-h-90 relative"}
      className={"py-14 px-5 md:px-0"}
      sectionStyles={undefined}
    >
      <>
        <h2 className={"leading-8 md:leading-11 md:w-1/2 text-center mx-auto"}>
          Key Features
        </h2>

        {/*    Steps section  */}
        <div
          className={
            "min-h-80 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 p-2 pt-8 md:pt-20"
          }
        >
          {(features ? features : _features)?.map((step, ind) => (
            <Card
              key={ind}
              index={ind + 1}
              title={step.title}
              description={step.body}
              icon={_features[ind].icon}
            />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
}

const Card = (props) => {
  return (
    <div
      className={
        "c-shadow relative bg-white text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-[40px] p-9 md:p-12"
      }
    >
      {/*  index label  */}

      <div
        className={
          "h-12 md:h-14 w-12 md:w-14 p-2.5 rounded-full bg-c-yellow center flex-col absolute top-5 md:top-8 right-5 md:right-8"
        }
      >
        {props.icon}
      </div>
      <h5 className={"mb-8 text-inherit w-5/6"}>{props.title}</h5>

      <p className={"text-inherit"}>{props.description}</p>
    </div>
  );
};

interface IFeature {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const _features: IFeature[] = [
  {
    title: "Intuitive User Interface Designs",
    body: "Enhance your operations with smart AI solutions that work independently or in teams. We use versatile tools like Autogen, CrewAI, Semantic Kernel, and LlamaIndex to optimize performance and efficiency.",
    icon: <UiSvg />,
  },
  {
    title: "In App Video Conferencing",
    body: "We build AI systems capable of creating high-quality text, images, code, and more. With expertise in tools like OpenAI, Stability AI, Llama and custom generative models, we deliver applications ranging from content creation to design automation.",
    icon: <ConferencingSvg />,
  },
  {
    title: "Subscription and Payments",
    body: "We transform data into insights using top tools. From data engineering with Hadoop and Spark, building ML models with Tensorflow and PyTorch, to creating visualizations with Jupyter and Streamlit, we've got you covered.",
    icon: <SubscriptionSvg />,
  },
  {
    title: "Brand Identity",
    body: "Our AI chatbots engage in natural, human-like conversations. They provide intelligent, helpful responses across various platforms and purposes, making user interactions seamless. - We leverage OpenAI, Llama 3, Claude Api’s.",
    icon: <BrandSvg />,
  },
  {
    title: "Performance Optimization",
    body: "Our systems are capable of making intelligent decisions in dynamic environments. Our reinforcement learning expertise helps develop AI solutions for gaming, personalizations, optimization, and autonomous systems.",
    icon: <PerformanceSvg />,
  },
];
