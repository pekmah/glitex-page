import React, { useEffect } from "react";

import Layout from "../layout";
import { SectionWrapper } from "../components";

const Mobile = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <SectionWrapper
        sectionClassName={"md:h-[75vh] md:-bottom-[400px] mx-3"}
        className={" p-5 md:p-8 rounded-2xl "}
      >
        <div
          className="calendly-inline-widget h-[90vh] overflow-hidden"
          data-url="https://calendly.com/glitexsolutions-info/30min"
          style={{
            minWidth: "320px",
            width: "100%",
            minHeight: "400px",
          }}
        ></div>
      </SectionWrapper>
    </Layout>
  );
};

export default Mobile;
