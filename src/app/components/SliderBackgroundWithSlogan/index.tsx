"use client";

import clsx from "clsx";
import { PropsWithChildren } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";
import "./responsive.css";

interface SliderBackgroundWithSloganProps extends PropsWithChildren {
  images: string[];
  imagesMobile?: string[];
  className?: string;
  imagesTablet?: string[];
}

export default function SliderBackgroundWithSlogan({
  images,
  imagesMobile,
  className,
  imagesTablet,
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
    <div
      className={clsx("slider-background relative mb-[-5px] w-full", className)}
      style={{}}
    >
      <Slider {...settings}>
        {
          images.map((image, index) => (
            <div
              key={index}
              className={clsx(" w-full xl:aspect-[1440/543] xl:h-auto")}
            >
              <picture>
                {imagesMobile && imagesMobile.length === images.length ? (
                  <source
                    media="(max-width: 576px)"
                    srcSet={imagesMobile[index]}
                  />
                ) : null}
                {imagesTablet && imagesTablet.length === images.length ? (
                  <source
                    media="(max-width: 1024px)"
                    srcSet={imagesTablet[index]}
                  />
                ) : null}
                <img src={image} alt="banner" />
              </picture>
            </div>
          )) as any
        }
      </Slider>
      <div className="absolute left-[50%] top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] justify-center">
        <h1>
          <span
            className={clsx(
              "hidden whitespace-pre-wrap text-center font-bold ",
              "md:block md:text-[30px]",
              "xl:text-3.5xl"
            )}
            style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.75)" }}
          >{`システム建築で、\n工場・倉庫に 最適な答えを。`}</span>

          <span
            style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.75)" }}
            className="block w-full whitespace-pre-wrap text-center text-2xl font-bold md:hidden"
          >{`システム建築で、\n工場・倉庫に \n最適な答えを。`}</span>
        </h1>
      </div>
    </div>
  );
}
