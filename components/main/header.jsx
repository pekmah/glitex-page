import { useEffect, useState } from "react";
import NavList from "./NavList";
import { CButton, CButtonOutlined } from "../general";
import CButtonGhost from "../general/CButtonGhost";
import { FiMenu } from "react-icons/fi";
import { COLORS } from "../../constants";

export const handleDialerButtonClick = () => {
  window.location.href = "tel:+254707021821";
};
const Header = ({ showNav, handleCloseNav, hidePhone, handleOpenNav }) => {
  const [isIndex, setIsIndex] = useState();

  return (
    <header
      className={`center fixed top-0 inset-x-0 z-20 bg-[${COLORS.white}CC]`}
    >
      <div
        className={"center-y-between-x w-full lg:container p-4 md:px-8 md:py-5"}
      >
        {/*Logo*/}
        <a href="/">
          <div className="header-logo flex gap-3 items-center w-full px-1">
            {/*logo */}
            <img className={"h-12 md:h-14"} src="/logo.png" alt="logo" />

            {/*title*/}
            <h3 className="font-lato text-primary hidden sm:flex lg:text-2xl sm:text-2xl text-xl font-semibold">
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
          <CButtonOutlined
            text={"Call: +254 707 021 821"}
            className={"hidden md:flex"}
          />

          <CButton text={"Request Quote"} />

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
