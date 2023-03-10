import React from "react";
import Button from "../../../general/Button";

const Gallery = () => {
  return (
    <div className="p-10 bg-secondary ">
      <h4 className="text-center text-primary font-semibold text-2xl">
        App Screens
      </h4>

      <div className="flex flex-wrap justify-center my-8">
        {gallery_images.map((img) => (
          <div className="w-[40%]">
            <img src={img} alt="__" className="w-full" />
          </div>
        ))}
      </div>

      {/* button */}
      <div className="flex justify-center">
        <Button text={"Talk to us today"} className={"w-64 py-3"} />
      </div>
    </div>
  );
};

export default Gallery;
const gallery_images = [
  "/images/clients/leta-mobile.png",
  "/images/clients/leta-mobile.png",
  "/images/clients/leta-mobile.png",
  "/images/clients/leta-mobile.png",
];
