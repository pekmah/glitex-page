import React from 'react';

const AndroidDevs = () => {
    return (
        <div className={"bg-secondary p-1 lg:p-10 flex flex-col gap-2"}>
            <div className="flex lg:flex-row flex-col justify-center my-4 gap-8">
                {/* image div */}
                <div className="flex items-center justify-center flex-1 px-4 md:px-0">
                    <img
                        src="/images/mobile_dev/ethiopia-devs.jpg"
                        alt="__"
                        className="w-full object-contain h-auto mx-auto "
                    />
                </div>
                {/* text description div */}
                <div className="flex flex-col gap-2 lg:gap-6 flex-1 justify-center text-primary px-2 md:px-0">
                    <h5 className="text-xl sm:text-3xl font-semibold">
                        Let us develop your mobile application | Glitex Solutions - Mobile app developers in Ethiopia
                    </h5>
                    {/* body */}
                    <p className="text-base sm:text-md md:text-lg ">
                        By combining our expertise in developing quality mobile applications with the cost-effectiveness
                        of working with a skilled development team, we can help develop your successful app. Our
                        in-depth understanding of the latest technologies makes us the ideal choice for both large
                        corporations and start-ups seeking an app developer. Our expertise allows us to make informed
                        decisions about the best approach, determine the minimum viable product, and execute
                        efficiently.

                    </p>

                    <p className="text-base sm:text-md md:text-lg">
                        Glitex Solutions is a trusted provider of mobile application development for key enterprise
                        customers in Ethiopia, Kenya and across the East Africa region. Our solutions are designed to
                        seamlessly integrate into overall enterprise systems.

                    </p>

                    <p className="text-base sm:text-md md:text-lg">
                        When it comes to choosing the right platform for mobile app development, it can be a challenge
                        to balance budget, desired features, user expectations, and time constraints. That's why we
                        adopt an iterative approach, allowing us to test and adjust our strategy as we gain a deeper
                        understanding of the application.

                    </p>

                    <p className="text-lg">
                        Whether you need a hybrid web app, a progressive web application, or a full native app, we have
                        the expertise to help you make the right choice. By avoiding costly and time-consuming mistakes,
                        we help you launch your app with confidence.
                    </p>
                    {/*<div className="flex">*/}
                    {/*    <a href="#portfolio">*/}
                    {/*        <OutlinedButton*/}
                    {/*            className={"border-primary text-primary border-2 text-lg w-44"}*/}
                    {/*            text={"Portfolio"}*/}
                    {/*        />*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    {/* view more button */}
                </div>
            </div>
        </div>
    );
};

export default AndroidDevs;
