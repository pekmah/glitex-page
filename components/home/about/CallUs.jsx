import React from "react";
import { CButton, SectionWrapper } from "../../general";

const CallUs = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-primary"}
      className={"center flex-col pt-40 md:pt-56 pb-20 text-center gap-5 px-5"}
    >
      <h2 className={"text-white"}>Turn your ideas into reality today</h2>

      <CButton
        className={"bg-secondary text-white text-base md:text-lg px-10"}
        text={"Call Us Today"}
      />
    </SectionWrapper>
  );
};

export default CallUs;
