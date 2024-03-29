import React from "react";
import OutlinedButton from "../../general/OutlinedButton";

const AndroidDevs = () => {
    return (
        <div className={"bg-secondary py-10 flex flex-col gap-2"}>
            <div className="flex lg:flex-row flex-col justify-center my-4">
                {/* image div */}


                <div className=" hidden md:flex items-center justify-center flex-1 gap-2">
                    {["/images/portfolio/okapy-1.webp", "/images/portfolio/okapy-2.webp"].map(img => (
                        <img
                            src={img}
                            alt="__"
                            className="max-h-[400px] w-auto h-auto rounded-xl"
                        />
                    ))}
                </div>

                <div className=" flex md:hidden items-center justify-center flex-1 gap-2">

                    <img
                        src={"/images/portfolio/okapy-1.webp"}
                        alt="__"
                        className="max-h-[400px] object-contain w-[90%] md:h-auto rounded-xl"
                    />

                </div>
                {/* text description div */}
                <div className="flex flex-col gap-6 flex-1 justify-center text-primary px-2 md:px-0">
                    <h5 className="text-2xl sm:text-3xl font-medium">
                        Android and IOS apps developers in Kenya
                    </h5>
                    {/* body */}
                    <p className="text-lg w-[95%] md:w-2/3 ">
                        We offer mobile application development services in Kenya, Uganda,
                        Tanzania, Ethiopia, and Sudan and beyond the region. Our Packages
                        includes Hosting, 24/7 Support & Maintenance and therefore cost
                        effective.
                    </p>

                    <p className="text-lg w-[95%] md:w-2/3">
                        Statistics from the Google Play Store show that over 60% of the apps
                        on the store have never been downloaded; over 35% of them are
                        downloaded but are inactive. This means mobile app development needs
                        not only the skills of a mobile developer but a multitude of
                        disciplines to realize a successful app. Glitex Solutions Limited
                        offer a one-stop-shop for all your mobile app development needs for
                        both iOS and Android.
                    </p>
                    <div className="flex">
                        <a href="/portfolio/okapy">
                            <OutlinedButton
                                className={"border-primary text-primary border-2 text-lg w-44"}
                                text={"Portfolio"}
                            />
                        </a>
                    </div>
                    {/* view more button */}
                </div>
            </div>
        </div>
    );
};

export default AndroidDevs;
