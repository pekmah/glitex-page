import React from "react";
import Layout from "../components/main/layout";
import {
  AnalysisSection,
  InteractionSection,
  ReviewSection,
} from "../components/pages/projects/express_way";

const Expresswayapp = () => {
  return (
    <Layout className={"bg-white pt-24 px-5 md:px-10"}>
      {/*sections */}
      <AnalysisSection />

      <InteractionSection />

      <ReviewSection />
    </Layout>
  );
};

export default Expresswayapp;
