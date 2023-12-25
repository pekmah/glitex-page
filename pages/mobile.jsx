import React from "react";
import Layout from "../layout";
import { AboutMobile, MainMobile } from "../components";

const Mobile = () => {
  return (
    <Layout>
      {/*  main section  */}
      <MainMobile />

      {/* About section */}
      <AboutMobile />
    </Layout>
  );
};

export default Mobile;
