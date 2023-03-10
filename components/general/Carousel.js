import React from "react";
import Clients from "../pages/home/Clients";

const Carousel = ({
  title,
  img = "/images/portfolio/portfolio.png",
  className,
  showClients = true,
}) => {
  return (
    <div className="">
      <div
        className={`h-[35vh] bg-no-repeat bg-cover flex flex-col justify-center relative ${className}`}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:px-20 md:px-16 sm:px-12 px-8 w-full font-bold text-3xl md:text-4xl flex items-center justify-center text-primary">
          {title}
        </div>
      </div>
      {showClients && <Clients />}
    </div>
  );
};

export default Carousel;
