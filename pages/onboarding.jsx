import React from "react";
import Layout from "../layout";
import {
  OnboardingDevelopment,
  OnboardingMain,
  OnboardingSteps,
} from "../components";

const Onboarding = () => {
  return (
    <Layout>
      {/*  Onboarding Main section*/}
      <OnboardingMain />

      {/*    Onboarding Development process   */}
      <OnboardingDevelopment />

      {/*    Onboarding Steps    */}
      <OnboardingSteps />

      <div className={"h-[450px] md:h-[400px] bg-primary"} />
    </Layout>
  );
};

export default Onboarding;
