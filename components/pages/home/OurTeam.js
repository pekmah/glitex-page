import React from "react";
import { FiChevronRight } from "react-icons/fi";

const OurTeam = () => {
  return (
    <div className={"bg-secondary py-12 flex flex-col gap-2"}>
      {/* Title */}
      <h4
        className={
          "lg:text-4xl md:text-3xl text-2xl text-primary font-bold text-center"
        }
      >
        Meet Our Team
      </h4>
      <div className="flex justify-center mx-auto relative">
        <div className="flex justify-center gap-5 lg:mt-8 mt-5 ">
          <Member src={"/images/clients/member.png"} />
          <Member src={"/images/clients/member.png"} />
          <Member src={"/images/clients/member.png"} />
          <Member src={"/images/clients/member.png"} />
        </div>
        <ScrollBtn className={"absolute top-24 -right-[10%] z-20"} />
      </div>
    </div>
  );
};

export default OurTeam;

const Member = ({ src, name, role }) => (
  <div className="w-44">
    <img src={src} alt="team-member" className="w-full" />

    {/* Power-Apps  Power-Automate Dataverse  Power-BI  Power Virtual-Agents  Power-portals  */}
    <div className={"text-center py-2"}>
      <h3 className="text-primary font-semibold text-base">Peter Muhia</h3>
      <span className="text-primary">CEO</span>
    </div>
  </div>
);

const ScrollBtn = ({ className }) => (
  <button
    className={`rounded-full w-14 h-14 flex items-center justify-center border-2 border-primary ${className}`}
  >
    <FiChevronRight className="text-4xl text-primary" />
  </button>
);
