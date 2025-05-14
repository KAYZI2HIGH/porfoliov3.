"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/lib/utils";
import { useRef, useState } from "react";
import {Swiper as SwiperType} from 'swiper/types'
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images }: { images: SanityImageObject[] }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <Swiper
      modules={[EffectCube]}
      slidesPerView={1}
      effect="card"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onInit={(swiper) => {
        setActiveIndex(swiper.activeIndex + 1);
        setTotalSlides(swiper.slides.length);
      }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex + 1);
      }}
      className="absolute w-full h-full"
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={urlFor(image)?.url() || ""}
              alt={"Project Images"}
              fill
            />
          </SwiperSlide>
        );
      })}
      <div className="w-[105px] h-[74px] rounded-t-[100px] absolute -bottom-[19px] z-50 bg-[#E0E0E0] left-1/2 -translate-x-1/2 flex justify-center items-center gap-1">
        <Image
          src={"/icons/images_icon.svg"}
          height={18}
          width={18}
          alt="image-icon"
        />
        <h3 className="font-bold text-[16px] text-black">
          {activeIndex}/{totalSlides}
        </h3>
      </div>
      <div className="absolute top-0  w-full h-full z-30 bg-black/5 flex justify-between items-center px-5">
        <div
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white/50 shadow-[0_5px_10px_rgba(0,0,0,0.2)] backdrop-blur-[62.5px] text-black cursor-pointer hover:bg-white/60 transition-all duration-300 ease-in-out"
          onClick={() => swiperRef?.current?.slidePrev()}
        >
          <ChevronLeft className="w-[30px] h-[30px]" />
        </div>
        <div
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white/50 shadow-[0_5px_10px_rgba(0,0,0,0.2)] backdrop-blur-[62.5px] text-black cursor-pointer hover:bg-white/60 transition-all duration-300 ease-in-out"
          onClick={() => swiperRef?.current?.slideNext()}
        >
          <ChevronRight className="w-[25px] h-[25px]" />
        </div>
      </div>
    </Swiper>
  );
};

export default ImageSlider;
