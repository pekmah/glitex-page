import React, { useState } from "react";
import SideNav from "../general/SideNav";
import Header from "./header";

function Layout({ children, className, hidePhone }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={`bg-white min-h-screen max-w-screen overflow-hidden ${className}`}
    >
      <Header
        showNav={showNav}
        handleOpenNav={() => setShowNav(true)}
        hidePhone={hidePhone}
      />
      <SideNav isOpen={showNav} handleCloseNav={() => setShowNav(false)} />
      {children}

      {/*<WhatsappBtn />*/}
    </div>
  );
}

export default Layout;
