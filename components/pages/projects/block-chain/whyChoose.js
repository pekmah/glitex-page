import React from "react";

const WhyChoose = () => {
  return (
    <div
      className={
        " bg-primary text-center flex flex-col justify-center py-6 md:py-12"
      }
    >
      <h3 className="lg:text-4xl sm:text-3xl text-xl font-bold lg:leading-[50px] sm:leading-10 leading-8 lg:w-[85%] mx-auto mb-2 md:mb-5">
        Why choose Glitex Solutions Limited for Blockchain Development Services
      </h3>

      <div className="md:w-[70%] mx-auto   ">
        <p className="text-base md:text-lg w-11/12 mx-auto md:mx-0 md:min-h-[300px]">
          Glitex Solutions Limited has the ability to guide you in utilizing the
          capabilities of. Blockchain and developing solutions tailored to your
          business operations. Engage us as the leading Blockchain company in
          Nairobi, Kenya for enterprise grade Blockchain solutions, expert
          consultancy, and bespoke Blockchain development services. Hire our
          Blockchain developers in Nairobi, Kenya, to enhance the security and
          mobility of your enterprise through the implementation of cutting-edge
          distributed ledger systems, smart contracts, and more. As one of the
          top Blockchain development firms in Nairobi, Kenya, we prioritize the
          needs of our clients and incorporate key aspects of Blockchain
          technology.
        </p>

        <p className="text-base md:text-lg w-11/12 mx-auto md:mx-0 md:min-h-[300px]">
          We can also assist you in advancing your business and standing out
          from competitors through Cryptocurrency Development. We offer tailored
          Blockchain solutions for various projects to create a swift,
          remarkable, and secure image for your business. As a top Blockchain
          company in Kenya, we provide 24/7
        </p>

        <p className="my-4 md:my-10 lg:text-xl sm:text-lg text-base">
          customer support and industry-specific Blockchain services that have
          been successfully implemented across major areas of Kenya.
        </p>
      </div>

      <h3 className="lg:text-2xl text-xl font-bold  mx-auto mb-5">
        Our Industry-Specific Blockchain Development Services:
      </h3>
      {/* VStack */}
      <div className="flex flex-col gap-3 lg:w-5/12 mx-auto">
        {/* Services */}
        <ServiceItem
          title={"Solidity Development"}
          body={`As a leading Blockchain company in Nairobi,
Kenya, our team of experts use the high-level programming language for
smart contracts on the Ethereum platform using Solidity.`}
        />
        <ServiceItem
          title={"Virtual Currency: "}
          body={`We offer services for creating secure and transparent
          Blockchain-based virtual currency for e-commerce.`}
        />
        <ServiceItem
          title={"Private Blockchain:"}
          body={`We prioritize security and can be the ideal choice to
          hire as private Blockchain developers in Kenya, which can benefit your
          business.`}
        />
        <ServiceItem
          title={"POC Development:"}
          body={`We demonstrate the feasibility and potential of
          Blockchain applications in various industries such as healthcare and
          banking through POC development.`}
        />
        <ServiceItem
          title={"Cryptocurrency Wallet Development: "}
          body={`We specialize in creating multi-
          cryptocurrency wallet solutions that can be registered as transactions
          under Blockchain systems.`}
        />
        <ServiceItem
          title={"Blockchain Consulting: "}
          body={`Our skilled and experienced Blockchain
          developers and designers focus on successful implementation of
          Blockchain technology to achieve optimal results.`}
        />
        <ServiceItem
          title={"Smart Contract: "}
          body={`We design and develop business contracts that are self-
          executed to automate processes through smart contracts in Blockchain
          application development solutions.`}
        />
      </div>
    </div>
  );
};

export default WhyChoose;
const ServiceItem = ({ title, body }) => (
  <div className="text-center ">
    {/* // title */}
    <h6 className="font-bold text-lg">{title}</h6>

    {/* // body */}
    <p className="leading-8 sm:text-lg text-base px-2">{body}</p>
  </div>
);
