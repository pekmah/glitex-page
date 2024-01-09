import React from "react";
import { NavList } from "../main";
import { CButton, CButtonOutlined } from "./index";
import CButtonGhost from "./CButtonGhost";
import { MdClose } from "react-icons/md";

const SideNav = ({ handleCloseNav, isOpen }) => {
  return (
    <div
      className={` z-40 top-0 absolute right-0 bottom-0 h-screen bg-[#00000050]  ${
        isOpen ? " w-screen " : "w-0"
      } transition-all duration-500 ease-in-out overflow-hidden`}
      //   onClick={handleCloseNav}
    >
      <div
        className={`float-right h-full bg-white z-50 ${
          isOpen ? " w-screen lg:w-[30vw] md:w-[50vw] sm:w-[70vw]" : "w-0"
        } transition-all duration-700 ease-in-out overflow-hidden`}
        onClick={() => {}}
      >
        <div className={`block`}>
          <div className="p-5 flex justify-end">
            <CButtonGhost
              className={"w-12 h-12 p-0 center md:hidden"}
              text={<MdClose className={"text-5xl"} />}
              handleClick={handleCloseNav}
            />
          </div>

          <NavList className={"text-center gap-6"} />

          <div className={"center-x flex-col w-5/6 mx-auto mt-8 gap-5"}>
            <CButtonOutlined text={"Call: +254 707 021 821"} />

            <CButton text={"Request Quote"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

// nav list items

