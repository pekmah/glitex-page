import React from 'react';
import Layout from "../../main/layout";
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import styles from './css/services.module.scss';

const alignCenter = {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
}

function AllServices({service}) {
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
                    <h3 style={{color: "white"}} className="display-2">
                        {page.title || service.title}
                    </h3>
                    <p style={{color: "white"}}>{page.description}</p>
                </div>
            </ParallaxLayer>);
        }
    return (
        <Layout>
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