import React from "react";
import Layout from "../layout";
import {
  LowCodeAdvantages,
  LowCodeHowItWorks,
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

      {/*    How it works  */}
      <LowCodeHowItWorks />

      <div className={` bg-primary h-[560px] md:h-[700px]`} />
    </Layout>
  );
};

export default LowCode;
