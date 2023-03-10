import React from "react";
import Button from "../../general/Button";

const CallUs = () => {
  return (
    <div className="bg-white py-14">
      <div className="flex my-4">
        {/* image div */}
        <div className="flex items-center justify-center flex-1">
          <img
            src="/images/clients/launching.png"
            alt="__"
            className="max-h-[350px] h-auto"
          />
        </div>
        {/* text description div */}
        <div className="flex flex-col gap-6 flex-1 items-start justify-center">
          {/* body */}
          <div className="text-3xl font-semibold text-center leading-10">
            <span className=" text-secondary">Turn your</span>
            <span className="text-primary"> ideas</span>{" "}
            <span className="text-secondary">
              into <br /> reality today
            </span>
            <br />
            <Button
              text={"Call us Today!"}
              className={
                "bg-primary text-secondary px-8 py-4 mx-auto mt-7 text-[28px]"
              }
            />
          </div>
          {/* view more button */}
        </div>
      </div>
    </div>
  );
};

export default CallUs;
