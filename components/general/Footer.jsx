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
import { SOCIAL_LINKS } from "../../constants/defaults";

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
          <a href={SOCIAL_LINKS.facebook}>
            <FacebookSvg />
          </a>

          <a href={SOCIAL_LINKS.instagram}>
            <InstagramSvg />
          </a>

          <a href={SOCIAL_LINKS.x}>
            <XSvg />
          </a>

          <a href={SOCIAL_LINKS.linkedin}>
            <LinkedinSvg />
          </a>
        </div>
      </div>

      <hr className={"bg-white h-px my-8"} />

      <p
        className={
          "text-center text-sm md:text-base text-white font-lato font-light"
        }
      >
        © Copyright Glitex Solutions ${new Date().getFullYear()}
      </p>
    </SectionWrapper>
  );
};

export default Footer;
