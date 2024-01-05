import React from "react";
import Layout from "../layout";
import {
  LowCodeAdvantages,
  LowCodeMain,
  LowCodeOurPurpose,
} from "../components";
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

      {/* Unique advantages */}
      <LowCodeAdvantages />
    </Layout>
  );
};

export default LowCode;
