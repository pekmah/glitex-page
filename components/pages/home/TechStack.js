import React from "react";

const TechStack = () => {
  return (
    <div className={"bg-secondary py-4 md:py-8 lg:py-12 flex flex-col gap-2"}>
      {/* Title */}
      <h4
        className={
          "lg:text-3xl md:text-2xl text-xl text-primary font-bold text-center my-5"
        }
        data-aos="fade-up"
      >
        Our tech stack
      </h4>

      {/* <div
        className={
          " w-full flex justify-center pl-80 items-center overflow-x-scroll no-scrollbar lg:gap-10 md:gap-8 gap-5 py-3 lg:py-5"
        }
      >
        {list?.map((item, i) => (
          <img
            key={i}
            src={item}
            alt="__"
            className={" w-20 sm:w-24 lg:w-28 object-cover "}
          />
        ))}
      </div> */}

      <div className="flex overflow-x-scroll pb-10 no-scrollbar w-full ">
        <div className="flex flex-nowrap w-full justify-evenly md:ml-0 sm:ml-40  ml-72">
          {/* <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div> */}
          {list?.map((item, i) => (
            <div className="inline-block px-1">
              <img
                key={i}
                src={item}
                alt="__"
                className={" object-contain w-24 h-24 max-w-xs"}
              />
            </div>
          ))}
        </div>
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
