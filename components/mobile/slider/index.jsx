import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionWrapper from "../../general/SectionWrapper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import { portfolioData } from "../../../providers/projects/data";
import { CButton } from "../../general";
import { AreYouInSearch } from "../index";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { useRouter } from "next/router";

const Slider = () => {
  const { size } = useWindowDimensions();
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * opens project: /portfolio/[id]
   * @param {string} id
   */
  const handleViewProject = async (id) => {
    await router.push(`/portfolio/${id}`);
  };

  return (
    <SectionWrapper
      sectionClassName={"relative bg-pale-gray pb-20"}
      className={
        "py-10 md:py-8 px-5 md:px-0 gap-5 md:gap-0 center flex-col-reverse md:flex-row "
      }
    >
      <div className={"flex-[2] flex flex-col h-full md:pl-28"}>
        <h3 className={" leading-8 md:leading-11  "}>Recently Completed.</h3>

        <h4 className="text-c-yellow my-5">
          {portfolioData[activeIndex]?.title}
        </h4>

        <p
          className={
            "text-base md:text-lg leading-8 font-400 md:pr-5 ease-in-out duration-300 h-60 line-clamp-[7]"
          }
        >
          {portfolioData[activeIndex]?.description}
        </p>

        <CButton
          text={"View More"}
          className={"text-sm md:text-base mr-auto px-10 mt-5"}
          handleClick={() => handleViewProject(activeIndex.toString())}
        />
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor
        centeredSlides
        slidesPerView={size === "sm" ? 2 : 3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
          clickable: true,
        }}
        onActiveIndexChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        spaceBetween={size === "sm" ? "10px" : "40px"}
        className={"swiper_container"}
      >
        {Object.keys(portfolioData).map((item, ind) => (
          <SwiperSlide key={ind}>
            <img src={portfolioData[item]?.image} alt={"slide_image"} />
          </SwiperSlide>
        ))}

        <div className={"h-10"} />

        <div
          className={
            "bottom-28 md:bottom-6 relative w-3/4 md:w-1/3 m-auto center-y-between-x "
          }
        >
          <button className={" swiper-prev  z-50 w-12 h-12 my-auto center"}>
            <GrPrevious className={"text-xl text-gray-400"} />
          </button>

          <button
            className={
              " swiper-next w-12 z-50 h-12 m y-auto cursor-pointer center"
            }
          >
            <GrNext className={"text-xl text-gray-400"} />
          </button>

          <div className={"swiper-pagination mt-2 inset-0 m-auto"}></div>
        </div>
      </Swiper>

      <AreYouInSearch />
    </SectionWrapper>
  );
};

export default Slider;
