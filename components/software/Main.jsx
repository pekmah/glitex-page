import { CustomersSection } from "../home";
import React from "react";
import { SectionWrapper } from "../general";

const Main = () => {
  // const { size } = useWindowDimensions();
  return (
    <SectionWrapper className={"flex md:px-5 md:h-[85vh] relative"}>
      {/*  text container   */}
      <div className={"flex-[0.8] center-x flex-col pl-4"}>
        <h1 className={"md:leading-[60px] w-full md:w-4/5"}>
          Software Development
          <br className={"hidden md:flex"} />
          Companies in Nairobi, Kenya <br className={"hidden md:flex"} />
        </h1>
        {/*  qualities list  */}

        {/*  buttons  */}
        {/* <div
          className={
            "center-y-between-x  flex-col md:flex-row gap-5 mr-auto mt-5"
          }
        > */}
        {/* <button>
            <PlaystoreBtnSvg h={size === "sm" ? "35" : "45"} />
          </button> */}

        {/* IOS Button  */}
        {/* <button>
            <IosBtnSvg h={size === "sm" ? "35" : "45"} />
          </button> */}
        {/* </div> */}
        <div className={"w-full h-20 md:h-44 md:flex"} />
      </div>

      {/*  image container   */}
      <div className={"flex-1 center pt-0 relative h-auto pb-12 flex-shrink-0"}>
        <img
          src="/images/mobile/attorney.png"
          alt="bg_logo"
          className={"h-3/4 object-contain "}
        />
      </div>

      {/*  customers  */}
      <CustomersSection />
    </SectionWrapper>
  );
};

export default Main;
