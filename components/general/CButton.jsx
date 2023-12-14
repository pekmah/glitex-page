import React from "react";

const CButton = ({ text, handleClick, className, ...rest }) => {
  return (
    <button className={`btn ${className}`} onClick={handleClick} {...rest}>
      {text}
    </button>
  );
};

export default CButton;
