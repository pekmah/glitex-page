import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/seo/about";
import Features from "../../components/pages/projects/seo/features";
import Portfolio from "../../components/pages/projects/seo/portfolio";
import WhatSetsApart from "../../components/pages/projects/seo/whatSetsApart";
import { Head } from "next/head";

const SeoEvaluatorsInKenya6 = () => {
  return (
    <Layout>
      <Head>
        <title>
          SEO Company in Kenya | Search Engine Optimization in Nairobi, Kenya |
          Glitex Solutions Limited
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
            We are the leading search engine optimization company in Kenya and across the region.
            Good ranking on top search engines means more website visitors ,sales and revenue.We use our SEO
            tactics and
            strategies to ensure your dominate the search engines.
        "
        />
        <meta name="keywords" />
        <link
          rel="canonical"
          href="https://glitexsolutions.co.ke/services/seo-companies-in-nairobi-kenya-0"
        />
        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitexsolutions.co.ke/" />
        <meta
          property="og:title"
          content="SEO Company in Kenya | Search Engine Optimization in Nairobi, Kenya"
        />
        <meta
          property="og:description"
          content="
            We are the leading search engine optimization company in Kenya and across the region.
            Good ranking on top search engines means more website visitors ,sales and revenue.We use our SEO
            tactics and
            strategies to ensure your dominate the search engines.
        "
        />
        <meta name="next-head-count" content="14" />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-10 lg:leading-[50px]  mt-12">
            <span> Search Engine Evaluator Companies in Kenya | </span>
            <br className="hidden md:block" />
            <span> SEO Services Nairobi Kenya</span>
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

export default SeoEvaluatorsInKenya6;
