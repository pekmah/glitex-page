import React, { useMemo } from "react";
import Layout from "../../layout";
import { useParams } from "next/navigation";
import { portfolioData } from "../../providers/projects/data";
import { PortfolioViewHeader, PortfolioViewImages } from "../../components";

const View = () => {
  // path name

  const params = useParams();

  const currentProject = useMemo(() => {
    if (params?.id) {
      return portfolioData[params?.id];
    } else {
      return null;
    }
  }, [params?.id]);
  return (
    <Layout>
      <PortfolioViewHeader
        description={currentProject?.description}
        title={currentProject?.title}
      />

      <PortfolioViewImages />
    </Layout>
  );
};

export default View;
