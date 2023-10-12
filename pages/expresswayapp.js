import React, {useEffect} from "react";
import Layout from "../components/main/layout";
import {
  AnalysisSection,
  InteractionSection,
  ReviewSection,
} from "../components/pages/projects/express_way";
import mixpanel from "mixpanel-browser";

const Expresswayapp = () => {
    useEffect(() => {
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID||'',{ debug: true, track_pageview: true, persistence: 'localStorage' })
        mixpanel.track_pageview({"page": "expresswayapp"});
    }, []);

  return (
    <Layout className={"bg-white pt-24 px-5 md:px-10"} hidePhone>
      {/*sections */}
      <AnalysisSection />

      <InteractionSection />

      <ReviewSection />
    </Layout>
  );
};

export default Expresswayapp;
