import React from "react";
import { CButton, SectionWrapper } from "../general";
import { handleCall } from "../../helpers/helpers";

const TurnYourIdeas = () => {
  return (
    <SectionWrapper
      sectionClassName={"absolute inset-x-0 -bottom-40 md:-bottom-48 mx-3"}
      className={"bg-white tech-shadow p-5 md:p-8 rounded-2xl "}
    >
      <h2
        className={" leading-8 md:leading-11 mb-10 md:bg-24 text-center mt-12"}
      >
        Turn your ideas into reality today
      </h2>

      <div className={"center"}>
        <CButton
          handleClick={handleCall}
          text={"Call us Today"}
          className={"text-lg md:text-base mr-auto px-10 mt-5 mx-auto"}
        />
      </div>
    </SectionWrapper>
  );
};

export default TurnYourIdeas;
