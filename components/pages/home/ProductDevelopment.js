import React from "react";
import Laptop from "../../../assets/Laptop";
import LaptopTwo from "../../../assets/LaptopTwo";
import Light from "../../../assets/Light";
import TestTools from "../../../assets/TestTools";

const ProductDevelopment = () => {
  return (
    <div className={"bg-secondary py-12 flex flex-col gap-2"}>
      {/* Avatar */}

      <div className="flex justify-center">
        <div className="w-28 h-28 flex items-center justify-center rounded-full bg-primary ">
          <Laptop />
        </div>
      </div>
      {/* Title */}
      <h4
        className={
          "lg:text-3xl md:text-2xl text-xl text-primary font-bold text-center my-2 md:my-5"
        }
      >
        Startup product development
      </h4>

      <p className="text-center text-primary ">
        As a startup, building, testing, and refining your product can be a
        daunting task. That's where a <strong>Glitex Solutions</strong> comes
        in. <br className="hidden md:block" /> We have the expertise and
        experience to help you bring your product to life, and ensure that it
        meets the needs and expectations of your customers.
      </p>

      {/* procedure */}
      <div className="flex flex-col lg:flex-row lg:justify-center gap-3 sm:gap-5 lg:gap-8 mt-5 lg:mt-10 lg:w-10/12 md:w-11/12 w-full mx-auto px-3 md:px-1 text-center">
        <Item
          icon={<Light />}
          title={"Define"}
          desc={
            "Our team of designers, developers will work with you to understand your vision for your product, and help you bring it to fruition through custom software development. "
          }
        />{" "}
        <Item
          icon={<LaptopTwo />}
          title={"Build & Test"}
          desc={
            "We'll help you build a robust, scalable, and user-friendly product that meets your business goals. Once your product is built, we'll work with you to test and refine it, ensuring that it meets the highest quality standards.  "
          }
        />
        <Item
          icon={<TestTools />}
          title={"Iterate & Support"}
          desc={
            "Throughout the process, we'll be there to support you and offer guidance, ensuring that your product is a success. With our help, you'll be able to confidently bring your product to market, knowing that it has been thoroughly tested and refined to meet the needs of your customers.            "
          }
        />
      </div>
    </div>
  );
};

export default ProductDevelopment;
const Item = ({ icon, desc, title }) => (
  <div className="flex flex-col gap-5 items-center max-w-[440px]">
    {/* // icon */}
    <div className="h-16 flex items-center justify-center">{icon}</div>
    {/* // title */}
    <h6 className="font-semibold text-primary text-lg">{title}</h6>
    {/* // description */}
    <p className="text-primary">{desc}</p>
  </div>
);
