import React from "react";
import Layout from "../layout";
import {
  AboutMobile,
  MainMobile,
  MobileTypes,
  PortfolioMobile,
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
    </Layout>
  );
};

export default Mobile;
