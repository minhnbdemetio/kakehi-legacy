"use client";

import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

interface SliderBackgroundWithSloganProps extends PropsWithChildren {
  images: string[];
  className?: string;
}

export default function SliderBackgroundWithSlogan({
  images,
  className,
  children,
}: SliderBackgroundWithSloganProps) {
  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5 * 1000000000,
  };

  return (
    <div
      className={clsx("slider-background relative mb-[-5px] w-full", className)}
      style={{}}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx("h-[749px] w-full xl:aspect-[1440/543] xl:h-auto")}
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
              }}
              className="h-full w-full bg-cover bg-no-repeat"
            ></div>
          </div>
        ))}
      </Slider>
      <div className="absolute left-[50%] top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] justify-center">
        <h1 className="hidden whitespace-pre-wrap text-center text-3xl xl:block">{`システム建築で、\n工場・倉庫に 最適な答えを。`}</h1>
        <h1 className="block w-full whitespace-pre-wrap text-center text-3xl xl:hidden">{`システム建築で、\n工場・倉庫に \n最適な答えを。`}</h1>
      </div>
    </div>
  );
}
