import React from "react";
import { CButton, CButtonOutlined, SectionWrapper } from "../general";

const Projects = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white "}
      className={"py-10 md:py-24 px-5 md:px-0 "}
    >
      <h2 className={" leading-8 md:leading-11 mb-10 md:bg-24 text-center"}>
        What have we done so far
      </h2>

      {/*  mobile apps  */}
      <div className={"flex flex-col md:flex-row gap-5 md:gap-0"}>
        {/*  images   */}
        <div className={"center gap-3 flex-1"}>
          <img
            className={"w-44 md:w-64"}
            src="/images/portfolio/okapy/1.png"
            alt="okapy-1"
          />
          <img
            className={"w-44 md:w-64"}
            src="/images/portfolio/okapy/2.png"
            alt="okapy-2"
          />
        </div>
        {/*text */}
        <div className={"flex flex-col gap-4 flex-1 text-left"}>
          <h3>Mobile Application</h3>

          <p className={" text-primary-pale text-lg w-full md:w-3/4"}>
            Mobile application service are aimed at building iOS & Android
            applications that effectively complement or substitute web
            solutions. Having delivered 50+ mobile app development projects so
            far, Glitex ensures app success by delivering striking UI, secure
            app code, and resilient back ends.
          </p>

          <CButtonOutlined
            text={"View More"}
            className={
              "border-secondary text-secondary text-base md:text-xl mr-auto px-8"
            }
          />
        </div>
      </div>

      {/*  Ecommerce Application  */}
      <div className={"flex flex-col md:flex-row-reverse gap-5 md:gap-0 mt-10"}>
        {/*  images   */}
        <div className={"center justify-start gap-3 flex-1"}>
          <img
            className={"w-44 md:w-64"}
            src="/images/portfolio/ecommerce/1.png"
            alt="ecommerce-1"
          />
          <img
            className={"w-44 md:w-64"}
            src="/images/portfolio/ecommerce/2.png"
            alt="ecommerce-2"
          />
        </div>
        {/*text */}
        <div className={"flex-1 text-left center-x "}>
          <div className={"flex flex-col gap-4 w-full md:w-3/5"}>
            <h3>E-Commerce Application</h3>

            <p className={" text-primary-pale text-lg "}>
              With a strong emphasis on user experience and aesthetics, we
              design visually appealing eCommerce mobile apps that reflect your
              brand identity and resonate with your target audience. Our team
              pays meticulous attention to detail, ensuring that every element
              of your website, from product displays to checkout processes, is
              optimized for an enhanced customer journey.
            </p>

            <CButtonOutlined
              text={"View More"}
              className={
                "border-secondary text-secondary text-base md:text-xl mr-auto px-8 mt-5"
              }
            />
          </div>
        </div>
      </div>

      <div className={"w-full md:w-4/5 mx-auto mt-5 md:mt-0"}>
        <CButton
          className={"bg-secondary text-white text-base md:text-lg px-10"}
          text={"View More Projects"}
        />
      </div>
    </SectionWrapper>
  );
};

export default Projects;
