import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/seo/about";
import Features from "../../components/pages/projects/seo/features";
import Portfolio from "../../components/pages/projects/seo/portfolio";
import WhatSetsApart from "../../components/pages/projects/seo/whatSetsApart";

const Seo = () => {
  return (
    <Layout>
      <Carousel
        title={
          <div className="text-center leading-[50px]">
            <span> Search Engine Evaluator Companies in Kenya | </span>
            <br />
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

export default Seo;
