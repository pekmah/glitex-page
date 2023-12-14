import React from "react";

const CButtonGhost = ({ text, className, handleClick, ...rest }) => {
  return (
    <button
      className={`bg-none shrink-0 focus:bg-bg-blue hover:bg-bg-blue p-3 rounded-full text-primary font-dm-sans font-bold text-sm ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default CButtonGhost;
