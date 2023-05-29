import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/management/hospital/About";
import AreYouInSearch from "../../components/pages/projects/management/hospital/AreYouInSearch";
import Features from "../../components/pages/projects/management/hospital/Features";
import Head from "next/head";

const Health = () => {
  return (
    <Layout>
      <Head>
        <title>
          Hospital Management System Kenya &amp; SACCO Management System Nairobi
          Kenya | Glitex Solutions Limited
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
            Are you in search of Hospital Management System or HMIS system in Kenya? This is the right place. Glitex Solutions Limited are experts in developing management systems for hospitals.
        "
        />
        <meta
          name="keywords"
          content="HMIS system kenya, Hospital management systems kenya, pharmacy systems"
        />
        <link
          rel="canonical"
          href="https://glitexsolutions.co.ke/services/management-information-systems-in-kenya-3"
        />
        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta
          property="og:title"
          content="Hospital Management System Kenya &amp; HMIS System kenya."
        />
        <meta
          property="og:description"
          content="
            Are you in search of Hospital Management System or HMIS system in Kenya?
This is the right place. Glitex Solutions Limited are experts in developing management systems for hospitals.
        "
        />
        <meta name="next-head-count" content="14" />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
            <p className={" mx-auto mt-5"}>
              Hospital Management information System Kenya | HMIS System Kenya
            </p>
          </div>
        }
      />

      {/* About */}
      <About />

      {/* Health System Features... */}
      <Features />

      {/* what sets us apart */}
      <AreYouInSearch />

      <Footer />
    </Layout>
  );
};

export default Health;
