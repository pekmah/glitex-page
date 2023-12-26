import React from "react";
import Layout from "../layout";
import {
  AboutMobile,
  MainMobile,
  MobileTypes,
  PortfolioMobile,
  SliderMobile,
} from "../components";

const Mobile = () => {
  return (
    <Layout>
      {/*  main section  */}
      <MainMobile />

      {/* About section */}
      <AboutMobile />

      {/* Portfolio section */}
      <PortfolioMobile />

      {/* Mobile types section */}
      <MobileTypes />

      {/* Mobile slider */}
      <SliderMobile />

      <div className={"h-[400px] bg-primary"} />
    </Layout>
  );
};

export default Mobile;
