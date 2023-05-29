import React from "react";

const OutlinedButton = ({
  text,
  handleClick,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`bg-transparent border border-primary px-6 py-1.5 text-primary text-base font-semibold ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {text || children}
    </button>
  );
};

export default OutlinedButton;
