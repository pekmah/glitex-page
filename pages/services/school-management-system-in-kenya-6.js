import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/management/school/About";
import AreYouInNeed from "../../components/pages/projects/management/school/AreYouInNeed";
import Features from "../../components/pages/projects/management/school/Features";
import Head from "next/head";

const school = () => {
  return (
    <Layout>
      <Head>
        <title>
          Our School Management System with both Android and IOS Apps in
          Nairobi, Kenya | Glitex Solutions Limited
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
            Glitex School System is a user-friendly School Management System in Kenya.
            It has a dashboard, where you can
            see all relevant information about your institute in one place.
        "
        />
        <meta name="keywords" />
        <link
          rel="canonical"
          href="https://glitexsolutions.co.ke/services/school-management-system-in-kenya-6"
        />
        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta
          property="og:title"
          content="Our School Management System with both Android and IOS Apps in Nairobi, Kenya"
        />
        <meta
          property="og:description"
          content="
            Glitex School System is a user-friendly School Management System in Kenya.
            It has a dashboard, where you can
            see all relevant information about your institute in one place.
        "
        />
        <meta name="next-head-count" content="14" />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
            <p className={"lg:w-[90%] mx-auto mt-5"}>
              School Management System with both Android and IOS Apps in
              Nairobi, Kenya
            </p>
          </div>
        }
      />

      {/* About */}
      <About />

      {/* Health System Features... */}
      <Features />

      {/* what sets us apart */}
      <AreYouInNeed />

      <Footer />
    </Layout>
  );
};

export default school;
