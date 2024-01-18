import React from "react";
import {CButton, SectionWrapper} from "../general";
import {handleCall, verifyStringIsInnerHtml} from "../../helpers/helpers";
import useWindowDimensions from "../../hooks/useWindowDimensions";

/**
 * Renders services floater
 * @param {{title:string,body:string,bottom:string}} props
 * @returns {JSX.Element}
 * @constructor
 */
const Floater = (props) => {
  const { size } = useWindowDimensions();
  return (
    <SectionWrapper
      sectionStyles={{
        bottom: size === "sm" ? props?.style?.bottomSm : props?.style?.bottom,
      }}
      sectionClassName={`absolute inset-x-0 -bottom-[${props?.style?.bottom}] mx-3`}
      className={"bg-white tech-shadow p-5 md:p-8 rounded-2xl "}
    >
      <h3
        className={
          "mb-8 leading-8 md:leading-11 md:bg-24 text-center mt-5 mx:mt-12 md:w-1/2 mx-auto"
        }
      >
        {props?.title}
      </h3>

      {verifyStringIsInnerHtml(props?.body) ? (
        <div
          className={
            "mb-5 md:w-1/2 mx-auto text-center text-sm md:text-base text-primary"
          }
          dangerouslySetInnerHTML={{ __html: props?.body }}
        />
      ) : (
        <p className={"mb-5 md:w-1/2 mx-auto text-center text-primary"}>
          {props?.body}
        </p>
      )}

      <div className={"center"}>
        <CButton
          handleClick={handleCall}
          text={"Call us Today"}
          className={"text-sm md:text-lg mr-auto px-10 mt-5 mx-auto"}
        />
      </div>
    </SectionWrapper>
  );
};

export default Floater;
