import React from "react";
import Button from "../../general/Button";
import OutlinedButton from "../../general/OutlinedButton";

const Portfolio = () => {
  return (
    <div className="bg-primary p-4 sm:p-8 lg:p-14">
      <div className="flex flex-col items-center gap-2">
        <h4
          className={
            "lg:text-5xl md:text-4xl text-3xl text-secondary font-bold text-center"
          }
        >
          What have we done so far
        </h4>

        <div className="rounded-full w-40 lg:w-56 h-2 lg:h-3 bg-secondary mt-6" />
      </div>

      {/* mobile application development (1) */}
      <div className="flex my-4">
        {/* image div */}
        <div className="flex items-center justify-center flex-1">
          <img
            src="/images/clients/leta-mobile.png"
            alt="__"
            className="max-h-[595px] h-auto"
          />
        </div>
        {/* text description div */}
        <div className="flex flex-col gap-6 flex-1 justify-center">
          <h5 className="text-4xl font-medium">Mobile Application</h5>

          {/* body */}
          <p className="text-xl w-2/3">
            Mobile application service are aimed at building iOS & Android
            applications that effectively complement or substitute web
            solutions. Having delivered 50+ mobile app development projects so
            far, Glitex ensures app success by delivering striking UI, secure
            app code, and resilient back ends.
          </p>

          <div className="flex">
            <OutlinedButton
              className={"border-secondary text-secondary border-2 text-lg"}
              text={"View more"}
            />
          </div>
          {/* view more button */}
        </div>
      </div>

      {/* mobile application development (2) */}
      <div className="flex my-4">
        {/* text description div */}
        <div className="flex flex-col gap-6 flex-1 justify-center">
          <h5 className="text-4xl font-medium">E-Commerce Application</h5>

          {/* body */}
          <p className="text-xl w-2/3">
            Mobile application service are aimed at building iOS & Android
            applications that effectively complement or substitute web
            solutions. Having delivered 50+ mobile app development projects so
            far, Glitex ensures app success by delivering striking UI, secure
            app code, and resilient back ends.
          </p>

          <div className="flex">
            <OutlinedButton
              className={"border-secondary text-secondary border-2 text-lg"}
              text={"View more"}
            />
          </div>

          {/* view more button */}
        </div>
        {/* image div */}
        <div className="flex items-center justify-center flex-1">
          <img
            src="/images/clients/leta-mobile.png"
            alt="__"
            className="max-h-[595px] h-auto"
          />
        </div>
      </div>
      {/* E-Commerce application development */}
      <div className="flex justify-center items-center p-3">
        <Button
          className={" text-[#FFC53F] bg-secondary py-2.5 text-lg px-10"}
          text={"View more projects"}
          style={{ color: "#FFC53F" }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
