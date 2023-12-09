import React from "react";

const SectionWrapper = (className, sectionClassName, children) => {
  return (
    <section className={`center ${sectionClassName}`}>
      <div className={`lg:container ${className}`}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
