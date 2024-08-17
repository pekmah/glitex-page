import { CButton } from "../general";
import React from "react";
import SectionWrapper from "../general/SectionWrapper";
import { portfolioData } from "../../providers/projects/data";
import { useRouter } from "next/router";

const WorkDone = () => {
  return (
    <SectionWrapper
      sectionClassName={"relative bg-white pb-20 -mt-10  flex"}
      className={"py-10 md:py-3 pt-20 md:pt-0 px-5 md:px-0 min-h-screen"}
    >
      {/* */}
      <div className="">
        <h2
          className={
            "w-full mx-auto md:w-1/2 leading-8 md:leading-11 mb-2 md:mt-24 text-center"
          }
        >
          Some of the work we have done
        </h2>
        <p
          className={
            "w-full md:w-3/4 mx-auto leading-6 my-2 md:my-5 text-base text-primary text-left md:text-center"
          }
        >
          Okapy Secure is a tech-driven end-to-end local and cross border goods
          transport platform for individuals and businesses. Okapy partners with
          retailers, manufacturers, suppliers, and startups to transport goods
          and shop directly from the U.S. stores and delivers to your door step.
        </p>

        <div className="container grid grid-cols-1 gap-6 py-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {Object.keys(portfolioData).map((item, ind) => (
            <PortfolioItem
              key={ind}
              image={"/images/portfolio/attorney.png"}
              title={portfolioData[item]?.title}
              desc={portfolioData[item]?.description}
              ind={item}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorkDone;

const PortfolioItem = ({ title, image, desc, ind }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/portfolio/${ind}`);
  };
  return (
    <div
      className={
        "w-full m-5 border-gray-100 border rounded-t-[40px] overflow-hidden"
      }
    >
      <div className={"bg-white overflow-hidden"}>
        <div className={"relative gradient-270 w-full h-64 pt-10"}>
          <img
            src={image}
            alt={"okapy secure"}
            className={"w-full h-full object-contain object-top"}
          />
        </div>
        <div className="p-3">
          <div className={"py-3 px-2"}>
            <h3
              className={"text-2xl md:text-3xl text-yellow-500 my-1 truncate"}
            >
              {title}
            </h3>
            <p className={"text-sm text-gray-600 line-clamp-2 leading-6"}>
              {desc}
            </p>
          </div>

          <CButton
            className={
              "px-6 text-xs md:text-base font-normal text-white hover:bg-white hover:text-primary hover:border border-primary cursor-pointer"
            }
            text={"View Project Details"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
