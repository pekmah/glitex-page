import React from "react";
import Layout from "../../components/main/layout";
import Carousel from "../../components/general/Carousel";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/mobile/ethiopia/About";
import AndroidDevs from "../../components/pages/mobile/ethiopia/AndroidDevs";
import Types from "../../components/pages/mobile/ethiopia/Types";
import Slider from "../../components/pages/portfolio/Slider";
import AreYouInSearch from "../../components/pages/mobile/AreYouInSearch";
import Head from "next/head";

const Ethiopia = () => {
  return (
    <Layout>
      <Head>
        <title>
          Mobile App Development companies in Ethiopia | Glitex Solutions
          Limited
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Are you in search of mobile application developers in Ethiopia? Search no more. Glitex Solutions Limited is a mobile development company based in Nairobi, Kenya delivering mobile application development services across the continent."
        />
        <meta
          name="keywords"
          content="Mobile App developers in Kenya, IOS &amp; Android mobile application development in Kenya, Mobile app development company in Kenya"
        />
        <link
          rel="canonical"
          href="https://glitexsolutions.co.ke/services/mobile-app-developers-in-ethiopia-1"
        />
        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta
          property="og:title"
          content="Mobile App Developers in Addis Ababa, Ethiopia"
        />
        <meta
          property="og:description"
          content="Are you in search of mobile application developers in Ethiopia? Search no more. Glitex Solutions Limited is a mobile development company based in Nairobi, Kenya delivering mobile application development services across the continent."
        />
        <meta name="next-head-count" content="14" />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-10 md:leading-[50px] mt-8 capitalize">
            <span>Mobile application developers in ethiopia </span>
          </div>
        }
      />

      {/*<About/>*/}
      <About />

      {/* Android and IOS apps developers in Kenya */}
      <AndroidDevs />

      {/*Application types*/}
      <Types />

      {/* Carousel slider: some of the apps we have built*/}
      <div className="">
        <Slider />
      </div>
      {/* Are you in */}
      <AreYouInSearch showBtn={false} />

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Ethiopia;
