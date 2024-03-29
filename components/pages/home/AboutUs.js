import React from "react";

const AboutUs = () => {
  return (
    <section
      className={
        "min-h-[100vh] bg-primary text-center flex flex-col py-8 md:py-0 md:justify-center items-center"
      }
      id={"about"}
    >
      <h3
        className="lg:text-5xl sm:text-3xl text-xl font-bold lg:leading-[60px] sm:leading-[50px] leading-10"
        data-aos="fade-up"
      >
        Software development company <br />
        in Kenya | Glitex Solutions Limited
      </h3>

      <p
        className="md:my-10 my-3 lg:text-2xl lg:w-10/12 sm:text-xl text-lg "
        data-aos="fade-up"
      >
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

      <div
        className="flex gap-3 sm:gap-5 lg:gap-8 font-semibold about-stats"
        data-aos="fade-up"
      >
        <div className="text-3xl lg:text-6xl sm:text-4xl font-bold">
          <div className="flex justify-center">
            <div className="stats__count">80</div>
            <div className="stats__countt">+</div>
          </div>
          {/* <span className="text-2xl lg:text-4xl sm:text-3xl font-bold tracking-wider">
            67 +
          </span> */}
          <p className="md:text-md text-base font-semibold">
            Projects completed
          </p>
        </div>
        <span className="text-2xl lg:text-4xl sm:text-3xl font-light tracking-wider">
          |
        </span>
        <div className="text-3xl lg:text-6xl sm:text-4xl font-bold">
          <div className="flex justify-center">
            <div className="stats__count">250</div>
            <div className="stats__countt">+</div>
          </div>
          {/* <span className="text-2xl lg:text-4xl sm:text-3xl font-bold tracking-wider">
            113 +
          </span> */}
          <p className="md:text-md text-base font-semibold">Happy clients</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
