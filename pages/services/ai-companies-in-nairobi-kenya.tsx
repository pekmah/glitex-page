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
import Head from "next/head";

export default function Ai() {
  const [currentStage, setCurrentStage] = React.useState(1);

  return (
    <Layout>
      <Head>
        <title>
          Ai Companies in Kenya | Artificial Intelligence Companies in Kenya
        </title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="In search of Artificial Intelligent (AI) company in Nairobi, Kenya? We specialize in AI, business automation, and application development. We serve clients in Kenya, Africa and Across the Globe."
        />
        <link
          rel="canonical"
          href="https://www.glitexsolutions.co.ke/services/ai-companies-in-nairobi-kenya"
        />

        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta
          property="og:title"
          content="Ai Companies in Kenya | Artificial Intelligence Companies in Kenya | Glitex Solutions Limited"
        />

        <meta
          property="og:description"
          content="In search of Artificial Intelligent (AI) company in Nairobi, Kenya? We specialize in AI, business automation, and application development. We serve clients in Kenya, Africa and Across the Globe."
        />
        <meta
          name="keywords"
          content="Ai Companies in Kenya , Artificial Intelligence Companies in Kenya"
        />
      </Head>

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
