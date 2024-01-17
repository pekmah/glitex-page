import React from "react";

const StatCard = ({ number, subtext, className }) => {
  return (
    <div className={`stat-card mt-5 px-5 md:px-0 ${className}`}>
      <h2 className={"h1 text-4xl md:text-8xl text-center text-white"}>
        {number}
      </h2>

      <p className={"text-13 md:text-lg"}>{subtext}</p>
    </div>
  );
};

export default StatCard;
