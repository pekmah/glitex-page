import Link from "next/link";
import React from "react";
import Button from "../../general/Button";
import OutlinedButton from "../../general/OutlinedButton";

const Portfolio = () => {
    return (
        <div className="bg-primary p-4 sm:p-8 lg:p-14">
            <div className="flex flex-col items-center gap-2" data-aos="fade-up">
                <h4
                    className={
                        "lg:text-4xl md:text-3xl text-2xl text-secondary font-bold text-center"
                    }
                >
                    What have we done so far
                </h4>

                <div className="rounded-full w-32 md:w-40 lg:w-44 h-1.5 lg:h-3 bg-secondary mt-0 lg:mt-3"/>
            </div>

            {/* mobile application development (1) */}
            <div className="flex flex-col md:flex-row my-4 gap-3">
                {/* image div */}
                <div className="flex items-center justify-center flex-1 gap-5">
                    {["/images/portfolio/okapy-2.webp"].map(img => (
                        <img
                            src={img}
                            alt="__"
                            className="max-h-[400px] w-auto h-auto rounded-xl"
                        />
                    ))}
                </div>
                {/* text description div */}
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 flex-1 justify-center py-2"
                     data-aos="fade-up-left">
                    <h5 className="lg:text-4xl md:text-3xl text-2xl font-semibold md:text-start text-center">
                        Mobile Application
                    </h5>

                    {/* body */}
                    <p className="md:text-xl text-base w-full sm:w-5/6 lg:w-2/3 text-center md:text-start">
                        Mobile application service are aimed at building iOS & Android
                        applications that effectively complement or substitute web
                        solutions. Having delivered 50+ mobile app development projects so
                        far, Glitex ensures app success by delivering striking UI, secure
                        app code, and resilient back ends.
                    </p>

                    <div className="flex" data-aos="fade-up">
                        <Link href={"/mobile"}>
                            <OutlinedButton
                                className={
                                    "border-secondary text-secondary border-2 text-lg mx-auto md:mx-0 mt-3 md:mt-0"
                                }
                                text={"View more"}
                            />
                        </Link>
                    </div>
                    {/* view more button */}
                </div>
            </div>

            {/* mobile application development (2) */}
            <div className="flex flex-col md:flex-row my-4 gap-3">
                {/* text description div */}
                <div className="flex flex-col gap-6 flex-1 justify-center" data-aos="fade-up-right">
                    <h5 className="lg:text-4xl md:text-3xl text-2xl font-semibold md:text-start text-center">
                        E-Commerce Application
                    </h5>

                    {/* body */}
                    <p className="md:text-xl text-base w-full sm:w-5/6 lg:w-2/3 text-center md:text-start">
                        Mobile application service are aimed at building iOS & Android
                        applications that effectively complement or substitute web
                        solutions. Having delivered 50+ mobile app development projects so
                        far, Glitex ensures app success by delivering striking UI, secure
                        app code, and resilient back ends.
                    </p>

                    <div className="flex" data-aos="fade-up">
                        <Link href={"/mobile"}>
                            <OutlinedButton
                                className={
                                    "border-secondary text-secondary border-2 text-lg mx-auto md:mx-0 mt-3 md:mt-0"
                                }
                                text={"View more"}
                            />
                        </Link>

                    </div>

                    {/* view more button */}
                </div>
                {/* image div */}
                <div className="flex items-center justify-center flex-1 gap-5">
                    {["/images/portfolio/joosmoo-1.webp", "/images/portfolio/joosmoo-2.webp"].map(img => (
                        <img
                            src={img}
                            alt="__"
                            className="max-h-[400px] w-auto h-auto rounded-xl"
                        />
                    ))}
                </div>
            </div>
            {/* E-Commerce application development */}
            <div className="flex justify-center items-center p-3">
                <Link href={"/portfolio"}>
                    <Button
                        className={
                            " text-[#FFC53F] bg-secondary py-2.5 sm:text-lg text-base px-10"
                        }
                        text={"View more projects"}
                        style={{color: "#FFC53F"}}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
