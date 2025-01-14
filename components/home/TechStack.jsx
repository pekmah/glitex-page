import React from "react";
import { SectionWrapper } from "../general";
import { LANGUAGES } from "../../providers/techStack";

const TechStack = () => {
  return (
    <SectionWrapper
      sectionClassName={"absolute inset-x-0 -bottom-48 md:-bottom-60 mx-3"}
      className={"bg-white tech-shadow p-10 md:p-20 rounded-2xl"}
    >
      <h3 className={"leading-8 md:leading-11 mb-10 md:mb-8 text-center"}>
        Our Tech Stack
      </h3>

      <div
        className={
          "flex justify-start md:justify-center gap-8 md:gap-12 overflow-scroll no-scrollbar  "
        }
      >
        {LANGUAGES.map((lang, ind) => (
          <img
            className={"h-16 md:h-24 object-contain"}
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
