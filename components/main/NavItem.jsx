import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ to = "/", title }) => {
  const pathName = usePathname();

  const isCurrent = useMemo(() => pathName === to, [pathName, to]);
  return (
    <Link href={to}>
      <li
        className={`font-lato text-lg md:text-15 ${
          isCurrent ? "text-c-yellow font-semibold" : "text-primary font-medium"
        }  `}
      >
        {title}
      </li>
    </Link>
  );
};

export default NavItem;
