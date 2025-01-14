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
  const [currentStage, setCurrentStage] = React.useState(1);

  return (
    <Layout>
      <AiMain />

      <AiStrategy />

      {/* let's build ai */}
      <AiBuild />

      {/* why work with us */}
      <AiWhyWork currentStage={currentStage} handleSwitch={setCurrentStage} />

      {/* stages */}
      <AiStagesSection currentStage={currentStage} />

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
