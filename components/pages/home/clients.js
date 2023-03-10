import React from "react";

const Clients = () => {
  return (
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
  );
};
//

export default Clients;

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
