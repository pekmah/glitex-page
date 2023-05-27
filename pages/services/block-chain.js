import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/block-chain/about";
import Portfolio from "../../components/pages/projects/block-chain/portfolio";
import WhatSetsApart from "../../components/pages/projects/block-chain/whatSetsApart";
import WhyChoose from "../../components/pages/projects/block-chain/whyChoose";

const BlockChain = () => {
  return (
    <Layout>
      <Carousel
        title={
          <div className="text-center leading-9 lg:leading-[50px] mt-6">
            <span>Blockchain Developers Nairobi Kenya | </span>
            <br className="hidden md:block" />
            <span>Blockchain Companies Nairobi Kenya </span>
          </div>
        }
      />
      {/* About */}
      <About />

      {/* best block... */}
      <Portfolio />

      {/* why choose .... */}
      <WhyChoose />

      {/* what sets us apart */}
      <WhatSetsApart />

      <Footer />
    </Layout>
  );
};

export default BlockChain;
