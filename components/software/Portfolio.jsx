import { CButton, SectionWrapper } from "../general";

import React from "react";
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
          <h3>How do we help businesses</h3>

          <p className={" text-primary-pale text-lg w-full md:w-3/4"}>
            A crucial aspect of our Business Analysis service is ensuring that
            the right problem is identified and addressed. We help businesses
            define their product or business requirements by leveraging our
            experience across various industries. We don’t just stay in the
            office; we visit your business to understand your processes,
            identify challenges, and provide long-term solutions. Glitex
            Solutions assists businesses and startups in developing Minimum
            Viable Products (MVPs) to validate their business ideas. By
            leveraging user feedback, we help companies iteratively enhance
            their products, adding features that matter most to customers and
            ensuring a better fit with market needs. Once the MVP is refined,
            Glitex Solutions helps in developing additional features that
            further enhance its value.
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
          <h3>Hire Glitex Solutions as your development team</h3>

          <p className={" text-primary-pale text-lg w-full md:w-3/4"}>
            Looking to enhance your software development capabilities without
            the complexities of hiring internally? At Glitex Solutions, we
            provide businesses with the option to integrate our expert software
            development team directly into your existing staff, acting as an
            extension of your in-house team.
            <br /> <br />
            By partnering with us, you gain access to a dedicated team of
            developers who seamlessly integrate with your existing staff,
            aligning with your goals, processes, and culture. Whether you need
            specialized expertise for a specific project or ongoing support to
            scale your operations, our team becomes an extension of your
            workflow, delivering the flexibility and talent required to propel
            your business forward.
            <br /> <br />
            Whether you’re based in Kenya, Africa or anywhere else around the
            globe, we’d love to connect with you for your IT development needs.
            We’ve built strong, lasting relationships with many of our clients,
            who appreciate our commitment to treating their business as if it
            were our own.
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
