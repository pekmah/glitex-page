import {
  AboutMobile,
  MainMobile,
  MobileTypes,
  PortfolioMobile,
  SliderMobile,
} from "../../components/software";

import Head from "next/head";
import Layout from "../../layout";
import React from "react";

// meta data
const CONTENT =
  "Are you in search of the top software development company in Kenya and beyond? Your search ends here. Glitex Solutions Limited is the pinnacle of innovation, excellence, and client satisfaction. Based in Nairobi, we are at the forefront of technology, providing state-of-the-art software development services that elevate businesses to new levels of success.";
const META_TITLE =
  "Software development company in Kenya | Tech company in Kenya";

const Mobile = () => {
  return (
    <Layout>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={CONTENT} />
        <meta
          name="keywords"
          content="Software development company in kenya, tech companies in kenya, tech company in kenya"
        />
        <link
          rel="canonical"
          href="https://www.glitexsolutions.co.ke/services/software-development-company-in-kenya"
        />
        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={CONTENT} />
        <meta name="next-head-count" content="14" />
      </Head>

      {/*  main section  */}
      <MainMobile />

      {/* Description section */}
      <AboutMobile />

      {/* Portfolio section */}
      <PortfolioMobile />

      {/* Mobile types section */}
      <MobileTypes />

      {/* Mobile slider */}
      <SliderMobile />

      <div className={"h-[430px] md:h-[400px] bg-primary"} />
    </Layout>
  );
};

export default Mobile;
