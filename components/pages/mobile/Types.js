import React from "react";

const Types = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 0.81)), url(/images/mobile_dev/mobile-dev.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={" py-14 flex flex-col gap-2 relative "}
    >
      <div className="lg:px-20 md:px-16 sm:px-12 px-8 w-full font-bold text-3xl md:text-4xl flex items-center justify-center text-primary">
        Types of mobile apps
      </div>

      <div className="my-5 text-center">
        <h4 className="text-2xl font-semibold text-primary my-6">
          Native Mobile applications
        </h4>
        <div className="w-[90vw] text-primary mx-auto">
          <p>
            Native apps mobile applications are developed for specific operating
            system. For instance mobile applications developed specifically to
            be used on iOS can’t run on other operating systems like Android.
            Also mobile application developed to run on Android operating system
            can’t run on iOS. This is because the mobile applications have been
            developed to run only on one platform.
          </p>
          <br />

          <p>
            The following are the technologies used:
            <br /> Swift, Objective-C, React, Java, Kotlin, Python.
          </p>
        </div>
      </div>

      <div className="my-5 text-center">
        <h4 className="text-2xl font-semibold text-primary mb-6">
          Hybrid Mobile applications
        </h4>

        <div className="w-[90vw] text-primary mx-auto">
          <p>
            This type of mobile application can run on multiple platforms, for
            instace iOS and Android, while using a single codebase. So this
            means that the apps run across different operating systems. Apps
            like Twitter, Instagram, Uber and so many apps on Play store and App
            store are hybrid.
          </p>
          <br />

          <p>
            The following are technologies used to implement hybrid mobile
            applications <br /> React Native, Flutter, Ionic Framework, Native
            Script, Quasar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Types;
