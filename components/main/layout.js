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
                <title>{title && `${title} | `} Software Development Company in Kenya| Glitex Solutions Limited</title>
                <meta name="robots" content="index, follow"></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="We are a software development company in Nairobi Kenya. Contact us for Mobile Application Development, E-commerce systems, E-learning systems, Management system, Websites, USSD Codes, Bulky SMS, Short Codes, SEO (Search Engine Optimizarion)" />
                <meta name="keywords" content="Software Development Company Nairobi - Kenya, Mobile Application Development, Mobile Apps Developers in Kenya, E-commerce systems in Kenya, E-learning systems in Kenya, Management system Kenya, Websites, USSD Codes in Kenya, Bulky SMS, Short Codes in Kenya, SEO (Search Engine Optimizarion) Company in Nairobi - Kenya" />
                <link rel="canonical" href="https://glitexsolutions.co.ke/" />

                <meta property="og:site_name" content="Glitex Solutions Limited" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://glitexsolutions.co.ke/" />
                <meta property="og:title" content="Software Development Company in Kenya |  We are a software development company based in Nairobi, Kenya dedicated to providing you with a seamless transition into the digital experience in Kenya and Beyond the region." />

                <meta property="og:description" content="We are a software development company in Nairobi Kenya. Contact us for Mobile Application Development, E-commerce systems, E-learning systems, Management system, Websites, USSD Codes, Bulky SMS, Short Codes, SEO (Search Engine Optimizarion)" />
                <meta name="keywords" content="Software Development Company Nairobi - Kenya, Mobile Application Development, Mobile Apps Developers in Kenya, E-commerce systems in Kenya, E-learning systems in Kenya, Management system Kenya, Websites, USSD Codes in Kenya, Bulky SMS, Short Codes in Kenya, SEO (Search Engine Optimizarion) Company in Nairobi - Kenya" />
            </Head>
            <Header/>
            {children}
        </div>
    );
}

export default Layout;