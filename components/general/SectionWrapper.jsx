import React from "react";

const SectionWrapper = ({
  className,
  sectionClassName,
  children,
  sectionStyles,
}) => {
  return (
    <section className={`center ${sectionClassName}`} style={sectionStyles}>
      <div className={`w-full lg:container ${className}`}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
