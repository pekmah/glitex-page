import React from "react";

const StatCard = ({ number, subtext, className }) => {
  return (
    <div className={`stat-card mt-5 ${className}`}>
      <h2 className={"h1 text-4xl md:text-6xl text-white"}>{number}</h2>

      <p className={"text-13 md:text-sm"}>{subtext}</p>
    </div>
  );
};

export default StatCard;
