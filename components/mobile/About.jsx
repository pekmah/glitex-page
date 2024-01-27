import React from "react";
import SectionWrapper from "../general/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-bg-yellow -mt-4 md:-mt-12 md:min-h-90"}
      className={"py-20 md:py-36 px-5 md:px-0 text-center"}
    >
      <h1 className={"h2 leading-8 md:leading-11"}>
        Mobile App developers in Kenya |
        <br className={"hidden md:flex"} /> Android apps | IOS apps.
      </h1>

      {/*    desc   */}
      <p
        className={
          "w-full md:w-3/5 mx-auto my-2 md:my-5 text-base text-primary text-left md:text-center"
        }
      >
        We are Kenya&apos;s Top & Best Mobile App Development Company in
        Nairobi, Kenya. Our team of expert is skilled in Android & iOS mobile
        apps development. We develop mobile applications at affordable prices.
        Whether you are in Nairobi Kenya, Ethiopia, Somalia, Rwanda & Tanzania
        Glitex Solutions Limited will serve you.
        <br />
        <br />
        We are a comprehensive mobile app development company that helps you to
        develop and maintain Mobile Applications for both Android and iOS. We
        develop user-friendly and secure mobile apps for any type of businesses
        model. We pride ourselves as the best mobile app developers in Kenya,
        contact us today.
      </p>
    </SectionWrapper>
  );
};

export default About;
