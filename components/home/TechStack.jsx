import React from "react";
import { SectionWrapper } from "../general";
import { LANGUAGES } from "../../providers/techStack";

const TechStack = () => {
  return (
    <SectionWrapper
      sectionClassName={"absolute inset-x-0 -bottom-32 mx-3"}
      className={"bg-white tech-shadow p-5 md:p-8 rounded-2xl"}
    >
      <h3 className={"leading-8 md:leading-11 mb-5 md:mb-8 text-center"}>
        Our Tech Stack
      </h3>

      <div
        className={"flex justify-center gap-12 overflow-scroll no-scrollbar"}
      >
        {LANGUAGES.map((lang, ind) => (
          <img
            className={"h-16 object-contain"}
            src={lang}
            key={ind}
            alt={lang}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
