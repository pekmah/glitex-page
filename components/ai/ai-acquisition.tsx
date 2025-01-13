import React from "react";
import { SectionWrapper } from "../general";

export default function AiAcquisition() {
  return (
    <SectionWrapper
      sectionClassName={"bg-white relative py-32"}
      className={""}
      sectionStyles={undefined}
    >
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="p-5 relative">
          <div className="flex justify-between absolute inset-0 gap-5 -z-1">
            <div className="flex-1 bg-c-yellow rounded-3xl" />
            <div className="flex-1" />
            <div className="flex-1 bg-c-yellow rounded-3xl" />
          </div>

          <div className="z-10 relative">
            <img
              className={"max-h-[450px]"}
              src="/images/ai/ai-acquisition.jpg"
              alt="bg_logo"
            />
          </div>
        </div>
        <div className="flex-1 text-primary flex flex-col justify-center">
          <h3
            className={"leading-8 md:leading-11 mb-10 text-primary font-bold"}
          >
            Data Acquisition and Privacy
          </h3>

          <p>
            At Glitex Solutions, we understand that data acquisition is a
            critical foundation for successful AI development. Our team of data
            science and machine learning (ML){" "}
            <strong>
              experts guides you through every step of the data acquisition
              process
            </strong>{" "}
            to ensure robust and efficient data capture, transmission, and
            storage tailored to your unique project needs.
            <br />
            <br />
            We prioritize data privacy and compliance, strictly adhering to
            GDPR, UAE, US, and other relevant jurisdictional data policies.We
            provide strategic advice on how to collect and use only consented
            data responsibly, ensuring the privacy and security of all
            information handled.
          </p>

          <div className="flex mt-10 gap-5 items-center">
            {new Array(4).fill(0).map((_, index) => (
              <img
                key={index}
                className={"max-h-16 object-contain"}
                src={`/images/ai/ai-acquisition-${index + 1}.png`}
                alt="bg_logo"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
