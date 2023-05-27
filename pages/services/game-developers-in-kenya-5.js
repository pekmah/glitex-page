import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/projects/games/About";
import GameDevs from "../../components/pages/projects/games/GameDevs";
import Portfolio from "../../components/pages/projects/games/Portfolio";
import Process from "../../components/pages/projects/games/Process";

const games = () => {
  return (
    <Layout>
      <Head>
        <title>Game developers in Kenya | Glitex Solutions Limited</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="At Glitex Solutions Limited, we offer a wide range of services related to game software development. We work closely with our clients to understand their game concept and vision and provide comprehensive solutions to bring their ideas to life. "
        />
        <link
          rel="canonical"
          href="https://www.glitexsolutions.co.ke/services/game-developers-in-kenya"
        />

        <meta property="og:site_name" content="Glitex Solutions Limited" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.glitexsolutions.co.ke/services/game-developers-in-kenya"
        />
        <meta
          property="og:title"
          content="Game Development Companies in Kenya | Glitex Solutions Limited"
        />

        <meta
          property="og:description"
          content="At Glitex Solutions Limited, we offer a wide range of services related to game software development. We work closely with our clients to understand their game concept and vision and provide comprehensive solutions to bring their ideas to life."
        />
        <meta
          name="keywords"
          content="Game development companies in Kenya, Game developers in Kenya, software company in Nairobi"
        />
      </Head>
      <Carousel
        title={
          <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
            <p className={"w-[80%] mx-auto mt-5"}>
              Game developers Nairobi Kenya | Game design
            </p>
          </div>
        }
      />

      {/* About */}
      <About />

      {/* AI portfolio... */}
      <Portfolio />

      {/* Our Focus .... */}
      <Process />

      {/* what sets us apart */}
      <GameDevs />

      <Footer />
    </Layout>
  );
};

export default games;
