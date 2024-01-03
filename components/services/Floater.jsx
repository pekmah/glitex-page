import React from "react";
import {CButton, SectionWrapper} from "../general";
import {verifyStringIsInnerHtml} from "../../helpers/helpers";

/**
 * Renders services floater
 * @param {{title:string,body:string,bottom:string}} props
 * @returns {JSX.Element}
 * @constructor
 */
const Floater = (props) => {
  return (
    <SectionWrapper
      sectionStyles={{
        bottom: props?.bottom,
      }}
      sectionClassName={`absolute inset-x-0 -bottom-[${props?.bottom}] mx-3`}
      className={"bg-white tech-shadow p-5 md:p-8 rounded-2xl "}
    >
      <h2
        className={" leading-8 md:leading-11 mb-5 md:bg-24 text-center mt-12"}
      >
        {props?.title}
      </h2>

      {verifyStringIsInnerHtml(props?.body) ? (
        <div
          className={"mb-5 md:w-1/2 mx-auto text-center text-primary"}
          dangerouslySetInnerHTML={{ __html: props?.body }}
        />
      ) : (
        <p className={"mb-5 md:w-1/2 mx-auto text-center text-primary"}>
          {props?.body}
        </p>
      )}

      <div className={"center"}>
        <CButton
          text={"Call us Today"}
          className={"text-lg md:text-base mr-auto px-10 mt-5 mx-auto"}
        />
      </div>
    </SectionWrapper>
  );
};

export default Floater;
