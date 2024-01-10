import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionWrapper from "../general/SectionWrapper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import { portfolioData } from "../../providers/projects/data";
import { CButton } from "../general";
import TurnYourIdeas from "./TurnYourIdeas";
import { useRouter } from "next/router";

const WorkDone = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  /**
   * opens project: /portfolio/[id]
   * @param {string} id
   */
  const handleViewProject = async (id) => {
    await router.push(`/portfolio/${id}`);
  };

  return (
    <SectionWrapper
      sectionClassName={"relative bg-bg-yellow pb-20 -mt-10 min-h-screen"}
      className={"py-10 md:py-8 px-5 md:px-0 "}
    >
      <h2 className={" leading-8 md:leading-11 mb-10 md:mt-24 text-center"}>
        Some of the work we have done
      </h2>

      <div className="gap-5 md:gap-0 center flex-col md:flex-row ">
        <div className={"flex-[2] flex flex-col h-full md:pl-28"}>
          <h3 className={" leading-8 md:leading-11  "}>
            Some of the work we have done
          </h3>

          <h4 className="text-c-yellow my-5">
            {portfolioData[activeIndex + 1]?.title}
          </h4>

          <p
            className={
              "text-lg leading-8 font-400 md:pr-5 ease-in-out duration-300"
            }
          >
            {portfolioData[activeIndex + 1]?.description}
          </p>

          <CButton
            text={"View More"}
            className={"text-lg md:text-base mr-auto px-10 mt-5"}
            handleClick={() => handleViewProject((activeIndex + 1).toString())}
          />
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          slidesPerView={3}
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
          spaceBetween={"40px"}
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
              "bottom-6 relative w-full md:w-1/3 m-auto center-y-between-x "
            }
          >
            <button className={" swiper-prev w-8 h-8 my-auto"}>
              <GrPrevious className={"text-xl text-gray-400"} />
            </button>

            <button className={" swiper-next w-8 h-8 m y-auto cursor-pointer"}>
              <GrNext className={"text-xl text-gray-400"} />
            </button>

            <div className={"swiper-pagination mt-2 inset-0 m-auto"}></div>
          </div>
        </Swiper>
      </div>

      <TurnYourIdeas />
    </SectionWrapper>
  );
};

export default WorkDone;
