import React from "react";
import Button from "../../general/Button";
import OutlinedButton from "../../general/OutlinedButton";

const HeaderCarousel = () => {
  return (
    <div
      className={
        "h-[86vh] bg-no-repeat bg-cover flex flex-col justify-center relative"
      }
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url(/images/typing.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:px-8 md:px-16 sm:px-12 px-2 w-full lg:w-[90%] font-bold text-2xl md:text-6xl leading-[50px] md:leading-[70px] pt-5">
        <div className="">
          <span className=" text-primary">
            Software development that helps turn
          </span>
          <span className="text-white">your ideas</span>{" "}
          <span className=" text-primary">into meaningful, tangible</span>{" "}
          <span className="text-white">results</span>
        </div>

        <div className="my-8">
          <div className="flex gap-2 font-light">
            <div className="text-white lg:text-xl text-lg md:text-xl">
              Quality
            </div>
            <div className="text-white lg:text-xl text-lg md:text-xl">.</div>
            <div className="text-white lg:text-xl text-lg md:text-xl">
              Security
            </div>
            <div className="text-white lg:text-xl text-lg md:text-xl">.</div>
            <div className="text-white lg:text-xl text-lg md:text-xl">
              Scalable
            </div>
          </div>

          <div className="mt-7 flex gap-4">
            <Button text={"Talk to Us"} className={"text-[20px] py-2 px-6"} />
            <OutlinedButton
              className={"text-[20px] py-2 px-6"}
              text={"Learn more"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
// DOORSTEP (FROM DONHOLM)
// Doorstep - customer pays for delivery(1)
// Doorstep - Vendor pays delivery(2)
// Doorstep - collect my cash (2)

// ERRAND
// Kasarani seasons - Eldoret(2)
// Donholm -
// Buruburu - Karatina

//Agent to Agent
