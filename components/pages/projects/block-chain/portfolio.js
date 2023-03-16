import React from "react";
import OutlinedButton from "../../../general/OutlinedButton";

const Portfolio = () => {
  return (
    <div className={"bg-secondary py-10 flex flex-col gap-2"}>
      <div className="flex my-4">
        {/* image div */}
        <div className="flex items-center justify-center flex-1 p-10">
          <img
            src="/images/projects/block-chain-1.jpeg"
            alt="__"
            className=" object-cover h-[550px]"
          />
        </div>
        {/* text description div */}
        <div className="flex flex-col gap-6 flex-1 justify-center text-primary">
          <h5 className="text-3xl font-medium">
            Best blockchain app developers in Nairobi Kenya
          </h5>
          {/* body */}
          <p className="text-lg w-11/12">
            We live in a digital world that is constantly advancing towards a
            more technologically advanced and science-oriented future. Various
            types of technology are driving this progress, and one of the most
            significant is Blockchain technology, developed by Blockchain
            developers. Blockchain technology has a lot to offer our world,
            providing industries with a democratic, decentralized, secure, and
            efficient system. This technology can be used to record and transmit
            data in a highly secure manner.
          </p>

          <div className="flex">
            <OutlinedButton
              className={"border-primary text-primary border-2 text-lg w-44"}
              text={"Portfolio"}
            />
          </div>
          {/* view more button */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
