import Layout from "../layout";
import React from "react";
import { SectionWrapper } from "../components";

const Mobile = () => {
  return (
    <Layout>
      <SectionWrapper
        sectionClassName={"h-[75vh] md:-bottom-[400px] mx-3"}
        className={" p-5 md:p-8 rounded-2xl "}
      >
        {/* <div className={"center"}> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/glitexsolutions-info/30min"
          //   style="min-width:320px;height:700px;"
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </SectionWrapper>
    </Layout>
  );
};

export default Mobile;
