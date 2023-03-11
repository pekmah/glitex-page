import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/Footer";
import About from "../../components/pages/projects/e_learning/About";
import Portfolio from "../../components/pages/projects/e_learning/Portfolio";
import WhatSetsApart from "../../components/pages/projects/e_learning/WhatSetsApart";
import Features from "../../components/pages/projects/e_learning/Features";

const ELearning = () => {
  return (
    <Layout>
      <Carousel
        title={
          <div className="text-center leading-[50px]">
            <span> E-learning Platforms in Nairobi, </span>
            <br />
            <span>Kenya for Primary,Secondary Schools, </span>
            <br />
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
