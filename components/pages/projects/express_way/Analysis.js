import React from "react";
import Image from "next/image";

import HazardSvg from "../../../../public/icons/Hazard";
import ExpresswayImg from "../../../../public/images/expressway.jpg";

const Analysis = () => {
  return (
    <div className={"flex flex-col md:flex-row md:gap-x-5 my-10"}>
      <div className={"flex-1 flex flex-col justify-center"}>
        <h1 className={"text-3xl md:text-4xl font-bold"}>
          Here's the expressway app
        </h1>

        <p className={"mt-5 text-[15px] md:text-base leading-7"}>
          We analyzed how new and experienced motorists use the expressway app
          and discovered{" "}
          <span className={"font-semibold"}> three key challenges:</span>
        </p>

        <ul className={"flex flex-col gap-y-4 mt-4 text-[#2C2C2C]"}>
          {challanges?.map((challange, ind) => (
            <li key={ind} className={"flex gap-2 text-sm md:text-base"}>
              <div className={"flex-shrink-0"}>
                <HazardSvg />
              </div>

              {challange}
            </li>
          ))}
        </ul>
      </div>
      <div className={"flex-1 mt-5 md:mt-0"}>
        <Image
          src={ExpresswayImg}
          alt={"expressway"}
          className={"object-cover h-full rounded-tl-[50px] rounded-br-[50px]"}
          height={800}
        />
      </div>
    </div>
  );
};

export default Analysis;

const challanges = [
  "Traffic at exits due to slow MTC payments",
  "Monitoring and recharging ETC balance",
  "Finding entry points and exits based on location and destination",
];
