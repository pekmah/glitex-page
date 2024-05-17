import React from "react";
import { NavList } from "../main";
import { CButton, CButtonOutlined } from "./index";
import CButtonGhost from "./CButtonGhost";
import { MdClose } from "react-icons/md";
import {
  handleCall,
  handleEmail,
  handleRequestQuote,
} from "../../helpers/helpers";
import { CONTACT_EMAIL } from "../../constants/defaults";

const SideNav = ({ handleCloseNav, isOpen }) => {
  return (
    <div
      className={` z-40 fixed right-0 inset-y-0 h-screen bg-[#00000050]  ${
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
            <CButtonOutlined
              text={"Call: +254 707 021 821"}
              handleClick={handleCall}
            />

            <CButton
              className={" font-medium md:flex text-base tracking-wide"}
              text={`${CONTACT_EMAIL} `}
              handleClick={handleEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

// nav list items
