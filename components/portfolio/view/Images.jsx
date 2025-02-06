import React, { useMemo } from "react";

import { SectionWrapper } from "../../general";
import { portfolioData } from "../../../providers/projects/data";
import { useParams } from "next/navigation";

const Images = ({ tab }) => {
  const params = useParams();

  const currentProject = useMemo(() => {
    if (params?.id) {
      if (portfolioData[params?.id]?.prototype) {
        return portfolioData[params?.id]?.prototype;
      }
      return portfolioData[params?.id]?.images[tab];
    } else {
      return null;
    }
  }, [params?.id, tab]);

  return (
    <SectionWrapper
      sectionClassName={""}
      className={
        portfolioData[params?.id]?.prototype
          ? ``
          : `grid gap-5 md:gap-8 pb-14 md:pb-32 pt-5 md:pt-8 ${tab === "admin" ? "grid-cols-1" : tab === "web" ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} `
      }
    >
      {portfolioData[params?.id]?.prototype ? (
        <iframe
          // style={"border: 1px solid rgba(0, 0, 0, 0.1);"}
          width="auto"
          className="min-h-[80vh] w-full"
          src={portfolioData[params?.id]?.prototype}
          allowfullscreen
        ></iframe>
      ) : (
        currentProject?.map((img, ind) => (
          <img
            key={ind}
            src={img}
            className={`object-contain w-11/12 mx-auto md:w-full rounded-2xl  ${tab === "admin" ? "shadow-md" : tab === "web" ? "shadow-md rounded-3xl" : "lg:h-[600px]"} `}
            alt={img}
          />
        ))
      )}
    </SectionWrapper>
  );
};

export default Images;
