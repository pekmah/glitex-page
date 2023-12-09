import React, { useEffect } from "react";

import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { Layout } from "../components";

export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Layout>
        <Head>
          <title>
            Software Development Company in Kenya | Glitex Solutions Limited
          </title>
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="We prides ourselves in being one of the leading software development companies in Kenya. We have a history of developing quality business applications. Contact us today"
          />
          <link rel="canonical" href="https://glitexsolutions.co.ke/" />

          <meta property="og:site_name" content="Glitex Solutions Limited" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://glitexsolutions.co.ke/" />
          <meta
            property="og:title"
            content="Software Development Company in Kenya | Glitex Solutions Limited"
          />

          <meta
            property="og:description"
            content="We prides ourselves in being one of the leading software development companies in Kenya. We have a history of developing quality business applications. Contact us today"
          />
          <meta
            name="keywords"
            content="software development companies in Kenya, software developers in Kenya, software company in Nairobi"
          />
        </Head>
        <p className={"text-black"}>GLOTEX</p>
      </Layout>
    </>
  );
}

// BNSwgLP2bh2j63d_UXXUL-47JuhxLBpFHhKvX-lD0zo
