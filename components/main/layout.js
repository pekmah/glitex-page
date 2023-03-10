import React, { useState } from "react";
import SideNav from "../general/SideNav";
import Header from "./header";

function Layout({ children, title, backgroundColor }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-secondary min-h-screen">
      <Header showNav={showNav} handleOpenNav={() => setShowNav(true)} />
      <SideNav isOpen={showNav} handleCloseNav={() => setShowNav(false)} />
      {children}
    </div>
  );
}

export default Layout;
