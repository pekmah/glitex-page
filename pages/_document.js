import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Glitex Solutions</title>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>

                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <link rel="stylesheet" href="/css/base.css/"/>
                    <link rel="stylesheet" href="/css/vendor.css"/>
                    <link rel="stylesheet" href="/css/main.css"/>

                    <script src="/js/modernizr.js"/>
                    <script src="/js/pace.min.js"/>
                    <link rel="shortcut icon" href="logo.png" type="image/x-icon"/>
                    <link rel="icon" href="logo.png" type="image/x-icon"/>
                </Head>
                <body id="top">
                <Main/>
                <NextScript/>
                <script src="/js/jquery-3.2.1.min.js"/>
                <script src="/js/plugins.js"/>
                <script src="/js/main.js"/>
                {/*Scripts etc.*/}
                <div aria-hidden="true" className="pswp" role="dialog" tabIndex="-1">
                    <div className="pswp__bg"/>
                    <div className="pswp__scroll-wrap">
                        <div className="pswp__container">
                            <div className="pswp__item"/>
                            <div className="pswp__item"/>
                            <div className="pswp__item"/>
                        </div>
                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter"/>
                                <button className="pswp__button pswp__button--close" title="Close (Esc)"/>
                                <button className="pswp__button pswp__button--share" title="Share"/>
                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"/>
                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"/>
                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip"/>
                            </div>
                            <button className="pswp__button pswp__button--arrow--left"
                                    title="Previous (arrow left)"/>
                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"/>
                            <div className="pswp__caption">
                                <div className="pswp__caption__center"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="preloader">
                    <div id="loader">
                        <div className="line-scale-pulse-out">
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                </div>
                </body>
            </Html>
        )
    }
}

export default MyDocument