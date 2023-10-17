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
    autoplaySpeed: 5 * 1000,
  };

  return (
    <div className={clsx("slider-background relative w-full", className)}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(
              "relative h-[749px] w-full xl:aspect-[1440/543] xl:h-auto"
            )}
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
              }}
              className="h-full w-full bg-cover bg-no-repeat"
            ></div>

            <div className="absolute left-[50%] top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] justify-center">
              {children}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
