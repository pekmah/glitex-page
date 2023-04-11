import React from "react";

const Description = () => {
    return (
        <div className="bg-primary py-8">
            {/* image div */}
            <div className="flex items-center justify-center flex-1 gap-5">
                {["/images/portfolio/golf-1.webp", "/images/portfolio/golf-2.webp"].map(img => (
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
                    Muthaiga Golf Club Application
                </h5>

                {/* body */}
                <p className="text-lg w-9/12 text-center mx-auto leading-8 ">
                    Muthaiga Golf Club, proudly called the Home of Golf by its elite membership, is in many ways the ultimate embodiment of Kenya’s unique marriage of ancient golf tradition and a modern 18-Hole Championship Golf Course.

                    The Club boasts of a proud history spanning over a century providing prestigious and challenging courses in the region. In keeping up with its drive of providing exceptional services, the club seeks to provide members with ability to access club services such as booking Tee times, make Dining Reservations and even view their Statements through the MGC APP.
                </p>
            </div>
        </div>
    );
};

export default Description;
