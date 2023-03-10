import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ showNav, handleCloseNav, handleOpenNav }) => {
  const [isIndex, setIsIndex] = useState();

  useEffect(() => {
    setIsIndex(window.location.pathname === "/");
  });
  return (
    <header className="flex bg-transparent p-8 absolute top-0 right-0 left-0 z-20 ">
      <div className="header-logo flex gap-5 items-center w-full">
        <img
          src={"/images/logo.png"}
          alt="Glitex Solutions LTD"
          className="lg:h-[60px] sm:h-[50px] h-[40px]"
        />

        <h3 className="text-primary lg:text-3xl sm:text-2xl text-xl font-semibold">
          Glitex Solutions
        </h3>
      </div>

      <div className=" flex justify-center items-center gap-4 fixed top-7 right-4 z-30">
        {/* contact */}
        <div
          className={`bg-primary rounded-sm text-secondary px-3 py-2 whitespace-nowrap font-bold hidden sm:block`}
        >
          <div className={"text-[14px] md:text-[15px]"}>
            Call: +254 707 021 821
          </div>
        </div>

        {/* menu icons */}
        <button className="px-3 py-1 bg-[#00000050]" onClick={handleOpenNav}>
          <AiOutlineMenu
            className={"text-white md:text-4xl sm:text-3xl text-2xl"}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
