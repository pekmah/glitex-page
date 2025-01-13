import React from "react";
import { SectionWrapper } from "../general";

export default function AiWhyChoose() {
  return (
    <SectionWrapper
      className={"relative py-12 md:py-24 "}
      sectionClassName={undefined}
      sectionStyles={undefined}
    >
      <div className="max-w-[1300px] mx-auto">
        <h2
          className={
            "leading-8 md:leading-11 md:w-1/2 mx-auto text-center mb-8 sm:mb-10 md:mb-16 text-primary font-bold"
          }
        >
          Why Choose Us
        </h2>

        <div className="gap-5">
          {data.map((item, index) => (
            <ChooseItem
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              className={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export type ChooseItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
};

const ChooseItem = ({
  title,
  description,
  imageUrl,
  className,
}: ChooseItemProps) => {
  return (
    <div
      className={`mx-3 md:mx-0 flex flex-col md:flex-row gap-3 sm:gap-6 md:gap-10 p-10 shadow-lg rounded-3xl lg:rounded-[40px] text-primary ${className}`}
    >
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl sm:text-2xl md:text-3xl mb-5">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed lg:pr-10">
          {description}
        </p>
      </div>
      <div className="flex-1 lg:pr-10">
        <div className="rounded-3xl overflow-hidden">
          <img src={imageUrl} alt="choose" />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "A Co-Founder Perspective",
    description:
      "Our team consists of former startup founders and employees who have navigated or understand the hurdles you face. With firsthand experience launching AI products in diverse industries, we tackle every project with flexibility, innovative problem-solving, and a desire to make a real-world difference.",
    imageUrl: "/images/ai/ai-choose-1.jpg",
  },
  {
    title: "Part of Your Team",
    description:
      "We’re more than just a service provider; we’re an extension of your team, acting like co-founders. Our unique mix of technology skills and business insights allows us to do more than just build your product. We challenge your ideas, push boundaries, and focus on your success—because your success is our success, too.",
    imageUrl: "/images/ai/ai-choose-2.jpg",
  },
  {
    title: "A Proven Path to Success",
    description:
      "Our highly regarded process is designed to help you launch with confidence. From shaping the initial concept to keeping your project on track with time and budget, we ensure that your product is ready when your users need it. With Glitex, you can trust that your AI strategy is in good hands.",
    imageUrl: "/images/ai/ai-choose-3.jpg",
  },
  {
    title: "Our Track Record of Success",
    description:
      "Our team consists of former startup founders and employees who have navigated or understand the hurdles you face. With firsthand experience launching AI products in diverse industries, we tackle every project with flexibility, innovative problem-solving, and a desire to make a real-world difference.",
    imageUrl: "/images/ai/ai-choose-1.jpg",
  },
];
