import React from "react";
import { Card, SectionWrapper } from "../general";
import { services } from "../../providers/services/data";

const WhatWeDo = () => {
  return (
    <SectionWrapper
      sectionClassName={"bg-white "}
      className={"py-16 md:py-32 px-5 md:px-0 text-center"}
    >
      <h2 className={"leading-8 md:leading-11 text-primary"}>What we do</h2>
      <h2
        className={
          "text-center leading-7 md:leading-10 font-normal my-0 md:my-2 "
        }
      >
        We’ve got the skills and workforce you can rely{" "}
        <br className={"hidden md:block"} /> on to push your business to the
        next level.
      </h2>

      {/*  services grid  */}
      <div
        className={
          "my-10 md:my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        }
      >
        {services.map((service, ind) => (
          <Card
            key={ind}
            title={service.title}
            body={service.desc}
            serviceUrl={`/${service?.to}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatWeDo;
