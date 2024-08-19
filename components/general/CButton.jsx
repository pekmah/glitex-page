import React from "react";

const CButton = ({
  text,
  handleClick,
  className,
  left = null,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      className={`btn flex items-center ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {left} {text}
    </button>
  );
};

export default CButton;
