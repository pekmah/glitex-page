import { CButton } from "../general";
import React from "react";
import SectionWrapper from "../general/SectionWrapper";
import { portfolioData } from "../../providers/projects/data";
import { useRouter } from "next/router";

const WorkDone = () => {
  return (
    <SectionWrapper
      sectionClassName={"relative bg-white pb-20 -mt-10 flex"}
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

        <div className="container grid grid-cols-1 gap-6 py-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 md:p-3">
          {Object.keys(portfolioData).map((item, ind) => (
            <PortfolioItem
              key={ind}
              image={portfolioData[item]?.image}
              title={portfolioData[item]?.title}
              desc={portfolioData[item]?.description}
              type={portfolioData[item]?.type || "mobile"}
              ind={item}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorkDone;

const PortfolioItem = ({ title, image, desc, ind, type }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/portfolio/${ind}`);
  };
  return (
    <div
      className={
        " md:m-5 border-gray-100 border rounded-t-[40px] overflow-hidden"
      }
    >
      <div className={"bg-white overflow-hidden"}>
        <div
          className={"relative gradient-270 w-full h-64 flex justify-center"}
        >
          <img
            src={image}
            alt={"okapy secure"}
            className={`${type === "web" ? "w-full" : "w-1/2"} h-full object-cover object-top `}
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
