import React from "react";

const Description = () => {
  return (
    <div className="bg-primary py-8">
      {/* image div */}
      <div className="flex items-center justify-center flex-1">
        <img
          src="/images/clients/leta-mobile.png"
          alt="__"
          className="max-h-[500px] h-auto"
        />
      </div>
      {/* text description div */}
      <div className="flex flex-col gap-6 flex-1 justify-center ">
        <h5 className="text-3xl mt-5 text-center font-medium">
          Leta Mobile Application
        </h5>

        {/* body */}
        <p className="text-xl w-9/12 text-center mx-auto">
          Mobile application service are aimed at building iOS & Android
          applications that effectively complement or substitute web solutions.
          Having delivered 50+ mobile app development projects so far, Glitex
          ensures app success by delivering striking UI, secure app code, and
          resilient back ends.
        </p>
      </div>
    </div>
  );
};

export default Description;
