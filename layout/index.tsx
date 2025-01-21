import { Footer, WhatsappBtn } from "../components";
import React, { useEffect, useState } from "react";

import Header from "../components/main/header";
import SideNav from "../components/general/SideNav";

type LayoutProps = {
  hidePhone?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Layout({ children, className, hidePhone }: LayoutProps) {
  const [showNav, setShowNav] = useState(false);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.innerHTML = `
  //     twq('event', 'tw-ohgnh-ojepf', {
  //       value: null,
  //       currency: null,
  //       contents: [
  //         {
  //           content_type: null,
  //           content_id: null,
  //           content_name: null,
  //           content_price: null,
  //           num_items: null,
  //           content_group_id: null
  //         },
  //         {
  //           content_type: null,
  //           content_id: null,
  //           content_name: null,
  //           content_price: null,
  //           num_items: null,
  //           content_group_id: null
  //         }
  //       ],
  //       status: null,
  //       conversion_id: null,
  //       email_address: null,
  //       phone_number: null
  //     });
  //   `;
  //   document?.head?.appendChild(script);
  // }, []);

  return (
    <div
      className={`bg-white min-h-screen max-w-screen overflow-hidden ${className}`}
    >
      <div style={{ height: "100px" }} className="w-full " />
      <Header
        // @ts-expect-error: showNav is not a prop of Header component
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
