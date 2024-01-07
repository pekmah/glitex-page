import React from "react";
import { SectionWrapper } from "../general";
import { CUSTOMERS } from "../../constants";

const Customers = () => {
  return (
    <SectionWrapper
      sectionClassName={
        "z-10 absolute inset-x-0 -bottom-3 md:bottom-0 px-3 md:px-0"
      }
      className={
        "flex justify-between gap-8 md:gap-12 bg-bg-gray rounded-full px-5 md:px-16 py-3 md:py-5 overflow-scroll no-scrollbar"
      }
    >
      {CUSTOMERS.map((customer, ind) => (
        <img
          src={customer}
          key={ind}
          alt={"customer" + ind}
          className={`object-contain ${
            ind === 5
              ? "h-10 md:h-14 my-auto"
              : ind === 6
                ? "h-6 md:h-8 my-auto"
                : ind === 7
                  ? "h-12 my-auto"
                  : "md:h-[70px] h-12 "
          }`}
        />
      ))}
    </SectionWrapper>
  );
};

export default Customers;
