import React from "react";

const FormerClients = () => {
  return (
    <>
      <div className="hidden md:block">
    <marquee direction="left">
      <div
        className={
          "h-[14vh] flex justify-evenly items-center overflow-x-scroll overflow-y-hidden no-scrollbar lg:gap-10 md:gap-8 gap-5"
        }
      >
        {list?.map((item, i) => (
          <img
            key={i}
            src={item}
            alt="__"
            className={i === 4 || i === 7 || i === 0 ? "h-24" : "h-16 "}
          />
        ))}
      </div>
    </marquee>
      </div>

      <div className="slider md:hidden">
        <div
          className={
            // "h-[14vh] flex justify-evenly items-center overflow-x-scroll overflow-y-hidden no-scrollbar lg:gap-10 md:gap-8 gap-5"
            "slide-track"
          }
        >
          {list?.map((item, i) => (
            <div className="slide">
              <img
                key={i}
                src={item}
                alt="__"
                className={i === 4 || i === 7 || i === 0 ? "h-24 object-contain" : "h-20 object-contain "}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
//

export default FormerClients;

const list = [
  "/images/clients/safaricom.png",
  "/images/clients/nema.png",
  "/images/clients/nyeri.png",
  "/images/clients/muthaiga.png",
  "/images/clients/plenser.png",
  "/images/clients/kaj.png",
  "/images/clients/kengen.png",
  "/images/clients/sfs.png",
  "/images/clients/world-bank.png",
];
