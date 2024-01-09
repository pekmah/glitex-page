import React from "react";
import { SectionWrapper } from "../general";
import { CustomersSection } from "../home";
import { IosBtnSvg, PlaystoreBtnSvg } from "../../public/icons";

const Main = () => {
  return (
    <SectionWrapper className={"flex md:px-5 md:min-h-[65vh] relative"}>
      {/*  text container   */}
      <div className={"flex-1 center-x flex-col pl-4"}>
        <h1 className={"md:leading-[60px] w-full md:w-4/5"}>
          Mobile App
          <br className={"hidden md:flex"} />
          Developers in Kenya
          <br className={"hidden md:flex"} />
          Android apps | IOS apps
        </h1>
        {/*  qualities list  */}

        {/*  buttons  */}
        <div className={"center-y-between-x gap-5 mr-auto mt-1 md:mt-5"}>
          <button>
            <PlaystoreBtnSvg />
          </button>

          {/* IOS Button  */}
          <button>
            <IosBtnSvg />
          </button>
        </div>
        <div className={"w-full h-20 md:h-44 md:flex"} />
      </div>

      {/*  image container   */}
      <div className={"flex-1 center pt-0 relative h-auto"}>
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
