import React from "react";
import {CButton, SectionWrapper} from "../general";
import {ServiceFloater} from "./index";

/**
 * Services about section
 * @param{{title?:string,subtitle?:string,body?:Object[],floater?:Object}} props
 * @returns {JSX.Element}
 * @constructor
 */
const About = (props) => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white md:min-h-90 relative"}
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
              isEven && " md:flex-row-reverse"
            } mt-8 center`}
          >
            {/*    image    */}
            {item?.styledImage ? (
              <div className={"flex-1 center relative"}>
                <img
                  className={"w-11/12 md:w-9/12 rounded-[36px] z-10"}
                  src={item?.imageUrl}
                  alt={"about-image"}
                />

                <div
                  className={`absolute ${
                    isEven ? "bg-c-yellow" : "bg-primary"
                  } z-0 -bottom-6 -right-2 md:right-[9%] rounded-[40px] w-10/12 md:w-8/12 h-full`}
                />
              </div>
            ) : (
              <div className={"flex-1 center relative"}>
                <img
                  className={"h-72 md:h-96 "}
                  src={item?.imageUrl}
                  alt={"about-image"}
                />
              </div>
            )}

            {/*    desc    */}
            <div
              className={`flex-1 relative text-primary ${
                isEven ? "text-right" : "text-left"
              }`}
            >
              <div className={"w-full md:w-3/4 "}>
                {/*  define  */}
                <div>
                  {item?.description?.title && (
                    <h4 className={"leading-8 md:leading-11 mt-12 md:mt-0"}>
                      {item?.description?.title}
                    </h4>
                  )}

                  {item?.description?.body !== null && (
                    <p className={"my-2 leading-7 text-primary-pale"}>
                      {item?.description?.body ?? item?.description ?? ""}
                    </p>
                  )}
                </div>

                {item?.styledImage && (
                  <div className={"center"}>
                    <CButton
                      text={"View"}
                      className={`text-sm md:text-base bg-c-yellow ${
                        isEven ? "ml-auto" : "mr-auto"
                      } px-10 mt-5 `}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/*  floater section  */}
      {props?.floater && (
        <ServiceFloater
          title={props?.floater?.title}
          body={props?.floater?.body}
          style={props?.floater?.style}
        />
      )}
    </SectionWrapper>
  );
};

export default About;
