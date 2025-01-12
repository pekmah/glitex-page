import React from "react";
import Layout from "../../layout";
import {
  AiAcquisition,
  AiBuild,
  AiExperience,
  AiMain,
  AiPortfolioSection,
  AiStagesSection,
  AiStrategy,
  AiWhyChoose,
  AiWhyWork,
} from "../../components/ai";

export default function Ai() {
  return (
    <Layout>
      <AiMain />

      <AiStrategy />

      {/* let's build ai */}
      <AiBuild />

      {/* why work with us */}
      <AiWhyWork />

      {/* stages */}
      <AiStagesSection />

      {/* acquistion & privacy */}
      <AiAcquisition />

      {/* portfolio section */}
      <AiPortfolioSection />

      {/* why choose us */}
      <AiWhyChoose />

      {/* experince */}
      <AiExperience />
    </Layout>
  );
}
