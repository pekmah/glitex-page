import React from "react";
import SectionWrapper from "./SectionWrapper";
import {
  FacebookSvg,
  InstagramSvg,
  LinkedinSvg,
  LocationSvg,
  PhoneSvg,
  WebSvg,
  XSvg,
} from "../../public/icons";

const Footer = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-primary"}
      className={"py-4 md:py-8 px-5 md:px-0"}
    >
      <div className={"center-x justify-between flex-row gap-5 md:flex-row"}>
        <div
          className={
            "flex-1 flex flex-wrap gap-3 md:gap-5 text-white text-sm md:text-base font-lato font-medium"
          }
        >
          <span className={"center gap-2"}>
            <LocationSvg />
            Thika Road Royal plaza.
          </span>

          <span className={"center gap-2"}>
            <WebSvg />
            info@glitexsolutions.co.ke
          </span>

          <span className={"center gap-2"}>
            <PhoneSvg />
            +254 707 021 821.
          </span>
        </div>

        <div className={"center gap-4 flex-col md:flex-row flex-1 md:flex-[0]"}>
          <FacebookSvg />

          <InstagramSvg />

          <XSvg />

          <LinkedinSvg />
        </div>
      </div>

      <hr className={"bg-white h-px my-8"} />

      <p
        className={
          "text-center text-sm md:text-base text-white font-lato font-light"
        }
      >
        © Copyright Glitex Solutions 2023
      </p>
    </SectionWrapper>
  );
};

export default Footer;