import React from 'react';
import Layout from "../../main/layout";
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import styles from './css/services.module.scss';
import Head from 'next/head';

const alignCenter = {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
}

function AllServices({
                         service,
                         id
                     }) {
    const children = [];
    if (service)
        for (let i = 0; i < service.pages.length; i++) {
            let offset = i;
            let page = service.pages[i];
            children.push(
                <ParallaxLayer
                    key={`p${i}`}
                    sticky={{
                        start: offset,
                        end: offset + 1
                    }}
                    style={{
                        backgroundImage: `url('${page.banner}')`,
                        backgroundSize: "cover",
                        width: "100%",
                        zIndex: -1
                    }}>
                </ParallaxLayer>);

            children.push(
                <ParallaxLayer
                    key={`o${i}`}
                    sticky={{
                        start: offset,
                        end: offset + 1
                    }}
                    style={{
                        background: "black",
                        width: "100%",
                        opacity: .5,
                        zIndex: -1
                    }}>
                </ParallaxLayer>);

            children.push(<ParallaxLayer
                key={`g${i}`}
                offset={offset}
                style={{
                    ...alignCenter,
                    justifyContent: 'flex-start'
                }}>
                <div className={styles.parallax_description}>
                    <h1 style={{color: "white"}} className="display-2">
                        {page.title || service.title}
                    </h1>
                    <p style={{color: "white"}}>{page.description}</p>
                </div>
            </ParallaxLayer>);
        }
    return (
        <Layout>
            <Head>
                <title>{service?.title}{' '}| Glitex Solutions Limited</title>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="description"
                      content={service?.meta?.description || service?.description || ""}/>
                <meta name="keywords"
                      content={service?.meta?.keywords}/>
                <link rel="canonical"
                      href={`https://glitexsolutions.co.ke/services/${id}`}/>

                <meta property="og:site_name" content="Glitex Solutions Limited"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://glitexsolutions.co.ke/"/>
                <meta property="og:title"
                      content={service?.title || ""}/>

                <meta property="og:description"
                      content={service?.meta?.description || service?.description || ""}/>
                <meta name="keywords"
                      content="Software Development Company Nairobi - Kenya, Mobile Application Development, Mobile Apps Developers in Kenya, E-commerce systems in Kenya, E-learning systems in Kenya, Management system Kenya, Websites, USSD Codes in Kenya, Bulk SMS, Short Codes in Kenya, SEO (Search Engine Optimization) Company in Nairobi - Kenya"/>

            </Head>
            <Parallax pages={service?.pages?.length ?? 1}>
                {children.length > 0 ? children :
                    <ParallaxLayer
                        offset={0}
                        style={{
                            ...alignCenter,
                            justifyContent: 'center'
                        }}>
                        <div style={{alignItems: "center"}} className={styles.parallax_description}>
                            <h3 style={{color: "white"}} className="display-2">
                                Not Found
                            </h3>
                            <a href="/" className="smoothscroll btn btn--primary">
                                Go Home
                            </a>
                        </div>
                    </ParallaxLayer>
                }
            </Parallax>
        </Layout>
    );
}

export default AllServices;