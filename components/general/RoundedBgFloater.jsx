import React from "react";

const RoundedBgFloater = ({ className }) => {
  return (
    <div
      className={`rounded-full h-32 md:h-72 w-32 md:w-72 bg-bg-yellow absolute z-0 inset-0 md:-mt-8 ${className}`}
    />
  );
};

export default RoundedBgFloater;
