import React from "react";
import Layout from "../layout";
import { AboutMobile, MainMobile, PortfolioMobile } from "../components";

const Mobile = () => {
  return (
    <Layout>
      {/*  main section  */}
      <MainMobile />

      {/* About section */}
      <AboutMobile />

      {/* Portfolio section */}
      <PortfolioMobile />
    </Layout>
  );
};

export default Mobile;
