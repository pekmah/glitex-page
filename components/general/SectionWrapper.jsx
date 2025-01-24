import React from "react";

const SectionWrapper = ({
  className,
  sectionClassName,
  children = <></>,
  sectionStyles,
  noContainer = false,
}) => {
  return (
    <section className={`center ${sectionClassName}`} style={sectionStyles}>
      <div
        className={`w-full ${noContainer ? "" : "lg:container"} ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
