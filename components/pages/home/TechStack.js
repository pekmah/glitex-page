import React from "react";

const TechStack = () => {
  return (
    <div className={"bg-secondary py-12 flex flex-col gap-2"}>
      {/* Title */}
      <h4
        className={
          "lg:text-3xl md:text-2xl text-xl text-primary font-bold text-center my-5"
        }
      >
        Our tech stack
      </h4>

      <div
        className={
          "flex justify-evenly items-center overflow-x-scroll overflow-y-hidden no-scrollbar lg:gap-10 md:gap-8 gap-5 py-5"
        }
      >
        {list?.map((item, i) => (
          <img key={i} src={item} alt="__" className={"h-20 "} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;

const list = [
  "/images/clients/tech_stack/flutter.png",
  "/images/clients/tech_stack/go.png",
  "/images/clients/tech_stack/js.png",
  "/images/clients/tech_stack/kotlin.png",
  "/images/clients/tech_stack/node.png",
  "/images/clients/tech_stack/python.png",
  "/images/clients/tech_stack/react.png",
  "/images/clients/tech_stack/solidity.png",
  "/images/clients/tech_stack/spring.png",
];
