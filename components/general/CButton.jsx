import React from "react";

const CButton = ({ text, handleClick, className, left = null, ...rest }) => {
  return (
    <button
      className={`btn flex items-center ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {left} {text}
    </button>
  );
};

export default CButton;
