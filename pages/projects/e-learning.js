import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/e_learning/about";
import Portfolio from "../../components/pages/projects/e_learning/portfolio";
import WhatSetsApart from "../../components/pages/projects/e_learning/whatSetsApart";
import Features from "../../components/pages/projects/e_learning/features";

const ELearning = () => {
  return (
    <Layout>
      <Carousel
        title={
          <div className="text-center leading-8 lg:leading-[50px] text-xl mt-5 md:mt-0">
            <span> E-learning Platforms in Nairobi, </span>
            <br className="hidden md:block" />
            <span>Kenya for Primary,Secondary Schools, </span>
            <br className="hidden md:block" />
            <span>Colleges & Universities</span>
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

export default ELearning;
