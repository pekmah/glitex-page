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
                className={`${i === 9 && "rounded-full"} ${i === 4 || i === 7 || i === 0 ? "h-24" : "h-16 "}`}
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
                className={`${i === 9 && "rounded-full"} ${i === 4 || i === 7 || i === 0 ? "h-24 object-contain" : "h-20 object-contain "}`}
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
  "/images/clients/safaricom.webp",
  "/images/clients/nema.webp",
  "/images/clients/nyeri.webp",
  "/images/clients/muthaiga.webp",
  "/images/clients/plenser.webp",
  "/images/clients/kaj.webp",
  "/images/clients/kengen.webp",
  "/images/clients/sfs.webp",
  "/images/clients/world-bank.webp",
  "/images/clients/okapy-logo.webp",
];
