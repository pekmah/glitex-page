import React from "react";

const Types = () => {
    return (
        <div
            style={{
                background:
                    "linear-gradient(0deg, rgba(255, 197, 63, 0.91), rgba(255, 197, 63, 0.91)), url(/images/mobile_dev/mobile-dev.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className={" py-14 flex flex-col gap-2 relative text-black"}
        >
            <div
                className="lg:px-20 md:px-16 sm:px-12 px-8 w-full font-bold text-3xl md:text-4xl flex items-center justify-center ">
                Types of mobile apps
            </div>

            <div className="my-5 text-center">
                <h4 className="text-2xl font-semibold  my-6">
                    Native Mobile applications
                </h4>
                <div className="w-[90vw]  mx-auto">
                    <p>
                        Native apps mobile applications are developed for specific operating
                        system. For instance mobile applications developed specifically to
                        be used on iOS can’t run on other operating systems like Android.
                        Also mobile application developed to run on Android operating system
                        can’t run on iOS. This is because the mobile applications have been
                        developed to run only on one platform.
                    </p>
                    <br/>

                    <p>
                        The following are the technologies used:
                        <br/> Swift, Objective-C, React, Java, Kotlin, Python.
                    </p>
                </div>
            </div>

            <div className="my-5 text-center">
                <h4 className="text-2xl font-semibold  mb-6">
                    Hybrid Mobile applications
                </h4>

                <div className="w-[90vw] mx-auto">
                    <p>
                        Native apps mobile applications are developed for specific operating
                        system. For instance mobile applications developed specifically to
                        be used on iOS can’t run on other operating systems like Android.
                        Also mobile application developed to run on Android operating system
                        can’t run on iOS. This is because the mobile applications have been
                        developed to run only on one platform.
                    </p>
                    <br/>

                    <p>
                        The following are the technologies used
                        <br/>
                        Swift, Objective-C, React, Java, Kotlin, Python.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Types;
