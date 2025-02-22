import React from "react";
import { CButton, SectionWrapper } from "../general";
import RoundedBgFloater from "../general/RoundedBgFloater";
import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();
  const handlePortfolioNavigation = () => {
    router.push("/portfolio");
  };
  return (
    <>
      {/* Okapy app */}
      <SectionWrapper
        sectionClassName={"bg-white relative"}
        className={
          "py-10 md:py-24 px-5 md:px-0 flex flex-col md:flex-row gap-5 md:gap-0"
        }
      >
        <div className={"center gap-3 flex-1 relative"}>
          <RoundedBgFloater className={"ml-[20%]"} />

          <img
            className={"w-60 md:w-3/5 z-10"}
            src="/images/mobile/okapy.png"
            alt="okapy-1"
          />
        </div>

        <div className={"flex flex-col gap-4 flex-1 text-left"}>
          <h3>Android and IOS apps developers in Kenya</h3>

          <p className={" text-primary-pale text-lg w-full md:w-3/4"}>
            We offer mobile application development services in Kenya, Uganda,
            Tanzania, Ethiopia, and Sudan and beyond the region. Our Packages
            includes Hosting, 24/7 Support & Maintenance and therefore cost
            effective. Statistics from the Google Play Store show that over 60%
            of the apps on the store have never been downloaded; over 35% of
            them are downloaded but are inactive. This means mobile app
            development needs not only the skills of a mobile developer but a
            multitude of disciplines to realize a successful app. Glitex
            Solutions Limited offer a one-stop-shop for all your mobile app
            development needs for both iOS and Android.
          </p>

          {/* <div className={"center-y-between-x gap-5 mr-auto mt-1 md:my-5"}>
            <button>
              <PlaystoreBtnSvg />
            </button> */}

          {/* IOS Button  */}
          {/* <button>
              <IosBtnSvg />
            </button>
          </div> */}

          <CButton
            onClick={handlePortfolioNavigation}
            text={"Portfolio"}
            className={" text-base md:text-base mr-auto px-10 mt-5"}
          />
        </div>
      </SectionWrapper>

      {/* Attorney shield app */}
      <SectionWrapper
        sectionClassName={"bg-bg-blue relative"}
        className={
          "py-10 md:py-24 px-5 md:px-0 flex flex-col md:flex-row-reverse gap-5 md:gap-0"
        }
      >
        <div className={"center gap-3 flex-1 relative"}>
          <RoundedBgFloater className={"bg-blue-200 ml-[45%]"} />

          <img
            className={"w-44 md:w-3/5 z-10"}
            src="/images/mobile/attorney.png"
            alt="attorney"
          />
        </div>

        <div className={"flex flex-col gap-4 flex-1 text-left"}>
          <h3>Android and IOS apps developers in Kenya</h3>

          <p className={" text-primary-pale text-lg w-full md:w-3/4"}>
            We offer mobile application development services in Kenya, Uganda,
            Tanzania, Ethiopia, and Sudan and beyond the region. Our Packages
            includes Hosting, 24/7 Support & Maintenance and therefore cost
            effective. Statistics from the Google Play Store show that over 60%
            of the apps on the store have never been downloaded; over 35% of
            them are downloaded but are inactive. This means mobile app
            development needs not only the skills of a mobile developer but a
            multitude of disciplines to realize a successful app. Glitex
            Solutions Limited offer a one-stop-shop for all your mobile app
            development needs for both iOS and Android.
          </p>

          {/* <div className={"center-y-between-x gap-5 mr-auto mt-1 md:my-5"}>
            <button>
              <PlaystoreBtnSvg />
            </button> */}

          {/* IOS Button  */}
          {/* <button>
              <IosBtnSvg />
            </button>
          </div> */}

          <CButton
            onClick={handlePortfolioNavigation}
            text={"Portfolio"}
            className={" text-base md:text-base mr-auto px-10 mt-5"}
          />
        </div>
      </SectionWrapper>
    </>
  );
};

export default Portfolio;
