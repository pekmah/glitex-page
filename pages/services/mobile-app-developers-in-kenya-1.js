import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/mobile/About";
import AndroidDevs from "../../components/pages/mobile/AndroidDevs";
import AreYouInSearch from "../../components/pages/mobile/AreYouInSearch";
import BestMobileDevs from "../../components/pages/mobile/BestMobileDevs";
import Types from "../../components/pages/mobile/Types";
import Slider from "../../components/pages/portfolio/Slider";
import Head from "next/head";

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
      <Carousel
        title={
          <div className="text-center leading-10 md:leading-[50px] mt-8">
            <span>Mobile App developers in Kenya </span>
            <br className="hidden md:block" />
            <span>Android apps | IOS apps </span>
          </div>
        }
      />

      <About />
      {/* Android and IOS apps developers in Kenya */}
      <AndroidDevs />

      {/* Best mobile app Developers in Kenya */}
      <BestMobileDevs />

      {/* Types of mobile apps */}
      <Types />

      {/* Carousel slider: some of the apps we have built*/}
      <div className="">
        <Slider />
      </div>
      {/* Are you in */}
      <AreYouInSearch showBtn />
      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Mobile;
