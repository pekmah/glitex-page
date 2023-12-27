import React from "react";
import Layout from "../layout";
import { OnboardingDevelopment, OnboardingMain } from "../components";

const Onboarding = () => {
  return (
    <Layout>
      {/*  Onboarding Main section*/}
      <OnboardingMain />

      {/*    Onboarding Development process   */}
      <OnboardingDevelopment />
    </Layout>
  );
};

export default Onboarding;
