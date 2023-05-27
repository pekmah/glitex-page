import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/block-chain/about";
import Portfolio from "../../components/pages/projects/block-chain/portfolio";
import WhatSetsApart from "../../components/pages/projects/block-chain/whatSetsApart";
import WhyChoose from "../../components/pages/projects/block-chain/whyChoose";
import { Head } from "next/head";

const BlockChainDevelopersInKenya3 = () => {
  return (
    <Layout>
      <Head>
        <title>Blockchain companies in Kenya | Glitex Solutions Limited</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Are you in search of blockchain developers in Kenya or blockchain development companies in Kenya, this is the right place.Blockchain technology has enabled us to make transactions much faster andmore secure across the globe. "
        />
        <link
          rel="canonical"
          href="https://www.glitexsolutions.co.ke/services/blockchain-developers-in-kenya"
        />

        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.glitexsolutions.co.ke/services/blockchain-developers-in-kenya"
        />
        <meta
          property="og:title"
          content="Blockchain Companies in Kenya | Glitex Solutions Limited"
        />

        <meta
          property="og:description"
          content="Are you in search of blockchain developers in Kenya or blockchain development companies in Kenya, this is the right place.Blockchain technology has enabled us to make transactions much faster andmore secure across the globe. "
        />
        <meta
          name="keywords"
          content="blockchain companies in Kenya, blockchain developers in Kenya, software company in Nairobi"
        />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-9 lg:leading-[50px] mt-6">
            <span>Blockchain Developers Nairobi Kenya | </span>
            <br className="hidden md:block" />
            <span>Blockchain Companies Nairobi Kenya </span>
          </div>
        }
      />
      {/* About */}
      <About />

      {/* best block... */}
      <Portfolio />

      {/* why choose .... */}
      <WhyChoose />

      {/* what sets us apart */}
      <WhatSetsApart />

      <Footer />
    </Layout>
  );
};

export default BlockChainDevelopersInKenya3;
