import React from "react";
import Button from "../../../general/Button";

const Gallery = () => {
    return (
        <div className="p-10 bg-secondary border-b border-primary">
            <h4 className="text-center text-primary font-semibold text-2xl">
                App Screens
            </h4>

            {/* <div className="flex justify-center"> */}
            <div className="grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-3 lg:gap-8 sm:gap-5 gap-3 place-content-between my-8 mx-auto">
                {Array.from({ length: 6 }, (_, index) => index + 1).map((indx) => (
                    <div className="w-full place-self-auto max-h-[500px]">
                        <img src={`/images/portfolio/golf-${indx}.webp`} alt="__" className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
            {/* </div>/ */}

            {/* button */}
            <div className="flex justify-center">
                <Button text={"Talk to us today"} className={"w-64 py-3"} />
            </div>
        </div>
    );
};

export default Gallery;

