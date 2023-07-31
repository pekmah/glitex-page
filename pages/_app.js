import '../styles/globals.scss'
import Head from 'next/head';
import {useEffect} from "react";
import mixpanel from 'mixpanel-browser'

function MyApp({Component, pageProps}) {
    useEffect(() => {
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID||'',{ debug: true, track_pageview: true, persistence: 'localStorage' })
        mixpanel.track_pageview();
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>

                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </>

    )
}

export default MyApp
