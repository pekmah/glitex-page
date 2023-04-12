import React from "react";

const Description = () => {
    return (
        <div className="bg-primary py-8">
            {/* image div */}
            <div className=" hidden md:flex items-center justify-center flex-1 gap-2">
                {["/images/portfolio/npbc-1.webp", "/images/portfolio/npbc-2.webp"].map(img => (
                    <img
                        src={img}
                        alt="__"
                        className="max-h-[400px] w-auto h-auto rounded-xl"
                    />
                ))}
            </div>

            <div className=" flex md:hidden items-center justify-center flex-1 gap-2">

                <img
                    src={"/images/portfolio/npbc-1.webp"}
                    alt="__"
                    className="max-h-[400px] object-contain w-[90%] md:h-auto rounded-xl"
                />

            </div>
            {/* text description div */}
            <div className="flex flex-col gap-6 flex-1 justify-center ">
                <h5 className="text-3xl mt-5 text-center font-medium">
                    NPBC Application
                </h5>

                {/* body */}
                <p className="text-base md:text-lg w-[95%] md:w-9/12 text-center mx-auto leading-8 ">
                    Login to your student, lecturer or administrator portal on NPBC
                </p>
            </div>
        </div>
    );
};

export default Description;
