import { Footer, WhatsappBtn } from "../components";
import React, { useState } from "react";

import Header from "../components/main/header";
import SideNav from "../components/general/SideNav";

type LayoutProps = {
  hidePhone?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Layout({ children, className, hidePhone }: LayoutProps) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={`bg-white min-h-screen max-w-screen overflow-hidden ${className}`}
    >
      <div style={{ height: "100px" }} className="w-full " />
      <Header
        // @ts-ignore
        showNav={showNav}
        handleOpenNav={() => setShowNav(true)}
        hidePhone={hidePhone}
      />
      <SideNav isOpen={showNav} handleCloseNav={() => setShowNav(false)} />
      {children}

      <WhatsappBtn />
      {/*  Footer  */}
      <Footer />
    </div>
  );
}

export default Layout;
