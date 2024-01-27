import React from "react";
import {SectionWrapper} from "../general";
import PropTypes from "prop-types";

/**
 * Services about section
 * @param {{title:string,body:string}} props
 * @returns {JSX.Element}
 * @constructor
 */
const Description = (props) => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-yellow -mt-4 md:-mt-12 min-h-50 md:min-h-70"}
      className={"py-20 md:py-36 px-5 md:px-0 text-center center flex-col"}
    >
      <h1 className={"h3 md:h2 leading-8 md:leading-11 md:w-1/2"}>
        {props?.title}
      </h1>

      {/*    desc   */}
      <p
        className={
          "w-full md:w-3/5 mx-auto my-2 md:my-5 text-base text-primary text-left md:text-center"
        }
        dangerouslySetInnerHTML={{ __html: props?.body }}
      />
    </SectionWrapper>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default Description;
