import React from "react";

const AboutUs = () => {
  return (
    <div
      className={
        "min-h-[100vh] bg-primary text-center flex flex-col py-8 md:py-0 md:justify-center items-center"
      }
      data-aos="fade-up"
    >
      <h3 className="lg:text-5xl sm:text-3xl text-xl font-bold lg:leading-[60px] sm:leading-[50px] leading-10">
        Software development company <br />
        in Kenya | Glitex Solutions Limited
      </h3>

      <p className="md:my-10 my-3 lg:text-2xl sm:text-xl text-lg ">
        Glitex Solutions Limited is a tech-solutions company built by a group of
        visionary young and passionate individuals, dedicated to help our
        clients continuously create value for their customers.
        <br />
        <br /> We believe in transforming ideas into reality through technology.
        Dedicating our lives to providing our clients with top-notch software
        solutions that serves their business needs right. You can count on us to
        convert your business use-case into an innovative software solution
        leveraging modern day tech stacks.
      </p>

      <div className="flex gap-3 sm:gap-5 lg:gap-8 font-semibold">
        <div>
          <span className="text-2xl lg:text-4xl sm:text-3xl font-bold tracking-wider">
            67 +
          </span>
          <p className="md:text-md text-base font-semibold">
            Projects completed
          </p>
        </div>
        <span className="text-2xl lg:text-4xl sm:text-3xl font-light tracking-wider">
          |
        </span>
        <div>
          <span className="text-2xl lg:text-4xl sm:text-3xl font-bold tracking-wider">
            113 +
          </span>
          <p className="md:text-md text-base font-semibold">Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
