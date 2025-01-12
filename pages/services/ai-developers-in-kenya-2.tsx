import React from "react";
import Layout from "../../layout";
import {
  AiBuild,
  AiExperience,
  AiMain,
  AiPortfolioSection,
  AiStrategy,
  AiWhyChoose,
} from "../../components/ai";

export default function Ai() {
  return (
    <Layout>
      <AiMain />

      <AiStrategy />

      {/* let's build ai */}
      <AiBuild />

      {/* portfolio section */}
      <AiPortfolioSection />

      {/* why choose us */}
      <AiWhyChoose />

      {/* experince */}
      <AiExperience />
    </Layout>
  );
}
