import React from "react";
import { CustomersSection } from "../home";
import { SectionWrapper } from "../general";

const Main = () => {
  return (
    <SectionWrapper className={"flex md:px-5 md:min-h-70 relative"}>
      {/*  text container   */}
      <div className={"flex-1 center pl-4"}>
        <h1 className={"md:leading-[60px] text-center w-full"}>Portfolio</h1>

        <div className={"w-full h-20 md:h-44 md:flex"} />
      </div>

      {/*  image container   */}
      <div className={"flex-1 pt-0 center justify-start relative h-auto"}>
        <img
          src="/images/portfolio/portfolio-main.webp"
          alt="bg_logo"
          className={"h-3/4 object-contain "}
        />
      </div>

      {/*  customers  */}
      <CustomersSection />
    </SectionWrapper>
  );
};

export default Main;
