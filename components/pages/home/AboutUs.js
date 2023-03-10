import React from "react";

const AboutUs = () => {
  return (
    <div
      className={
        "h-[100vh] bg-primary text-center flex flex-col justify-center items-center"
      }
    >
      <h3 className="lg:text-5xl sm:text-3xl text-xl font-bold lg:leading-[60px] sm:leading-[50px] leading-10">
        Software development company <br />
        in Kenya | Glitex Solutions Limited
      </h3>

      <p className="my-10 lg:text-2xl sm:text-xl text-lg ">
        Glitex Solutions Limited is a tech-solutions company built by a group of
        <br />
        visionary young and passionate individuals, dedicated to help our
        <br />
        clients continuously create value for their customers.
        <br />
        <br />
        We believe in transforming ideas into reality through technology.
        <br />
        Dedicating our lives to providing our clients with top-notch software
        <br />
        solutions that serves their business needs right. You can count on us to
        <br />
        convert your business use-case into an innovative software solution
        <br />
        leveraging modern day tech stacks.
      </p>

      <div className="flex gap-8 font-semibold">
        <div>
          <span className="text-4xl font-bold tracking-wider">
            67 +
          </span>
          <p className="text-md font-semibold">Projects completed</p>
        </div>
        <span className="text-4xl font-light tracking-wider">
          |
        </span>
        <div>
          <span className="text-4xl font-bold tracking-wider">
            113 +
          </span>
          <p className="text-md font-semibold">Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
