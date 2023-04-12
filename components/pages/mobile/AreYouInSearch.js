import React from "react";
import Button from "../../general/Button";
import Ethiopia from "./icons/Ethiopia";
import {handleDialerButtonClick} from "../../main/header";

const AreYouInSearch = ({showBtn}) => {
    return (
        <div className={"bg-white pb-5"}>
            <div className="flex flex-col md:flex-row py-8 lg:py-12 ">
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
                            <br/>
                            <p className="text-base sm:text-lg">
                                We have served many countries in the Africa continent and beyond
                                the continent. We have our headquarters in Nairobi, Kenya. Contact
                                us today.
                            </p>
                        </div>
                        <div className="flex">
                            <Button
                                handleClick={handleDialerButtonClick}
                                className={"bg-primary w-48 text-secondary text-base md:text-lg mx-auto md:mx-0"}
                                text={"Call us Today!"}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1 p-4 lg:p-0">
                    <img
                        src="/images/portfolio/portfolio.webp"
                        alt="__"
                        className="max-h-[595px] w-full object-cover h-auto"
                    />
                </div>

            </div>
            {/*  Available in Ethiopia  */}
            {showBtn && <a href="/mobile/ethiopia">
                <div
                    className={"bg-[#FFC53F54] text-base lg:text-xl font-bold rounded-full px-2 lg:px-14 h-10 flex items-center justify-center w-11/12 lg:w-1/2 mx-auto gap-3 my-5"}>

                    Hey! we are also live in <span className={"text-primary"}> Ethiopia </span>
                    {/*    Ethiopia flag*/}
                    <span className="hidden md:inline-flex">
                        <Ethiopia/>
                    </span>

                </div>
            </a>}

        </div>
    );
};

export default AreYouInSearch;
