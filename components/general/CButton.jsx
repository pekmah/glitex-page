import React from "react";

const CButton = ({ text, handleClick, className, ...rest }) => {
  return (
    <button
      className={`bg-primary px-4 py-2.5 rounded-full text-white font-dm-sans font-bold text-sm ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default CButton;
