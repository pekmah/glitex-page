import React, { ReactNode } from "react";
import { SectionWrapper } from "../general";
import AiExistingPlatform from "./svg/ai-existing-platform";
import AiNative from "./svg/ai-native";

export default function AiBuild() {
  return (
    <div className="bg-[url('/images/ai/ai-build-bg.png')] bg-cover bg-center">
      <SectionWrapper
        className={
          "h-full my-auto min-h-[400px] flex flex-col justify-center items-center py-28"
        }
        sectionClassName={undefined}
        sectionStyles={undefined}
      >
        <>
          <h2
            className={
              "leading-8 md:leading-11 md:w-1/2 mx-auto text-center mb-16"
            }
          >
            Let’s Build your AI Powered Product from MVP to Full Product
          </h2>

          <div className="flex gap-10">
            {data.map(({ icon, title, description }, ind) => (
              <Card
                key={ind}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </div>
        </>
      </SectionWrapper>
    </div>
  );
}

const Card = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-7 rounded-[40px] border border-gray-200 max-w-[520px]">
      {/* icon */}
      <div className="mb-5">{icon}</div>

      <h3 className="text-[26px] font-bold font-tinos my-3">{title}</h3>

      <p className="text-lg text-primary">{description}</p>
    </div>
  );
};

const data = [
  {
    icon: <AiExistingPlatform />,
    title: "An AI-Native applications",
    description:
      "Imagine a product that isn't just powered by AI, but is inherently AI-driven. It’s core functionality is carried out by a trained AI model that keeps learning and adapting.",
  },
  {
    icon: <AiNative />,
    title: "Integration of AI into an existing platform or product.",
    description:
      "Ride on the AI wave and bring in AI’s benefits into your existing product.",
  },
];
