import React from "react";

const CButtonOutlined = ({
  text,
  handleClick,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`border border-primary px-4 py-2.5 rounded-full text-primary font-dm-sans font-semibold text-sm ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default CButtonOutlined;
