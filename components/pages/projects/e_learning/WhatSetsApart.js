import React from "react";
import Button from "../../../general/Button";

const WhatSetsApart = () => {
  return (
    <div className="flex py-12 bg-white">
      {/* image div */}

      {/* text description div */}
      <div className="flex flex-col gap-6 flex-1 justify-center items-center">
        <div className="flex flex-col w-[85%] gap-8">
          <h5 className="text-3xl font-medium leding-[50px]">
            Why choose us for e-Learning solutions
          </h5>
          {/* body */}
          <div className="">
            <p className="text-lg">
              Pre-made e-learning portals are uncommon as they have limited
              functionality and cannot cater to individual learning needs or
              focus on the learner. Glitex Solutions suggests custom
              development, which enables the creation of tailored e-learning
              portals. For instance, in one of our projects, we developed a
              learning portal specifically for the needs of construction
              specialists. The portal streamlined learning and training
              activities for vocational and higher educational institutions,
              private training providers, enterprise training managers, and
              individual learners.
            </p>
            <br />
          </div>
          <div className="flex">
            <Button
              className={"bg-primary w-48 text-secondary text-lg"}
              text={"Call us Today!"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 p-4 h-full">
        <img
          src="/images/projects/e-learning-2.jpeg"
          alt="__"
          className="h-[600px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default WhatSetsApart;
