import React from "react";
import { CustomersSection } from "../home";
import { SectionWrapper } from "../general";

const Main = () => {
  return (
    <SectionWrapper
      className={"flex md:px-5 min-h-[30vh] md:min-h-70 relative"}
    >
      {/*  text container   */}
      <div className={" flex-[0.5] md:flex-1 center pl-4 "}>
        <h1 className={"md:leading-[60px] text-center w-full mb-10 md:mb-0"}>
          Portfolio
        </h1>

        <div className={"w-full h-32 md:h-44 md:flex"} />
      </div>

      {/*  image container   */}
      <div className={"flex-1 center justify-start relative h-auto pb-12"}>
        <img
          src="/images/portfolio/portfolio-main.webp"
          alt="bg_logo"
          className={"h-full md:h-3/4 object-contain "}
        />
      </div>

      {/*  customers  */}
      <CustomersSection />
    </SectionWrapper>
  );
};

export default Main;
