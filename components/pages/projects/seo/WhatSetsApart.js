import React from "react";
import Button from "../../../general/Button";

const WhatSetsApart = () => {
  return (
    <div className="flex py-12 bg-white">
      {/* image div */}

      {/* text description div */}
      <div className="flex flex-col gap-6 flex-1 justify-center items-center">
        <div className="flex flex-col w-[85%] gap-8">
          <h5 className="text-3xl font-medium leding-[50px]">
            We will always show up in your business
          </h5>
          {/* body */}
          <div className="">
            <p className="text-lg">
              Working with the best SEO Company in Nairobi and in Kenya can
              always keep your business on top of all search engines.
            </p>
            <br />
          </div>
          <div className="flex">
            <Button
              className={"bg-primary w-48 text-secondary text-lg"}
              text={"Call us Today!"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 p-4 h-full">
        <img
          src="/images/projects/seo-2.png"
          alt="__"
          className="h-[600px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default WhatSetsApart;
