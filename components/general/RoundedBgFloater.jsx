import React from "react";

const RoundedBgFloater = ({ className }) => {
  return (
    <div
      className={`rounded-full h-48 md:h-60 w-48 md:w-60 bg-bg-yellow absolute z-0 inset-0 ml-[30%] md:mt-10 ${className}`}
    />
  );
};

export default RoundedBgFloater;
