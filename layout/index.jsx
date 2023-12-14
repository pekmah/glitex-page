import React, { useState } from "react";
import SideNav from "../components/general/SideNav";
import Header from "../components/main/header";
import { Footer } from "../components";

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
      {/*  Footer  */}
      <Footer />
    </div>
  );
}

export default Layout;
