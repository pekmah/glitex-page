import React from "react";
import NavItem from "./NavItem";
import { NAV_LIST } from "../../constants";

const NavList = ({ className }) => {
  return (
    <ul className={`flex-col md:flex-row flex md:gap-5 ${className}`}>
      {NAV_LIST.map((item, ind) => (
        <NavItem key={`nav-${ind}`} to={item.route} title={item.title} />
      ))}
    </ul>
  );
};

export default NavList;
