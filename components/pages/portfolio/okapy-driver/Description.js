import React from "react";

const Description = () => {
    return (
        <div className="bg-primary py-8">
            {/* image div */}
            <div className="flex items-center justify-center flex-1 gap-5">
                {["/images/portfolio/okapy-driver-1.webp", "/images/portfolio/okapy-driver-2.webp"].map(img => (
                    <img
                        src={img}
                        alt="__"
                        className="max-h-[400px] w-auto h-auto rounded-xl"
                    />
                ))}
            </div>
            {/* text description div */}
            <div className="flex flex-col gap-6 flex-1 justify-center ">
                <h5 className="text-3xl mt-5 text-center font-medium">
                    Okapy Secure Driver Application
                </h5>

                {/* body */}
                <p className="text-lg w-9/12 text-center mx-auto leading-8 ">
                    Okapy Secure is a tech-driven end-to-end cross border goods transport platform for individuals and businesses. Okapy partners with retailers, manufacturers, suppliers, and startups to transport goods at the touch of a button.
                </p>
            </div>
        </div>
    );
};

export default Description;
