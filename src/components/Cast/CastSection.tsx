"use client";
import React from "react";
import { CastLogo } from "@/constants/Svgs/CastLogo.svg";
import { CrewLogo } from "@/constants/Svgs/CrewLogo.svg";
import { StarsToLeft } from "@/constants/Svgs/StarsToLeft";
import { StarsToRIght } from "@/constants/Svgs/StarToRIght";
import { lexend, playfairDisplay } from "@/fonts/fonts";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { CAST } from "@/constants/Svgs/globals/constants";

const CastSection = () => {
  return (
    <div className="z-30 container mx-auto w-full p-4 md:px-8">
      <div
        className="relative flex flex-col items-center w-full min-h-[100vh]     "
        data-aos="fade-up"
      >
        <div className={`relative  w-full `}>
          <div
            className={`top-[0vh] capitalize absolute z-10 flex flex-col items-center w-full text-white text-center ${playfairDisplay.className}`}
          >
            <CrewLogo className="w-20 sm:w-32 h-auto" data-aos="flip-left" />
            <h1 className="font-bold underline mt-2" data-aos="fade-left">
              Director
            </h1>
            <p data-aos="fade-left">Taha alhamid</p>
            <h1 className="font-bold underline mt-2" data-aos="fade-right">
              Executive producer
            </h1>
            <p data-aos="fade-right">Mariam al kaabi</p>
            <h1 className="font-bold underline mt-2" data-aos="fade-left">
              Director of photogeraphy
            </h1>
            <p data-aos="fade-left">Syed Ebrahim</p>
            <div className="w-5/12 bg-[#EFA300] h-[1px] rounded-full mt-4"></div>
            <div className="flex flex-row items-end justify-center mt-4">
              <StarsToLeft className="w-16 sm:w-24 h-auto mb-4" />
              <CastLogo className="w-20 sm:w-32 h-auto" data-aos="flip-right" />
              <StarsToRIght className="w-16 sm:w-24 h-auto mb-4" />
            </div>

            <div className="flex flex-col items-center w-full">
              <Swiper
                slidesPerView={6}
                spaceBetween={20}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1000: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full "
              >
                {CAST.map((cast, index) => (
                  <SwiperSlide
                    className="flex flex-col items-center justify-center"
                    key={index}
                  >
                    <img
                      src={cast.image}
                      alt={cast.name}
                      className="w-full h-auto"
                    />
                    <p className="capitalize">{cast.name}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-8/12 bg-[#EFA300] h-[1px] rounded-full mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastSection;
