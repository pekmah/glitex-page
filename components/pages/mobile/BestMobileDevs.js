import React from "react";
import OutlinedButton from "../../general/OutlinedButton";

const BestMobileDevs = () => {
  return (
    <div className={"bg-primary py-10 flex flex-col gap-2"}>
      <div className="flex my-4 w-10/12 mx-auto">
        {/* text description div */}
        <div className="flex flex-col gap-6 flex-1 justify-center text-secondary">
          <h5 className="text-3xl font-medium leading-[45px]">
            Best mobile app developers in Kenya -<br /> Glitex Solutions Limited
          </h5>
          {/* body */}
          <p className="text-lg w-5/6">
            We have extremely skilled mobile app developers Kenya that help us
            deliver quality mobile application solutions. We develop all types
            of mobile apps including: native apps, hybrid apps, and web apps.
          </p>
          <p className="text-lg w-5/6">
            When you work with us, you’re working with the right team that not
            only develop mobile applications but also pays attention to they key
            services such as app design and development, app testing and quality
            assurance, app maintenance and updates, and app marketing and
            promotion. As product developers, we understand the process and this
            makes us the right team to advice you while we develop your mobile
            application.
          </p>{" "}
          <p className="text-lg w-5/6">
            We have successfully delivered huge number of high quality and
            creative mobile applications for our customers. Our professional
            team of Android and iOS mobile app developers provides industry
            specific mobility solution to meet the requirements of your
            business.
          </p>
          <div className="flex">
            <OutlinedButton
              className={
                "border-secondary text-secondary border-2 text-lg w-44"
              }
              text={"Portfolio"}
            />
          </div>
          {/* view more button */}
        </div>

        {/* image div */}
        <div className="flex items-center justify-center flex-[0.8]">
          <img
            src="/images/clients/leta-mobile.png"
            alt="__"
            className="max-h-[520px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BestMobileDevs;
