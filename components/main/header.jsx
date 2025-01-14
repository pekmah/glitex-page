import { CButton, CButtonOutlined } from "../general";

import CButtonGhost from "../general/CButtonGhost";
import { COLORS } from "../../constants";
import { CONTACT_EMAIL } from "../../constants/defaults";
import { FiMenu } from "react-icons/fi";
import NavList from "./NavList";
import React from "react";
import { handleBook } from "../home/Main";
import { handleCall } from "../../helpers/helpers";

const Header = ({ handleOpenNav }) => {
  return (
    <header
      style={{ backgroundColor: COLORS.white + "CC" }}
      className={`center fixed top-0 inset-x-0 z-20`}
    >
      <div
        className={"center-y-between-x w-full lg:container p-4 md:px-8 md:py-5"}
      >
        {/*Logo*/}
        <a href="/">
          <div className="flex items-center w-full gap-3 px-1 header-logo">
            {/*logo */}
            <img className={"h-12 md:h-14"} src="/logo.png" alt="logo" />

            {/*title*/}
            <h3 className="hidden text-xl font-semibold font-lato text-primary sm:flex lg:text-2xl sm:text-2xl">
              Glitex Solutions
            </h3>
          </div>
        </a>

        {/*  nav items*/}
        <div className={"hidden md:flex"}>
          <NavList />
        </div>

        {/*  nav buttons  */}
        <div className={"center-y-between-x gap-5"}>
          <div className={"flex flex-col items-center justify-center"}>
            <CButtonOutlined
              text={"Call: +254 707 021 821"}
              className={"flex md:text-sm text-xs"}
              handleClick={handleCall}
            />
            <a
              className={`block md:hidden rounded-full text-primary font-dm-sans font-semibold text-sm mt-1`}
              href={`mailto:${CONTACT_EMAIL}?subject=Enquiry&body=`}
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <CButton
            className={"hidden font-medium md:flex text-base tracking-wide"}
            text={`Book Appointment`}
            handleClick={handleBook}
          />

          {/*  menu button  */}
          <CButtonGhost
            className={"w-12 h-12 p-0 center md:hidden"}
            text={<FiMenu className={"text-2xl"} />}
            handleClick={handleOpenNav}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
