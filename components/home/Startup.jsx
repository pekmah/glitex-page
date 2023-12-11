import React from "react";
import { SectionWrapper } from "../general";

const Startup = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-blue "}
      className={"py-10 md:py-24 px-5 md:px-0 text-center"}
    >
      <h2 className={"leading-8 md:leading-11"}>Startup Product Development</h2>

      <p
        className={"my-2 leading-7 text-primary-pale text-left md:text-center"}
      >
        As a startup, building, testing, and refining your product can be a
        daunting task. That's where a Glitex Solutions comes in.
        <br className={"hidden md:block"} /> We have the expertise and
        experience to help you bring your product to life, and ensure that it
        meets the needs and expectations of your customers.
      </p>

      <div className={"flex flex-col md:flex-row mt-8"}>
        {/*    image    */}
        <div className={"flex-[0.6] center relative"}>
          <img
            className={"h-72 md:h-96"}
            src="/images/general/bg-logo.png"
            alt="bg-logo"
          />

          <img
            className={
              "h-60 md:h-80 w-60 md:w-80 absolute object-cover rounded-full inset-0 m-auto"
            }
            src="/images/home/startup-1.png"
            alt="startup"
          />
        </div>

        {/*    desc    */}
        <div className={"flex-1 relative text-primary text-left"}>
          <div className={"w-full md:w-3/5"}>
            {/*  define  */}
            <div>
              <h4 className={"leading-8 md:leading-11"}>Define</h4>

              <p className={"my-2 leading-7 text-primary-pale"}>
                Our team of designers, developers will work with you to
                understand your vision for your product, and help you bring it
                to fruition through custom software development.
              </p>
            </div>

            {/*  build & test  */}
            <div>
              <h4 className={"leading-8 md:leading-11"}>Build & Test</h4>

              <p className={"my-2 leading-7 text-primary-pale"}>
                We'll help you build a robust, scalable, and user-friendly
                product that meets your business goals. Once your product is
                built, we'll work with you to test and refine it, ensuring that
                it meets the highest quality standards.
              </p>
            </div>

            {/*  iterate  */}
            <div>
              <h4 className={"leading-8 md:leading-11"}>Iterate & Support</h4>

              <p className={"my-2 leading-7 text-primary-pale"}>
                Throughout the process, we'll be there to support you and offer
                guidance, ensuring that your product is a success. With our
                help, you'll be able to confidently bring your product to
                market, knowing that it has been thoroughly tested and refined
                to meet the needs of your customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Startup;
