import React from "react";
import OutlinedButton from "../../../general/OutlinedButton";

const Portfolio = () => {
  return (
    <div className={"bg-secondary py-4 md:py-8 flex flex-col"}>
      {/* Hostpital system */}
      <div className="flex flex-col md:flex-row ">
        {/* image div */}
        <div className="flex flex-row items-center justify-center flex-1 p-4 md:px-10">
          <img
            src="/images/projects/management/management-2.webp"
            alt="__"
            className=" object-contain lg:h-[400px] "
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-6 flex-1 justify-center items-center text-primary pt-8 ">
          <h5 className="text-xl md:text-2xl px-2 md:px-0 md:text-3xl font-medium text-center">
            Healthcare management systems
          </h5>

          <div className="flex px-3">
            <a href="/services/management/health">
              <OutlinedButton
                className={
                  "border-primary text-primary border-2 md:text-lg w-44"
                }
                text={"View"}
              />
            </a>
          </div>
          {/* view more button */}
        </div>
      </div>

      {/* School systems */}
      <div className="flex flex-col md:flex-row ">
        <div className="hidden md:flex flex-col gap-3 md:gap-6 flex-1 justify-center items-center text-primary pt-8 ">
          <h5 className="text-xl md:text-2xl px-2 md:px-0 md:text-3xl font-medium text-center">
            School management systems
          </h5>

          <div className="flex px-3">
            <a href="/services/management/school">
              <OutlinedButton
                className={
                  "border-primary text-primary border-2 md:text-lg w-44"
                }
                text={"View"}
              />
            </a>
          </div>
          {/* view more button */}
        </div>

        {/* image div */}
        <div className="flex flex-row items-center justify-center flex-1 p-4 md:px-10">
          <img
            src="/images/projects/management/management-1.webp"
            alt="__"
            className=" object-contain lg:h-[400px] "
          />
        </div>

        <div className="flex md:hidden flex-col gap-3 md:gap-6 flex-1 justify-center items-center text-primary pt-8 ">
          <h5 className="text-xl md:text-2xl px-2 md:px-0 md:text-3xl font-medium text-center">
            School management systems
          </h5>

          <div className="flex px-3">
            <a href="/services/management/school">
              <OutlinedButton
                className={
                  "border-primary text-primary border-2 md:text-lg w-44"
                }
                text={"View"}
              />
            </a>
          </div>
          {/* view more button */}
        </div>
      </div>

      {/* Sacco system */}
      <div className="flex flex-col md:flex-row ">
        {/* image div */}
        <div className="flex flex-row items-center justify-center flex-1 p-4 md:px-10">
          <img
            src="/images/projects/management/management-3.webp"
            alt="__"
            className=" object-contain lg:h-[400px] "
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-6 flex-1 justify-center items-center text-primary pt-8 ">
          <h5 className="text-xl md:text-2xl px-2 md:px-0 md:text-3xl font-medium text-center">
            Sacco management systems
          </h5>

          <div className="flex px-3">
            <a href="/services/management/sacco">
              <OutlinedButton
                className={"border-primary text-primary border-2 text-lg w-44"}
                text={"View"}
              />
            </a>
          </div>
          {/* view more button */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
