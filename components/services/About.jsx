import React from "react";
import {SectionWrapper} from "../general";

/**
 * Services about section
 * @param{{title?:string,subtitle?:string,body?:Object[]}} props
 * @returns {JSX.Element}
 * @constructor
 */
const About = (props) => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white min-h-90"}
      className={"py-10 md:py-24 px-5 md:px-0 text-center center-x flex-col"}
    >
      {props?.title && (
        <h2
          className={
            "leading-8 md:leading-11 md:w-1/2 text-center mx-auto mb-5"
          }
        >
          {props?.title}
        </h2>
      )}

      {props?.subtitle && (
        <p
          className={
            "my-2 leading-7 text-primary-pale text-left md:text-center"
          }
        >
          {props?.subtitle}
        </p>
      )}

      {props?.body?.map((item, ind) => {
        const isEven = (ind + 1) % 2 === 0;

        return (
          <div
            key={ind}
            className={`flex flex-col md:flex-row ${
              isEven && "md:flex-row-reverse"
            } mt-8 center`}
          >
            {/*    image    */}
            <div className={"flex-1 center relative"}>
              <img
                className={"h-72 md:h-96"}
                src={item?.imageUrl}
                alt={"about-image"}
              />
            </div>

            {/*    desc    */}
            <div className={"flex-1 relative text-primary text-left"}>
              <div className={"w-full md:w-3/4 "}>
                {/*  define  */}
                <div>
                  {item?.description?.title && (
                    <h4 className={"leading-8 md:leading-11"}>
                      {item?.description?.title}
                    </h4>
                  )}

                  <p className={"my-2 leading-7 text-primary-pale"}>
                    {item?.description?.body ?? item?.description ?? ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default About;
