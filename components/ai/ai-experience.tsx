import React from "react";
import { SectionWrapper } from "../general";

import Svg1 from "./svg/ai-experience-1";
import Svg2 from "./svg/ai-experience-2";
import Svg3 from "./svg/ai-experience-3";
import Svg4 from "./svg/ai-experience-4";
import Svg5 from "./svg/ai-experience-5";
import Svg6 from "./svg/ai-experience-6";
import Svg7 from "./svg/ai-experience-7";
import Svg8 from "./svg/ai-experience-8";
import Svg9 from "./svg/ai-experience-9";
import Svg10 from "./svg/ai-experience-10";
import { TurnYourIdeas } from "../portfolio";

export default function AiExperience() {
  return (
    <div className="bg-primary py-16 sm:py-20">
      <SectionWrapper
        className={"relative pb-64 md:pb-96"}
        sectionClassName={undefined}
        sectionStyles={undefined}
      >
        <>
          <h2
            className={
              "text-2xl sm:text-3xl md:text-5xl leading-8 md:leading-11 md:w-1/2 mx-auto text-center mb-16 text-white"
            }
          >
            AI Fields We’re Experienced In
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {fields.map((item, ind) => (
              <Card
                key={ind}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>

          <TurnYourIdeas
            className="-bottom-10 md:-bottom-5 mx-3 md:mx-20 "
            innerClassName="rounded-[40px]"
          />
        </>
      </SectionWrapper>
    </div>
  );
}

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="relative overflow-hidden bg-cover md:bg-[url('/images/ai/subtract.png')] bg-none bg-white lg:bg-transparent p-10">
    <h3 className="mb-3 md:mb-10 mt-1 text-2xl md:text-[28px] w-10/12">
      {title}
    </h3>

    <p className="leading-relaxed text-primary"> {description}</p>

    <div className="w-14 md:w-[75px] h-14 md:h-[75px] p-3 md:p-0 rounded-full absolute top-4 right-4 bg-c-yellow flex items-center justify-center">
      {icon}
    </div>
  </div>
);

const fields = [
  {
    title: "AI Agents + Multi-Agent Systems",
    description:
      "Enhance your operations with smart AI solutions that work independently or in teams. We use versatile tools like Autogen, CrewAI, Semantic Kernel, and LlamaIndex to optimize performance and efficiency.",
    icon: <Svg1 />,
  },
  {
    title: "Generative AI",
    description:
      "We build AI systems capable of creating high-quality text, images, code, and more. With expertise in tools like OpenAI, Stability AI, Llama and custom generative models, we deliver applications ranging from content creation to design automation.",
    icon: <Svg2 />,
  },
  {
    title: "ML & Predictive Analytics",
    description:
      "We transform data into insights using top tools. From data engineering with Hadoop and Spark, building ML models with Tensorflow and PyTorch, to creating visualizations with Jupyter and Streamlit, we've got you covered.",
    icon: <Svg3 />,
  },
  {
    title: "AI-Powered Chatbots",
    description:
      "Our AI chatbots engage in natural, human-like conversations. They provide intelligent, helpful responses across various platforms and purposes, making user interactions seamless. - We leverage OpenAI, Llama 3, Claude Api’s.",
    icon: <Svg4 />,
  },
  {
    title: "Reinforcement Learning",
    description:
      "Our systems are capable of making intelligent decisions in dynamic environments. Our reinforcement learning expertise helps develop AI solutions for gaming, personalizations, optimization, and autonomous systems.",
    icon: <Svg5 />,
  },
  {
    title: "Computer Vision & Multi-Modal LLMs",
    description:
      "Unlock insights from visual data with computer vision technology. We use the latest multi-modal models to create innovative applications that combine different data types.",
    icon: <Svg6 />,
  },
  {
    title: "Speech Recognition & Synthesis",
    description:
      "We utilize advanced speech technology to convert speech to text and vice versa, enhancing accessibility and user experience across various applications, Whisper API and other open source models.",
    icon: <Svg7 />,
  },
  {
    title: "NLP Tasks",
    description:
      "We specialize in essential language processing techniques—like breaking down text, identifying parts of speech, and analyzing syntax—to lay the groundwork for advanced text analysis.",
    icon: <Svg8 />,
  },
  {
    title: "Edge AI",
    description:
      "Build AI solutions with Glitex that have real-time processing for IoT devices, drones, and mobile platforms, ensuring performance even in resource-constrained environments.",
    icon: <Svg9 />,
  },
  {
    title: "MLOps & LLMOps",
    description:
      "We handle everything from data to deployment. Our expertise ensures your models are trained, deployed, and monitored efficiently using secure, scalable infrastructure tailored to your needs.",
    icon: <Svg10 />,
  },
];
