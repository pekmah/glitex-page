import React from "react";

const About = () => {
  return (
    <div
      className={
        "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
      }
    >
      <h1 className="lg:text-4xl sm:text-2xl text-xl font-bold w-[95%] lg:w-[90%] leading-8 md:leading-10 lg:leading-[50px]">
        So what is Hospital Management System / HMIS?
      </h1>

      <p className="md:my-6 lg:text-xl sm:text-lg w-[95%] lg:w-2/3 leading-8 lg:leading-9">
        Hospital Management software Kenya automates processes including
        billing, appointments, scheduling, regulatory compliance and financial
        auditing within hospitals. These applications offer integration across
        the financial, clinical, and operational elements of a healthcare
        practice and enable users to optimize their office workflow and reduce
        their operational expenses. Hospital Management software is related to
        Electronic Medical Records software, Medical Lab software, Medical
        Practice Management software, Medical Billing software, Medical
        Scheduling software and Medical Transcription software.
      </p>
    </div>
  );
};

export default About;
