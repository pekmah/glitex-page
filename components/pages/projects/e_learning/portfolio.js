import React from "react";
import OutlinedButton from "../../../general/OutlinedButton";

const Portfolio = () => {
  return (
    <div className={"bg-secondary py-10 flex flex-col gap-2"}>
      <div className="flex my-4">
        {/* image div */}
        <div className="flex items-center justify-center flex-1 p-10">
          <img
            src="/images/projects/e-learning-1.jpeg"
            alt="__"
            className=" object-cover h-[500px]"
          />
        </div>
        {/* text description div */}
        <div className="flex flex-col gap-6 flex-1 justify-center text-primary">
          <h5 className="text-3xl font-medium">
            So what is an ecommerce system?
          </h5>
          {/* body */}
          <p className="text-lg w-11/12 h-[300px]">
            An e-learning portal is a website that provides learners with the
            ability to interact and collaborate on e-learning content, such as
            courses, presentations, podcasts, and tests, as well as content
            management for e-learning providers. To get a firsthand look at the
            e-learning portal, you can view our interactive demonstration on the
            SharePoint learning portal.
          </p>

          <div className="flex">
            <OutlinedButton
              className={"border-primary text-primary border-2 text-lg w-44"}
              text={"Portfolio"}
            />
          </div>
          {/* view more button */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
