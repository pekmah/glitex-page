import React from "react";
import Layout from "../layout";
import { LowCodeMain, LowCodeOurPurpose } from "../components/low_code";
import { ServiceDescription } from "../components/services";

const LowCode = () => {
  return (
    <Layout>
      <LowCodeMain />

      {/* Description */}
      <ServiceDescription
        title={"What is Low-code/No-code"}
        body={
          "Low-code and no-code development are approaches to software development that aim to simplify and accelerate the process of creating applications, typically without requiring extensive programming knowledge."
        }
      />

      {/* Our purpose section */}
      <LowCodeOurPurpose />
    </Layout>
  );
};

export default LowCode;
