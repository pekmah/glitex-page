import { CButton, SectionWrapper } from "../general";
import {
  handleCall,
  handleEmail,
  handleRequestQuote,
} from "../../helpers/helpers";

import { CONTACT_EMAIL } from "../../constants/defaults";
import { CustomersSection } from "./index";
import React from "react";
import Router from "next/router";

export const handleBook = () => {
  Router.push("/book");
};
const Main = () => {
  return (
    <SectionWrapper className={"flex md:px-5 md:min-h-[85vh] relative"}>
      {/*  text container   */}
      <div className={"flex-1 center-x flex-col pl-4"}>
        <h1 className={"md:leading-[60px] w-full md:w-4/5"}>
          Enabling 1M+ Visionaries;
          <br className={"hidden md:flex"} /> We build with visionaries to turn
          ideas into widely adopted products
        </h1>

        {/*  qualities list  */}
        <p
          className={
            "font-lato text-sm md:text-2xl my-2 md:my-5 text-primary font-medium"
          }
        >
          <span>Quality . </span>
          <span>Security . </span>
          <span>Scalable</span>
        </p>
        {/*  buttons  */}
        <div
          className={
            "center-y-between-x flex-col md:flex-row gap-5 mr-auto mt-1 md:mt-5"
          }
        >
          <CButton
            className={"px-6 text-xs md:text-base"}
            text={"Request Quote"}
            handleClick={handleRequestQuote}
          />

          <div className="hidden md:block">
            <CButton
              text={`${CONTACT_EMAIL} `}
              className={
                "bg-white btn-shadow hover:btn-shadow-deep  duration-300 md:hover:scale-105 flex text-primary"
              }
              handleClick={handleEmail}
            />
          </div>

          <div className="block md:hidden">
            <CButton
              text={"Book Appointment"}
              className={
                "bg-white btn-shadow hover:btn-shadow-deep  duration-300 md:hover:scale-105 flex text-primary"
              }
              handleClick={handleBook}
            />
          </div>
          <CButton
            text={"Call: +254 707 021 821"}
            className={
              "bg-white btn-shadow hover:btn-shadow-deep  duration-300 hover:scale-105 hidden md:flex text-primary"
            }
            handleClick={handleCall}
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
          src="/images/home/main-1.png"
          alt="bg_logo"
          className={"absolute inset-0 h-full  object-contain"}
        />
      </div>

      {/*  customers  */}
      <CustomersSection />
    </SectionWrapper>
  );
};

export default Main;
