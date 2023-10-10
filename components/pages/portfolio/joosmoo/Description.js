import React from "react";

const Description = () => {
    return (
        <div className="bg-primary py-8">
            {/* image div */}
            <div className=" hidden md:flex items-center justify-center flex-1 gap-2">
                {["/images/portfolio/3.webp", "/images/portfolio/4.webp"].map(img => (
                    <img
                        src={img}
                        alt="__"
                        className="max-h-[400px] w-auto h-auto rounded-xl"
                    />
                ))}
            </div>

            <div className=" flex md:hidden items-center justify-center flex-1 gap-2">

                <img
                    src={"/images/portfolio/4.webp"}
                    alt="__"
                    className="max-h-[400px] object-contain w-[90%] md:h-auto rounded-xl"
                />

            </div>
            {/* text description div */}
            <div className="flex flex-col gap-6 flex-1 justify-center ">
                <h5 className="text-3xl mt-5 text-center font-medium">
                    Attorney Shield Beta
                </h5>

                {/* body */}
                <p className="text-base md:text-lg w-[95%] md:w-9/12 text-center mx-auto leading-8 ">
                   Attorney Shield offers 24/7 access to attorneys who specialize in assisting you during police encounters.
                    You can easily access their support by opening the app and requesting assistance. (You get coonected via Video Call) 
                    This is a prototype for our clients in USA.
                </p>
            </div>
        </div>
    );
};

export default Description;
