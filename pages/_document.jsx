import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/css/vendor.css" />
          <link rel="stylesheet" href="/css/main.css" />
          <link rel="stylesheet" href="/css/slider.css" />
          <script type="text/javascript"></script>

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            (function(c,l,a,r,i,t,y){
              // eslint-disable-next-line
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              // eslint-disable-next-line
              })(window, document, "clarity", "script", "kjoq58b3y8");
            `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/66470d1d981b6c56477177ae/1hu2omf8f';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `,
            }}
          />
        </Head>
        <body id="top">
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js" />
          <script src="/js/plugins.js" />
          <script src="/js/main.js" />

          {/*Scripts etc.*/}
          <div aria-hidden="true" className="pswp" role="dialog" tabIndex="-1">
            <div className="pswp__bg h-0" />
            <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                <div className="pswp__item" />
                <div className="pswp__item" />
                <div className="pswp__item" />
              </div>
              <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                  <div className="pswp__counter" />
                  <button
                    className="pswp__button pswp__button--close"
                    title="Close (Esc)"
                  />
                  <button
                    className="pswp__button pswp__button--share"
                    title="Share"
                  />
                  <button
                    className="pswp__button pswp__button--fs"
                    title="Toggle fullscreen"
                  />
                  <button
                    className="pswp__button pswp__button--zoom"
                    title="Zoom in/out"
                  />
                  <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                      <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div className="pswp__share-tooltip" />
                </div>
                <button
                  className="pswp__button pswp__button--arrow--left"
                  title="Previous (arrow left)"
                />
                <button
                  className="pswp__button pswp__button--arrow--right"
                  title="Next (arrow right)"
                />
                <div className="pswp__caption">
                  <div className="pswp__caption__center" />
                </div>
              </div>
            </div>
          </div>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6L8MC15QF8"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-6L8MC15QF8');
          `,
            }}
          />
          <script></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
