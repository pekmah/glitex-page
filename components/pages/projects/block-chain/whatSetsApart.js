import React from "react";
import Button from "../../../general/Button";
import {handleDialerButtonClick} from "../../../main/header";

const WhatSetsApart = () => {
    return (
        <div className="flex flex-col md:flex-row py-6 md:py-12 bg-white">
            {/* image div */}

            {/* text description div */}
            <div className="flex flex-col gap-6 flex-1 justify-center items-center">
                <div className="flex flex-col w-[85%] gap-4 md:gap-8">
                    <h5 className="text-2xl md:text-3xl font-medium leding-[50px]">
                        What sets us apart as a leading Blockchain application development
                        company in Kenya?{" "}
                    </h5>
                    {/* body */}
                    <div className="">
                        <p className="text-base md:text-lg">
                            The following factors are why Glitex Solutions Limited stands out
                            among other Blockchain application development companies in
                            Nairobi, Kenya.
                            <div className="px-4">
                                <li>
                                    {" "}
                                    We utilize the most advanced technology to ensure high-quality
                                    results.
                                </li>
                                <li>
                                    {" "}
                                    We offer 24/7 customer-focused support through phone, Skype,
                                    and email.
                                </li>
                                <li>
                                    {" "}
                                    Our prices are budget-friendly and competitive, and we
                                    guarantee on- time delivery.
                                </li>
                                <li>
                                    {" "}
                                    Our team consists of expert developers, designers, and
                                    management professionals.
                                </li>
                                <li>
                                    We are a leading and renowned Blockchain development company
                                    in . Nairobi, Kenya.
                                </li>
                            </div>
                            <br/>
                            As a premier Blockchain development service provider in Nairobi,
                            Kenya, we can help you implement Blockchain solutions in your
                            business that will provide you with quick and efficient
                            information about transactions.
                        </p>
                        <br/>
                    </div>
                    <div className="flex">
                        <Button
                            className={"bg-primary w-48 text-secondary text-base md:text-lg"}
                            text={"Call us Today!"}
                            handleClick={handleDialerButtonClick}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 p-4 h-full">
                <img
                    src="/images/projects/block-chain-2.webp"
                    alt="__"
                    className="h-[600px] w-full object-cover"
                />
            </div>
        </div>
    );
};

export default WhatSetsApart;
