import React, { useMemo } from "react";
import { SectionWrapper } from "../../general";
import { portfolioData } from "../../../providers/projects/data";
import { useParams } from "next/navigation";

const Images = () => {
  const params = useParams();

  const currentProject = useMemo(() => {
    if (params?.id) {
      return portfolioData[params?.id];
    } else {
      return null;
    }
  }, [params?.id]);

  return (
    <SectionWrapper
      sectionClassName={""}
      className={
        "grid gap-5 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-14 md:pb-32 "
      }
    >
      {currentProject?.images?.map((img) => (
        <img
          src={img}
          className={"object-contain w-full c-shadow rounded-2xl"}
          alt={img}
        />
      ))}
    </SectionWrapper>
  );
};

export default Images;
