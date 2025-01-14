import React from "react";
import { SectionWrapper } from "../general";
import { CustomersSection } from "../home";

const OnboardingMain = () => {
  return (
    <SectionWrapper className={"flex md:px-5 md:min-h-[80vh] relative"}>
      {/*  text container   */}
      <div className={"flex-1 center-x flex-col pl-4"}>
        <h1 className={"md:leading-[60px] w-full md:w-4/5"}>
          Our Onboarding
          <br className={"hidden md:flex"} />
          Process
        </h1>

        <p className={"mt-5 md:w-3/4"}>
          We have developed a <strong>12 step process</strong> to help us align
          and serve our customers to the very best of our ability, here is a
          breakdown of the process.
        </p>
        {/*  qualities list  */}

        <div className={"w-full h-20 md:h-44 md:flex"} />
      </div>

      {/*  image container   */}
      <div className={"flex-1 center pt-0 relative h-auto"}>
        <img
          className={
            " object-contain absolute ml-6 -left-5 -right-5 md:relative md:w-[75%]"
          }
          src="/images/general/bg-logo.png"
          alt="bg_logo"
        />
        <img
          src="/images/onboarding/onboarding-1.webp"
          alt="bg_logo"
          className={"absolute inset-0 h-full mx-auto object-contain"}
        />
      </div>

      {/*  customers  */}
      <CustomersSection />
    </SectionWrapper>
  );
};

export default OnboardingMain;
