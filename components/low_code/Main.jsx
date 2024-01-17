import React from "react";

import { CButton, SectionWrapper } from "../general";
import { CustomersSection } from "../home";
import { handleRequestQuote } from "../../helpers/helpers";

const Main = () => {
  return (
    <SectionWrapper className={"flex md:px-5 md:min-h-[86vh] relative"}>
      {/*  text container   */}
      <div className={"flex-1 center-x flex-col pl-4"}>
        <h1 className={"md:leading-[60px] w-full md:w-4/5"}>
          Get product to market 60% faster with low-code no-code development
        </h1>
        {/*  qualities list  */}
        <p className={"font-lato text-sm md:text-lg my-2 md:my-5 text-primary"}>
          Build you MVP faster and test it with quick deployment rounds that
          save you time and money and guarantee that you build the right
          product.
        </p>
        {/*  buttons  */}
        <div className={"center-y-between-x gap-5 mr-auto mt-1 md:mt-5"}>
          <CButton
            handleClick={handleRequestQuote}
            className={"px-6 text-xs md:text-base"}
            text={"Request Quote"}
          />
        </div>
        <div className={"w-full h-20 md:h-44 md:flex"} />
      </div>

      {/*  image container   */}
      <div className={"flex-1 center pt-0 md:pt-10 relative h-auto md:h-[90%]"}>
        <img
          className={
            " object-contain absolute ml-6 -left-5 -right-5 md:relative md:w-[75%]"
          }
          src="/images/general/bg-logo.png"
          alt="bg_logo"
        />
        <img
          src="/images/mis/low_code-main.webp"
          alt="bg_logo"
          className={
            "absolute h-full inset-0 object-cover w-10/12 md:w-3/5 m-auto rounded-[40px] object-left shadow"
          }
        />
      </div>

      {/*  customers  */}
      <CustomersSection />
    </SectionWrapper>
  );
};

export default Main;
