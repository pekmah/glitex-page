import React from "react";
import OutlinedButton from "../../general/OutlinedButton";

const BestMobileDevs = () => {
    return (
        <section className={"bg-primary py-6 lg:py-10 flex flex-col gap-2"}>
            <div className="flex lg:flex-row flex-col my-4 lg:w-10/12 w-11/12 mx-auto">
                {/* text description div */}
                <div className="flex flex-col gap-6 flex-1 justify-center text-secondary">
                    <h5 className=" text-2xl md:text-3xl font-medium leading-8 lg:leading-[45px]">
                        Best mobile app developers in Kenya -
                        Glitex Solutions Limited
                    </h5>
                    {/* body */}
                    <p className="text-lg md:w-5/6">
                        We have extremely skilled mobile app developers Kenya that help us
                        deliver quality mobile application solutions. We develop all types
                        of mobile apps including: native apps, hybrid apps, and web apps.
                    </p>
                    <p className="text-lg md:w-5/6">
                        When you work with us, you’re working with the right team that not
                        only develop mobile applications but also pays attention to they key
                        services such as app design and development, app testing and quality
                        assurance, app maintenance and updates, and app marketing and
                        promotion. As product developers, we understand the process and this
                        makes us the right team to advice you while we develop your mobile
                        application.
                    </p>{" "}
                    <p className="text-lg md:w-5/6">
                        We have successfully delivered huge number of high quality and
                        creative mobile applications for our customers. Our professional
                        team of Android and iOS mobile app developers provides industry
                        specific mobility solution to meet the requirements of your
                        business.
                    </p>
                    <div className="flex">
                        <a href="/portfolio/joosmoo">
                            <OutlinedButton
                                className={
                                    "border-secondary text-secondary border-2 text-lg w-44"
                                }
                                text={"Portfolio"}
                            />
                        </a>
                    </div>
                    {/* view more button */}
                </div>

                {/* image div */}

                <div className=" hidden md:flex items-center justify-center flex-1 gap-2">
                    {["/images/portfolio/joosmoo-1.webp"].map(img => (
                        <img
                            src={img}
                            alt="__"
                            className="max-h-[400px] w-auto h-auto rounded-xl"
                        />
                    ))}
                </div>

                <div className=" flex md:hidden items-center justify-center flex-1 gap-2">

                    <img
                        src={"/images/portfolio/joosmoo-1.webp"}
                        alt="__"
                        className="max-h-[400px] object-contain w-[90%] md:h-auto rounded-xl mt-4"
                    />

                </div>
            </div>
        </section>
    );
};

export default BestMobileDevs;
