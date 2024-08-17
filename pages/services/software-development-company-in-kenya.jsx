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

const Mobile = () => {
  return (
    <Layout>
      <Head>
        <title>
          Mobile App Developers in Kenya | Android Apps | IOS Apps | Glitex
          Solutions Limited
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="For Android mobile app and IOS mobile application development in Kenya, Contact Glitex Solutions Limited. We have the best mobile app developers in Nairobi Kenya."
        />
        <meta
          name="keywords"
          content="Mobile App developers in Kenya, IOS &amp; Android mobile application development in Kenya, Mobile app development company in Kenya"
        />
        <link
          rel="canonical"
          href="https://glitexsolutions.co.ke/services/mobile-app-developers-in-kenya-1"
        />
        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta
          property="og:title"
          content="Mobile App Developers in Kenya | Android Apps | IOS Apps"
        />
        <meta
          property="og:description"
          content="For Android mobile app and IOS mobile application development in Kenya, Contact Glitex Solutions Limited. We have the best mobile app developers in Nairobi Kenya."
        />
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
