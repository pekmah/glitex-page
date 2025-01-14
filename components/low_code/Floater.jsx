import React from "react";
import { CButton, SectionWrapper } from "../general";
import { handleCall } from "../../helpers/helpers";

const Floater = () => {
  const renderHeight = (ind) => {
    switch (ind) {
      case 0:
        return " h-14 md:h-20 ";
      case 1:
        return "h-12 md:h-16";

      default:
        return "h-8 md:h-12";
    }
  };
  return (
    <SectionWrapper
      sectionClassName={`absolute inset-x-0 mx-3`}
      className={"bg-white tech-shadow p-5 md:p-8 pb-5 md:pb-20 rounded-2xl "}
    >
      <h2
        className={
          "mb-8 leading-8 md:leading-11  md:bg-24 text-center mt-5 md:mt-12 md:w-1/2 mx-auto"
        }
      >
        Our Development Tools
      </h2>

      <div
        className={"center mx-2 gap-5 md:gap-14 md:mx-10 flex-wrap md:mt-10"}
      >
        {new Array(4).fill("")?.map((_, ind) => (
          <img
            key={ind}
            src={`/images/low_code/floater-${ind + 1}.webp`}
            alt={`floater-${ind}`}
            className={`${renderHeight(ind)} object-contain`}
          />
        ))}
      </div>

      <div className={"my-12 md:my-28"}>
        <h3
          className={
            "leading-8 md:leading-11  md:bg-24 text-center mt-12 md:w-1/2 mx-auto"
          }
        >
          Ready to Bring your Idea to Life?
        </h3>
        <p
          className={
            "w-full md:w-3/5 lg:w-1/2 mx-auto my-3 text-base text-primary text-left md:text-center"
          }
        >
          Realizing your big idea starts with making that first call or
          requesting a quote. We will pick it from there and take you through
          our process.
        </p>
      </div>

      <div className={"center"}>
        <CButton
          handleClick={handleCall}
          text={"Call us Today"}
          className={"text-base md:text-lg mr-auto px-10 md:mt-5 mx-auto"}
        />
      </div>
    </SectionWrapper>
  );
};
export default Floater;
