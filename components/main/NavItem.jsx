import React from "react";
import Link from "next/link";

const NavItem = ({ to = "/", title }) => {
  return (
    <Link href={to}>
      <li className={"font-lato text-base text-primary font-medium"}>
        {title}
      </li>
    </Link>
  );
};

export default NavItem;
