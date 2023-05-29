import React from "react";

const About = () => {
  return (
    <div>
      <div
        className={
          "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
        }
      >
        <h1 className="lg:text-4xl sm:text-2xl text-xl font-bold w-[95%] lg:w-[90%] leading-8 md:leading-10 lg:leading-[50px]">
          So what is a SACCO ERP?
        </h1>

        <p className="md:my-6 lg:text-xl sm:text-lg w-[95%] lg:w-2/3 leading-8 lg:leading-9">
          The Sacco ERP system is a comprehensive solution for managing
          operations in a Sacco or Microfinance institution. It consists of
          various modules that streamline processes from loan application to
          disbursement, savings account management, financial accounting and
          reporting, shares/deposits administration, front office management,
          asset management, and system administration.
        </p>
      </div>
    </div>
  );
};

export default About;
