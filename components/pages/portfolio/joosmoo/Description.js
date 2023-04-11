import React from "react";

const Description = () => {
    return (
        <div className="bg-primary py-8">
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
            {/* text description div */}
            <div className="flex flex-col gap-6 flex-1 justify-center ">
                <h5 className="text-3xl mt-5 text-center font-medium">
                    Joosmoo Application
                </h5>

                {/* body */}
                <p className="text-lg w-9/12 text-center mx-auto leading-8 ">
                    JooSmoo LTD is a juice and nut milk company founded with the intent to provide pure, unadulterated, additive-free beverages and food products.Our company philosophy is – your food label content should do good to your body. Since our inception, we have done exactly that – created products using whole foods that nurture the body. We are the only company in Kenya that produces nut milks and our goal is to continue to grow our reach and distribution outlets. Our adherence to quality raw products enables us to consistently produce quality drinks and food items.
                </p>
            </div>
        </div>
    );
};

export default Description;
