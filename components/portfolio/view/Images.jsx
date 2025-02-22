import React, { useMemo } from "react";

import { SectionWrapper } from "../../general";
import { portfolioData } from "../../../providers/projects/data";
import { useParams } from "next/navigation";

const Images = ({ tab }) => {
  const params = useParams();

  const currentProject = useMemo(() => {
    if (params?.id) {
      return portfolioData[params?.id]?.images[tab];
    } else {
      return null;
    }
  }, [params?.id, tab]);

  return (
    <SectionWrapper
      sectionClassName={""}
      className={`grid gap-5 md:gap-8  pb-14 md:pb-32 ${tab === "admin" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} `}
    >
      {currentProject?.map((img, ind) => (
        <img
          key={ind}
          src={img}
          className={`object-contain w-full rounded-2xl  ${tab === "admin" ? "" : "lg:h-[720px]"} `}
          alt={img}
        />
      ))}
    </SectionWrapper>
  );
};

export default Images;
