import React from "react";
import { CButton, SectionWrapper } from "../general";

const AreYouInSearch = () => {
  return (
    <SectionWrapper
      sectionClassName={"absolute inset-x-0 -bottom-[400px] mx-3"}
      className={"bg-white tech-shadow p-5 md:p-8 rounded-2xl "}
    >
      <h2
        className={" leading-8 md:leading-11 mb-10 md:bg-24 text-center mt-12"}
      >
        Are you in search of the mobile app <br className={"hidden md:block"} />
        developers in Kenya?
      </h2>

      <p className={"my-10 md:w-1/2 mx-auto text-center"}>
        You are then in the right place. Glitex Solutions Limited is a renowned
        firm that develops both iOS and Android mobile applications. At Glitex
        Solutions Limited, you not only get mobile application development
        services but also the right advises on how to implement your app and how
        to roll it out.
        <br className={"hidden md:block"} />
        <br className={"hidden md:block"} />
        We have served many countries in the Africa continent and beyond the
        continent. We have our headquarters in Nairobi, Kenya. Contact us today.
      </p>

      <div className={"center"}>
        <CButton
          text={"Call us Today"}
          className={"text-lg md:text-base mr-auto px-10 mt-5 mx-auto"}
        />
      </div>
    </SectionWrapper>
  );
};

export default AreYouInSearch;
