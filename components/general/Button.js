import React from "react";

const Button = ({ text, handleClick, className, ...rest }) => {
  return (
    <button
      className={`bg-primary px-6 py-1.5 text-secondary text-base font-semibold ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
