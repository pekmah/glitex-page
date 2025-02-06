import React from "react";
import Layout from "../../layout";
import {
  PortfolioMain,
  PortfolioWorkDone,
  SectionWrapper,
} from "../../components";
import { PortfolioItem } from "../../components/portfolio/WorkDone";
import { generateImagePaths, pickRandomImage } from "../../helpers/portfilio";

const Portfolio = () => {
  return (
    <Layout>
      {/* Portfolio main section */}
      <PortfolioMain />

      {/*    Work done   */}
      <PortfolioWorkDone />

      <SectionWrapper
        sectionClassName={"relative bg-white pb-20 -mt-10 flex"}
        className={"py-10 md:py-3 pt-20 md:pt-0 px-5 md:px-0"}
      >
        {/* */}
        <div className="">
          <h2
            className={
              "w-full mx-auto md:w-1/2 leading-8 md:leading-11 mb-2 md:mt-24 text-center"
            }
          >
            Our Participations.
          </h2>

          <div className="container grid grid-cols-1 gap-6 py-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 md:p-3">
            <PortfolioItem
              image={pickRandomImage(
                generateImagePaths("/images/portfolio/express/", 0, 15, "webp")
              )}
              title={"Express Way App"}
              desc={
                "we participated in the research and design of the  Nairobi Expressway App is designed to enhance the experience of users traveling on the Nairobi Expressway by offering a range of convenient features: Toll Points Top-Up,  Toll Road Navigation,  Toll Fee Calculator,  Account Management,  Alerts and Notifications"
              }
              type={"mobile"}
              ind={9}
              className={"pt-4"}
            />
          </div>
        </div>
      </SectionWrapper>

      <div className={"h-48 bg-primary"} />
    </Layout>
  );
};

export default Portfolio;
