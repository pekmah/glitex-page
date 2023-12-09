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
      className={`border-2 border-primary px-4 py-2 rounded-full text-primary font-dm-sans font-bold text-sm ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default CButtonOutlined;
