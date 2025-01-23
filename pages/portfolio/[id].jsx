import {
  CButton,
  PortfolioViewHeader,
  PortfolioViewImages,
  SectionWrapper,
} from "../../components";
import React, { useMemo } from "react";

import Layout from "../../layout";
import { portfolioData } from "../../providers/projects/data";
import { useParams } from "next/navigation";
import {
  DurationSvg,
  LaunchSvg,
  IndustrySvg,
  MembersSvg,
} from "../../public/icons/portfolio";

const View = () => {
  const [currentTab] = React.useState("mobile"); // mobile/admin
  const [currentBtn, setCurrentBtn] = React.useState(btns[0]);

  const params = useParams();

  const currentProject = useMemo(() => {
    if (params?.id) {
      return portfolioData[params?.id];
    } else {
      return null;
    }
  }, [params?.id]);

  const handleSwitch = (tab) => {};

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
            Okapy Customer Application
          </h1>
          <p className={" my-8 text-white md:w-1/2 text-center leading-8"}>
            Okapy Secure is a tech-driven end-to-end local and cross border
            goods transport platform for individuals and businesses. Okapy
            partners with retailers, manufacturers, suppliers, and startups to
            transport goods and shop directly from the U.S. stores and delivers
            to your door step.
          </p>

          <div
            className={
              "bg-none py-8 w-full flex flex-row flex-wrap justify-evenly"
            }
          >
            {applicationDetails?.map((item, index) => (
              <div
                key={index}
                className={
                  "w-1/5 border border-[#0066B3] backdrop-blur-sm rounded-2xl p-5 py-4 text-white"
                }
              >
                {/*  icon  */}
                <div className={"flex justify-end pb-1"}>{item.icon}</div>

                {/* title */}
                <h5 className={"text-white text-xl sm:text-2xl md:text-[28px]"}>
                  {item.title}
                </h5>
                <p
                  className={
                    "font-tinos text-base md:text-lg tracking-wide mt-2"
                  }
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className={"px-3 min-h-[50vh] -mt-64 z-0 lg:mx-24"}
        sectionClassName={" relative"}
        noContainer
      >
        {/*  images   */}
        <div
          className={
            "relative bg-white py-5 px-10 sm:rounded-[40px] lg:rounded-[80px]"
          }
        >
          {/*buttons*/}
          <div className={"flex justify-center gap-5 py-10"}>
            {btns?.map((btn, index) => (
              <CButton
                className={`py-3.5 px-12 border min-w-44 text-center justify-center ${btn === currentBtn ? "border-white bg-primary" : "border-primary bg-white text-primary"}  text-base`}
                text={btn}
              />
            ))}
          </div>

          <PortfolioNav currentTab={currentTab} onSwitch={handleSwitch} />

          <PortfolioViewImages tab={currentTab} />
        </div>
      </SectionWrapper>
    </Layout>
  );
};

const applicationDetails = [
  {
    icon: <MembersSvg />,
    title: 12,
    description: "Team members involved",
  },
  {
    icon: <IndustrySvg />,
    title: "Law",
    description: "Product Industry",
  },
  {
    icon: <DurationSvg />,
    title: "14 Weeks",
    description: "Product Development Duration",
  },
  {
    icon: <LaunchSvg />,
    title: "2024",
    description: "Year of Launch",
  },
];

const btns = ["Screenshots", "Prototype", "Video"];

{
  /*<PortfolioViewHeader*/
}
{
  /*  description={currentProject?.description}*/
}
{
  /*  title={currentProject?.title}*/
}
{
  /*/>*/
}
{
  /*asdfasdfasd*/
}
{
  /*/!* nav *!/*/
}
{
  /*/!* <PortfolioNav currentTab={currentTab} onSwitch={handleSwitch} /> *!/*/
}
{
  /*/!* mobile images *!/*/
}
{
  /*<PortfolioViewImages tab={currentTab} />*/
}

export default View;

const PortfolioNav = ({ currentTab, onSwitch }) => (
  <div className="container flex justify-center gap-10 mx-auto mb-10 border-b-4 border-gray-100 lg:gap-16 ">
    {tabs.map(({ id, name }) => (
      <PortfolioTab
        key={id}
        current={id.toLocaleLowerCase() === currentTab.toLocaleLowerCase()}
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
