import React from "react";
import Layout from "../../components/main/layout";
import {
  AnalysisSection,
  InteractionSection,
} from "../../components/pages/projects/express_way";

const ExpresswayApp = () => {
  return (
    <Layout className={"bg-white pt-24 px-10"}>
      {/*sections */}
      <AnalysisSection />

      <InteractionSection />
    </Layout>
  );
};

export default ExpresswayApp;
