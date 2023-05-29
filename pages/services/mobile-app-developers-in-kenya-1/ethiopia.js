import React from "react";
import Layout from "../../../components/main/layout";
import Carousel from "../../../components/general/Carousel";
import Footer from "../../../components/pages/home/footer";
import About from "../../../components/pages/mobile/ethiopia/About";
import AndroidDevs from "../../../components/pages/mobile/ethiopia/AndroidDevs";
import Types from "../../../components/pages/mobile/ethiopia/Types";
import Slider from "../../../components/pages/portfolio/Slider";
import AreYouInSearch from "../../../components/pages/mobile/AreYouInSearch";

const Ethiopia = () => {
  return (
    <Layout>
      <Carousel
        title={
          <div className="text-center leading-10 md:leading-[50px] mt-8">
            <span>Mobile-application-developers-in-ethiopia </span>
          </div>
        }
      />

      {/*<About/>*/}
      <About />

      {/* Android and IOS apps developers in Kenya */}
      <AndroidDevs />

      {/*Application types*/}
      <Types />

      {/* Carousel slider: some of the apps we have built*/}
      <div className="">
        <Slider />
      </div>
      {/* Are you in */}
      <AreYouInSearch showBtn={false} />

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Ethiopia;
