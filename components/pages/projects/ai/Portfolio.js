import React from "react";

const Portfolio = () => {
  return (
    <div className={"bg-secondary py-4 md:py-8 flex flex-col gap-2"}>
      <div className="flex flex-col md:flex-row my-4">
        {/* image div */}
        <div className="flex flex-row items-center justify-center flex-1 p-4 md:p-10">
          <img
            src="/images/projects/ai-1.webp"
            alt="__"
            className=" object-contain w-full "
          />
        </div>
        {/* text description div */}
        <div className="flex flex-col gap-3 md:gap-6 flex-1 justify-start text-primary pt-8">
          <h5 className="text-2xl px-2 md:px-0 md:text-3xl font-medium">
            Artificial Intelligence
          </h5>
          {/* body */}
          <p className="text-base md:text-lg w-11/12 mx-auto md:mx-0 ">
            Our Artificial Intelligence Software Solutions are revolutionizing
            businesses globally. Harness the power of AI to uncover new
            opportunities for growth, tackle intricate issues, and drive
            innovation within your organization.
          </p>

          <h5 className="text-2xl px-2 md:px-0 md:text-3xl font-medium">
            Machine Learning
          </h5>
          {/* body */}
          <p className="text-base md:text-lg w-11/12 mx-auto md:mx-0 ">
            At Glitex Solutions Limited, we leverage the power of advanced
            machine learning to unlock the full potential of digital data. Our
            cutting-edge algorithms and techniques are utilized to deliver
            accurate predictions, detect anomalies, and address a wide range of
            business challenges. By utilizing our ML solutions, our clients can
            gain a competitive edge, explore new business avenues, and achieve
            exceptional performance levels.
          </p>

          {/* view more button */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
