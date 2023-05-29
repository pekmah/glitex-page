import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/e_learning/about";
import Portfolio from "../../components/pages/projects/e_learning/portfolio";
import WhatSetsApart from "../../components/pages/projects/e_learning/whatSetsApart";
import Features from "../../components/pages/projects/e_learning/features";
import Head from "next/head";

const ElearningPlatformsInKenya2 = () => {
  return (
    <Layout>
      <Head>
        <title>
          E-learning Platforms in Nairobi, Kenya for Primary, Secondary Schools,
          Colleges &amp; Universities | Glitex Solutions Limited
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
            Glitex Solutions Limited is among the leading software development companies in Kenya that designs, develops and delivers
            technology-based Interactive learning solutions. Providing learning technologies, including custom
            e-learning, multi-device learning, mobile learning, platforms and consulting for Interactive e-learning
            curriculum design.
        "
        />
        <meta name="keywords" />
        <link
          rel="canonical"
          href="https://glitexsolutions.co.ke/services/elearning-platforms-in-kenya-2"
        />
        `
        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta
          property="og:title"
          content="E-learning Platforms in Nairobi, Kenya for  Primary, Secondary Schools, Colleges &amp; Universities"
        />
        <meta
          property="og:description"
          content="
            Glitex Solutions Limited is among the leading software development companies in Kenya that designs, develops and delivers
            technology-based Interactive learning solutions. Providing learning technologies, including custom
            e-learning, multi-device learning, mobile learning, platforms and consulting for Interactive e-learning
            curriculum design.
        "
        />
        <meta name="next-head-count" content="14" />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
            <span> E-learning Platforms in Nairobi, </span>
            <br className="hidden md:block" />
            <span>Kenya for Primary,Secondary Schools, </span>
            <br className="hidden md:block" />
            <span>Colleges & Universities</span>
          </div>
        }
      />

      {/* About */}
      <About />

      {/* best block... */}
      <Portfolio />

      {/* why choose .... */}
      <Features />

      {/* what sets us apart */}
      <WhatSetsApart />

      <Footer />
    </Layout>
  );
};

export default ElearningPlatformsInKenya2;
