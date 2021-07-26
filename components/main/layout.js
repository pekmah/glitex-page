import React from 'react';
import Header from "./header";
import Head from "next/head";

function Layout({
                    children,
                    title,
                    backgroundColor
                }) {
    return (
        <div style={{backgroundColor: backgroundColor}}>
            <Head>
                <title>{title && `${title} | `} Glitex Solutions Limited</title>
            </Head>
            <Header/>
            {children}
        </div>
    );
}

export default Layout;