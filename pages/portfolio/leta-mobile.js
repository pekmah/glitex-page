import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import Description from "../../components/pages/projects/leta/Description";
import Gallery from "../../components/pages/projects/leta/Gallery";

const LetaMobile = () => {
  return (
    <Layout>
      <Carousel
        title={
          <div className="text-center leading-[50px]">
            <span>Leta Mobile Application </span>
          </div>
        }
        img={"/images/portfolio/typing-glitex.jpeg"}
        showClients={false}
        className={"h-[40vh]"}
      />

      {/* Leta description */}
      <Description />

      {/* gallery */}
      <Gallery />

      <Footer />
    </Layout>
  );
};

export default LetaMobile;
