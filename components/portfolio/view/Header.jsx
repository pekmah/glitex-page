import React from "react";
import { SectionWrapper } from "../../general";

const Header = ({ title, description }) => {
  return (
    <SectionWrapper
      sectionClassName={""}
      className={"py-12 md:py-20 px-5 md:px-0 text-center"}
    >
      <h1 className={"h2 leading-8 md:leading-11 text-center"}>{title}</h1>

      {/*    desc   */}
      <p
        className={
          "w-full md:w-3/4 lg:w-1/2 mx-auto my-2 md:my-5 text-base text-primary text-left md:text-center "
        }
      >
        {description}
      </p>
    </SectionWrapper>
  );
};

export default Header;
