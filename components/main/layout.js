import React, {useState} from "react";
import SideNav from "../general/SideNav";
import Header from "./header";
import WhatsappBtn from "../general/WhatsappBtn";

function Layout({children, title, backgroundColor}) {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="bg-secondary min-h-screen max-w-screen overflow-hidden">
            <Header showNav={showNav} handleOpenNav={() => setShowNav(true)}/>
            <SideNav isOpen={showNav} handleCloseNav={() => setShowNav(false)}/>
            {children}

            <WhatsappBtn/>
        </div>
    );
}

export default Layout;
