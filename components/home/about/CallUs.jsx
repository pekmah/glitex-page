import React from "react";
import { CButton, SectionWrapper } from "../../general";
import { handleCall } from "../../../helpers/helpers";

const CallUs = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-primary"}
      className={"center flex-col pt-32 md:pt-80 pb-20 text-center gap-5 px-5"}
    >
      <h1 className={"text-white"}>Turn your ideas into reality today</h1>

      <CButton
        handleClick={handleCall}
        className={
          "bg-white font-lato text-primary text-base md:text-xl py-3 px-14 mt-6 md:mt-10"
        }
        text={"Call Us Today"}
      />
    </SectionWrapper>
  );
};

export default CallUs;
