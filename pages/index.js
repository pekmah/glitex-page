import Home from "../components/pages/home/home";
import About from "../components/pages/home/about";
import Services from "../components/pages/home/services";
import Works from "../components/pages/home/works/works";
import Footer from "../components/pages/home/footer";
import Contact from "../components/pages/home/contact";
import Layout from "../components/main/layout";
import Head from "next/head";
import React from "react";

export default function Index() {

    return (
        <Layout>
            <Head>
                <title>Software Development Company in Kenya | Glitex Solutions Limited</title>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="description"
                      content="We prides ourselves in being one of the leading software development companies in Kenya. We have a history of developing quality business applications. Contact us today"/>
                <link rel="canonical" href="https://glitexsolutions.co.ke/"/>

                <meta property="og:site_name" content="Glitex Solutions Limited"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://glitexsolutions.co.ke/"/>
                <meta property="og:title"
                      content="Software Development Company in Kenya | Glitex Solutions Limited"/>

                <meta property="og:description"
                      content="We prides ourselves in being one of the leading software development companies in Kenya. We have a history of developing quality business applications. Contact us today"/>
                <meta name="keywords"
                      content="software development companies in Kenya, software developers in Kenya, software company in Nairobi"/>
            </Head>
            <Home/>
            <About/>
            <Services/>
            <Works/>
            {/*<Clients/>*/}
            <Contact/>
            <Footer/>
        </Layout>
    )
}
