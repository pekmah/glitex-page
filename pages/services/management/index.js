import React from "react";
import Carousel from "../../../components/general/Carousel";
import Layout from "../../../components/main/layout";
import Footer from "../../../components/pages/home/footer";
import About from "../../../components/pages/projects/management/About";
import AreYouInNeed from "../../../components/pages/projects/management/AreYouInNeed";
import Portfolio from "../../../components/pages/projects/management/Portfolio";
import Head from "next/head";

const Management = () => {
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
            We are based in Nairobi Kenya &amp; we specialize in Hospital management systems (HMIS), Sacco Management
            Systems, Pharmacy systems &amp; so much more. Contact Glitex Solutions Limited on +254 707 021 821
        "
        />
        <meta
          name="keywords"
          content="school management system kenya, colleges and universities kenya, Church management systems in Kenya, Hospital management systems in Kenya, Sacco Management Systems in Kenya,Financial Management systems kenya, pharmacy systems"
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
          content="Hospital Management System Kenya &amp; SACCO Management System Nairobi Kenya"
        />
        <meta
          property="og:description"
          content="
            We are based in Nairobi Kenya &amp; we specialize in Hospital management systems (HMIS), Sacco Management
            Systems, Pharmacy systems &amp; so much more. Contact Glitex Solutions Limited on +254 707 021 821
        "
        />
        <meta name="next-head-count" content="14" />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
            <p className={" mx-auto mt-5"}>Management Information Systems</p>
          </div>
        }
      />

      {/* About */}
      <About />

      {/* Portfolio */}
      <Portfolio />

      {/* Are you in need */}
      <AreYouInNeed />

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Management;
