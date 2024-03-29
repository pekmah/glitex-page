import React, { useEffect } from "react";
import Layout from "../components/main/layout";
import HeaderCarousel from "../components/pages/home/HeaderCarousel";
import Head from "next/head";
import AboutUs from "../components/pages/home/AboutUs";
import OurTeam from "../components/pages/home/OurTeam";
import Skills from "../components/pages/home/Skills";
import ProductDevelopment from "../components/pages/home/ProductDevelopment";
import Portfolio from "../components/pages/home/Portfolio";
import TechStack from "../components/pages/home/TechStack";
import CallUs from "../components/pages/home/CallUs";
import Footer from "../components/pages/home/footer";
import FormerClients from "../components/pages/home/FormerClients";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Layout>
        <Head>
          <title>
            Software Development Company in Kenya | Glitex Solutions Limited
          </title>
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="We prides ourselves in being one of the leading software development companies in Kenya. We have a history of developing quality business applications. Contact us today"
          />
          <link rel="canonical" href="https://glitexsolutions.co.ke/" />

          <meta property="og:site_name" content="Glitex Solutions Limited" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://glitexsolutions.co.ke/" />
          <meta
            property="og:title"
            content="Software Development Company in Kenya | Glitex Solutions Limited"
          />

          <meta
            property="og:description"
            content="We prides ourselves in being one of the leading software development companies in Kenya. We have a history of developing quality business applications. Contact us today"
          />
          <meta
            name="keywords"
            content="software development companies in Kenya, software developers in Kenya, software company in Nairobi"
          />
        </Head>

        {/*Header carousel  */}
        <HeaderCarousel />

        {/* <Header /> */}
        {/* clients */}
        <FormerClients />

        {/* About us */}
        <AboutUs />
        {/* Our team */}
        <OurTeam />

        {/* skills/services */}
        <Skills />

        {/* Product development */}
        <ProductDevelopment />

        {/* what we have done */}
        <Portfolio />

        {/* languages */}
        <TechStack />

        {/* call us */}
        <CallUs />

        {/* footer */}
        <Footer />
      </Layout>

      {/*<div id="preloader">*/}
      {/*  <div id="loader">*/}
      {/*    <div className="line-scale-pulse-out">*/}
      {/*      <div />*/}
      {/*      <div />*/}
      {/*      <div />*/}
      {/*      <div />*/}
      {/*      <div />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}

// BNSwgLP2bh2j63d_UXXUL-47JuhxLBpFHhKvX-lD0zo
