import React from "react";
import {CustomersSection} from "../home";
import {SectionWrapper} from "../general";

/**
 *
 * @param {{title:string,subtitle:string,imageUrl:string}} props
 * @returns {JSX.Element}
 * @constructor
 */
const Main = (props) => {
  return (
    <SectionWrapper className={"flex md:px-5 md:min-h-[75vh] relative"}>
      {/*  text container   */}
      <div className={"flex-1 flex-col center pl-4 "}>
        <h1 className={"md:leading-[60px] w-full md:w-4/5 bg-white"}>
          {props?.title}
        </h1>

        <p className={"mt-5 md:w-3/4"}>{props?.subtitle ?? ""}</p>

        <div className={"w-full h-20 md:h-44 md:flex"} />
      </div>

      {/*  image container   */}
      <div className={"flex-1 pt-0 center relative h-auto"}>
        {/*bg logo*/}
        <img
          className={
            " object-contain absolute ml-6 -left-5 -right-5 md:relative md:w-[75%]"
          }
          src="/images/general/bg-logo.png"
          alt="bg_logo"
        />
        {props?.imageUrl && (
          <img
            src={props?.imageUrl}
            alt="bg_logo"
            className={"absolute inset-0 h-full mx-auto object-contain"}
          />
        )}
      </div>

      {/*  customers  */}
      <CustomersSection />
    </SectionWrapper>
  );
};

export default Main;
