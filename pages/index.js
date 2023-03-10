import React from "react";
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
import Footer from "../components/pages/home/Footer";
import FormerClients from "../components/pages/home/FormerClients";

export default function Index() {
  return (
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

      {/* skills */}
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
  );
}
