import React from "react";
import Button from "../../general/Button";

const AreYouInSearch = () => {
  return (
    <div className="flex flex-col md:flex-row py-8 lg:py-12 bg-white">
      {/* image div */}

      {/* text description div */}
      <div className="flex flex-col gap-6 flex-1 justify-center items-center">
        <div className="flex flex-col w-[85%] gap-4 md:gap-8">
          <h5 className=" text-2xl md:text-3xl font-medium leding-[50px]">
            Are you in search of the mobile app developers in Kenya?
          </h5>
          {/* body */}
          <div className="">
            <p className="text-base sm:text-lg">
              You are then in the right place. Glitex Solutions Limited is a
              renowned firm that develops both iOS and Android mobile
              applications. At Glitex Solutions Limited, you not only get mobile
              application development services but also the right advises on how
              to implement your app and how to roll it out.
            </p>
            <br />
            <p className="text-base sm:text-lg">
              We have served many countries in the Africa continent and beyond
              the continent. We have our headquarters in Nairobi, Kenya. Contact
              us today.
            </p>
          </div>
          <div className="flex">
            <Button
              className={"bg-primary w-48 text-secondary text-lg"}
              text={"Call us Today!"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 p-4 lg:p-0">
        <img
          src="/images/portfolio/portfolio.png"
          alt="__"
          className="max-h-[595px] w-full object-cover h-auto"
        />
      </div>
    </div>
  );
};

export default AreYouInSearch;
