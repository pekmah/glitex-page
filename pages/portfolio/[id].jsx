import React, { useEffect, useMemo } from "react";
import {
  HypothesisSection,
  KeyFeaturesSection,
  OurLearningSection,
  PortfolioViewImages,
  ProductImpactSection,
  SectionWrapper,
} from "../../components";

import { useParams } from "next/navigation";
import Layout from "../../layout";
import { portfolioData } from "../../providers/projects/data";
import {
  DurationSvg,
  IndustrySvg,
  LaunchSvg,
  MembersSvg,
} from "../../public/icons/portfolio";

const View = () => {
  const params = useParams();
  const currentProject = useMemo(() => {
    if (params?.id) {
      return portfolioData[params?.id];
    } else {
      return null;
    }
  }, [params?.id]);

  const [currentTab, setCurrentTab] = React.useState("mobile"); // mobile/admin
  // const [currentBtn] = React.useState(btns[0]);

  const handleSwitch = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    if (currentProject?.tabs) {
      setCurrentTab(currentProject?.tabs[0]?.id);
    }
  }, [currentProject]);

  return (
    <Layout>
      <SectionWrapper
        className={"px-3 lg:px-10 min-h-[50vh] w-full"}
        sectionClassName={"bg-[#002345]"}
        sectionStyles={undefined}
      >
        <div className="bg-[url('/images/ai/ai-stages-bg.jpg')] bg-contain bg-right bg-no-repeat pt-16 sm:pt-20 flex flex-col items-center pb-80">
          <h1
            className={
              "leading-8 md:leading-11 text-white text-center text-3xl sm:text-4xl lg:text-5xl "
            }
          >
            {currentProject?.title}
          </h1>
          <p className={" my-8 text-white md:w-1/2 text-center leading-8"}>
            {currentProject?.description}
          </p>

          <div
            className={
              "bg-none py-8 w-full grid grid-cols-1 gap-3 md:flex flex-row flex-wrap md:justify-evenly"
            }
          >
            {(currentProject?.projectStats
              ? currentProject?.projectStats
              : applicationDetails
            )?.map((item, index) => (
              <div
                key={index}
                className={
                  "md:w-1/5 border border-[#0066B3] backdrop-blur-sm rounded-2xl p-5 py-4 text-white"
                }
              >
                {/*  icon  */}
                <div className={"flex justify-end pb-1"}>
                  {applicationDetails[index].icon}
                </div>

                {/* title */}
                <h5 className={"text-white text-xl sm:text-2xl md:text-[28px]"}>
                  {item.title}
                </h5>
                <p
                  className={
                    "font-tinos text-base md:text-lg tracking-wide mt-2"
                  }
                >
                  {item.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className={"md:px-3 min-h-[50vh] -mt-64 z-0 lg:mx-24"}
        sectionClassName={" relative"}
        noContainer
      >
        {/*  images   */}
        <div
          className={
            "relative bg-white md:py-5 px-5 md:px-10 sm:rounded-[40px] lg:rounded-[80px]"
          }
        >
          {/*buttons*/}
          {/* {currentProject?.showButtons !== false && (
            <div
              className={
                "flex justify-center flex-wrap gap-2 md:gap-5 py-5 md:py-10"
              }
            >
              {btns?.map((btn, index) => (
                <CButton
                  key={index}
                  className={`py-3.5 px-6 md:px-12 border min-w-44 text-center justify-center ${btn === currentBtn ? "border-white bg-primary" : "border-primary bg-white text-primary"}  text-base`}
                  text={btn}
                />
              ))}
            </div>
          )} */}

          {currentProject?.showNav !== false && (
            <PortfolioNav
              customTabs={currentProject?.tabs}
              currentTab={currentTab}
              onSwitch={handleSwitch}
            />
          )}

          <PortfolioViewImages tab={currentTab} />
        </div>
      </SectionWrapper>

      {/* hypothesis section */}
      <HypothesisSection
        hypothesis={currentProject?.hypothesis}
        subtitle={currentProject?.hypothesisSubtitle}
        hypothesisImage={currentProject?.hypothesisImage}
      />

      {/* Key Features section */}
      <KeyFeaturesSection features={currentProject?.features} />

      {/* Product Impact */}
      {currentProject?.impact !== null && (
        <ProductImpactSection impact={currentProject?.impact} />
      )}

      {/* Our Learnings */}
      <OurLearningSection
        description={currentProject?.learnings?.title}
        steps={currentProject?.learnings?.steps}
      />
    </Layout>
  );
};

const applicationDetails = [
  {
    icon: <MembersSvg />,
    title: 12,
    subTitle: "Team members involved",
  },
  {
    icon: <IndustrySvg />,
    title: "Law",
    subTitle: "Product Industry",
  },
  {
    icon: <DurationSvg />,
    title: "14 Weeks",
    subTitle: "Product Development Duration",
  },
  {
    icon: <LaunchSvg />,
    title: "2024",
    subTitle: "Year of Launch",
  },
];

// const btns = ["Screenshots", "Prototype"];

export default View;

const PortfolioNav = ({ currentTab, onSwitch, customTabs }) => (
  <div className="container flex justify-center gap-6 overflow-y-hidden overflow-x-scroll md:overflow-x-hidden mx-auto mb-10 border-b-4 border-gray-100 lg:gap-16 ">
    {(customTabs || tabs).map(({ id, name }) => (
      <PortfolioTab
        key={id}
        current={id.toLocaleLowerCase() === currentTab?.toLocaleLowerCase()}
        handleClick={() => onSwitch(id)}
        text={name}
      />
    ))}
  </div>
);

const PortfolioTab = ({ text, handleClick, current, className }) => (
  <button
    onClick={handleClick}
    className={`text-primary relative -bottom-1 font-medium text-xl font-tinos py-3 px-0 hover:font-semibold duration-300 ${current ? "font-semibold  border-b-4 border-primary" : "font-normal text-opacity-50"} ${className}`}
  >
    {text}
  </button>
);

const tabs = [
  { id: "mobile", name: "Mobile App View" },
  {
    id: "driver",
    name: "Driver's App",
  },
  {
    id: "admin",
    name: "Admin Dashboard",
  },
];
