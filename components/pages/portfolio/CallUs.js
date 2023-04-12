import React from "react";
import Button from "../../general/Button";

const CallUs = () => {
    return (
        <div className="bg-primary flex md:flex-row flex-col gap-4 pt-3">
            <div className="flex flex-col gap-6 flex-1 items-center justify-center">
                {/* body */}
                <div className="text-2xl md:text-3xl font-semibold text-center leading-10">
                    <span className=" text-secondary">Turn your</span>
                    <span className="text-white"> ideas</span>{" "}
                    <span className="text-secondary">
            into <br/> reality today
          </span>
                    <br/>
                    <Button
                        text={"Call us Today!"}
                        className={
                            "bg-secondary w-56 py-3 mx-auto mt-7 text-[28px] text-[#FFC53F] "
                        }
                        style={{color: "#FFC53F"}}
                    />
                </div>
                {/* view more button */}
            </div>
            <div className="flex lg:w-[35vw]">
                <img src="/images/portfolio/CallUs.webp" alt="__" className="h-full"/>

                {/* text description div */}
            </div>
        </div>
    );
};

export default CallUs;
