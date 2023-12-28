import React from "react";
import Layout from "../layout";
import { PortfolioMain, PortfolioWorkDone } from "../components";

const Portfolio = () => {
  return (
    <Layout>
      {/* Portfolio main section */}
      <PortfolioMain />

      {/*    Work done   */}
      <PortfolioWorkDone />
    </Layout>
  );
};

export default Portfolio;
