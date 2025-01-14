import React from "react";
import { SectionWrapper } from "../general";

const Types = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white relative"}
      className={"py-10 md:py-24 px-5 md:px-0 gap-5 md:gap-0 "}
    >
      <img
        className={"absolute inset-0 w-full md:w-auto md:h-full opacity-5 z-0"}
        src="/images/general/bg-logo.png"
        alt="logo"
      />

      <h3 className={" leading-8 md:leading-11 mb-10 text-center"}>
        Types of Mobile Apps.
      </h3>

      <div className="z-10 mx-auto text-center md:w-1/2">
        <h4 className="my-5 text-c-yellow">1. Native Mobile Applications</h4>

        <p>
          Native apps mobile applications are developed for specific operating
          system. For instance mobile applications developed specifically to be
          used on iOS can’t run on other operating systems like Android. Also
          mobile application developed to run on Android operating system can’t
          run on iOS. This is because the mobile applications have been
          developed to run only on one platform.
          <br className={"hidden md:block"} />{" "}
          <br className={"hidden md:block"} />
          The following are the technologies used:{" "}
          <strong>Swift, Objective-C, React, Java, Kotlin, Python.</strong>
        </p>
      </div>

      <div className="z-10 mx-auto mt-2 text-center md:w-1/2">
        <h4 className="my-5 text-c-yellow">2. Hybrid Mobile Applications</h4>

        <p>
          This type of mobile application can run on multiple platforms, for
          instace iOS and Android, while using a single codebase. So this means
          that the apps run across different operating systems. Apps like
          Twitter, Instagram, Uber and so many apps on Play store and App store
          are hybrid.
          <br className={"hidden md:block"} />{" "}
          <br className={"hidden md:block"} />
          The following are technologies used to implement hybrid mobile
          applications:{" "}
          <strong>
            React Native, Flutter, Ionic Framework, Native Script, Quasar
          </strong>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Types;
