import React from "react";
import Layout from "../../components/main/layout";
import Carousel from "../../components/general/Carousel";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/ai/About";
import Portfolio from "../../components/pages/projects/ai/Portfolio";
import OurFocus from "../../components/pages/projects/ai/OurFocus";
import Benefits from "../../components/pages/projects/ai/Benefits";
import Head from "next/head";

const AiDevelopersInKenya2 = () => {
  return (
    <Layout>
      <Head>
        <title>AI companies in Kenya | Glitex Solutions Limited</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Are you in search of an AI company in Nairobi, Kenya ? Search no more Glitex Solution delivers quality. Contact us today"
        />
        <link
          rel="canonical"
          href="https://www.glitexsolutions.co.ke/services/ai-companies-in-kenya"
        />

        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.glitexsolutions.co.ke/services/ai-companies-in-kenya"
        />
        <meta
          property="og:title"
          content="AI Company in Kenya | Glitex Solutions Limited"
        />

        <meta
          property="og:description"
          content="Are you in search of an AI company in Nairobi, Kenya ? Search no more Glitex Solution delivers quality. Contact us today"
        />
        <meta
          name="keywords"
          content="ai companies in Kenya, artificial intelligence companies in Kenya, software company in Nairobi"
        />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
            <p className={"w-[80%] mx-auto mt-12"}>
              Ai and ML (Artificial Intelligence & Machine learning) Developers
              in Nairobi Kenya
            </p>
          </div>
        }
      />

      {/* About */}
      <About />

      {/* AI portfolio... */}
      <Portfolio />

      {/* Our Focus .... */}
      <OurFocus />

      {/* what sets us apart */}
      <Benefits />

      <Footer />
    </Layout>
  );
};

export default AiDevelopersInKenya2;
