import React, {useMemo} from "react";
import Layout from "../../layout";
import {ServiceAbout, ServiceDescription, ServiceMain, ServiceSteps,} from "../../components";
import {useParams} from "next/navigation";
import {servicePages} from "../../providers/mis/data";
import useWindowDimensions from "../../hooks/useWindowDimensions";

/**
 * Possible routes: mis,games,ai,seo
 * @returns {JSX.Element}
 * @constructor
 */
const Service = () => {
  const params = useParams();
  const { size } = useWindowDimensions();

  const currentService = useMemo(() => {
    if (params?.service) {
      return servicePages && servicePages[params?.service];

      // return servicePages[params?.service];
    } else {
      return null;
    }
  }, [params?.service]);

  return (
    <Layout>
      {/*  Main Section  */}
      <ServiceMain
        title={currentService?.main?.title}
        subtitle={currentService?.main?.subtitle}
        imageUrl={currentService?.main?.imageUrl}
      />

      {/* Description */}
      <ServiceDescription
        title={currentService?.description?.title}
        body={currentService?.description?.body}
      />

      {/*    About  */}
      <ServiceAbout
        title={currentService?.about?.title}
        body={currentService?.about?.body}
        floater={!currentService?.steps ? currentService?.floater : null}
      />

      {/*    Steps section  */}
      {currentService?.steps && (
        <ServiceSteps
          title={currentService?.steps?.title}
          subtitle={currentService?.steps?.subtitle}
          steps={currentService?.steps?.steps}
          floater={currentService?.floater}
        />
      )}

      <div
        style={{
          height:
            size === "sm"
              ? currentService?.floater?.style?.bgSpaceSm
              : currentService?.floater?.style?.bgSpace,
        }}
        className={` bg-primary`}
      />
    </Layout>
  );
};

export default Service;
