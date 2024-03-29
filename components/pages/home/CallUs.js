import React from "react";
import Button from "../../general/Button";
import {handleDialerButtonClick} from "../../main/header";

const CallUs = () => {
    return (
        <div className="bg-white py-6 lg:py-14">
            <div className="flex flex-col md:flex-row  my-4">
                {/* image div */}
                <div className="flex items-center justify-center flex-1" data-aos="fade-up">
                    <img
                        src="/images/clients/launching.webp"
                        alt="__"
                        className="max-h-[350px] h-auto"
                    />
                </div>
                {/* text description div */}
                <div className="flex flex-col gap-6 flex-1 my-5 md:my-0 items-center md:items-start justify-center"
                     data-aos="fade-right">
                    {/* body */}
                    <div className="md:text-3xl text-2xl font-semibold text-center leading-10">
                        <span className=" text-secondary">Turn your</span>
                        <span className="text-primary"> ideas</span>{" "}
                        <span className="text-secondary">
              into <br/> reality today
            </span>
                        <br/>
                        <Button
                            text={"Call us Today!"}
                            handleClick={handleDialerButtonClick}
                            className={
                                "bg-primary text-secondary px-5 lg:px-8 py-2 lg:py-4 mx-auto mt-7 text-[28px]"
                            }
                        />
                    </div>
                    {/* view more button */}
                </div>
            </div>
        </div>
    );
};

export default CallUs;
