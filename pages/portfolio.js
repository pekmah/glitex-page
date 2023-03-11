import React from "react";
import Layout from "../components/main/layout";
import Footer from "../components/pages/home/footer";
import CallUs from "../components/pages/portfolio/CallUs";
import Carousel from "../components/general/Carousel";
import Slider from "../components/pages/portfolio/Slider";

const Portfolio = () => {
  return (
    <Layout>
      <Carousel title={"Portfolio"} />
      <Slider />
      <CallUs />

      <Footer />
    </Layout>
  );
};

export default Portfolio;
