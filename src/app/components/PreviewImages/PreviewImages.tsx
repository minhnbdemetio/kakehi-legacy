"use client";

import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import clsx from "clsx";

interface IProps {
  images: { tag: string; src: string }[];
  mainImgHeight: number;
  miniImgHeight: number;
}

const PreviewImages: React.FC<IProps> = ({
  images,
  mainImgHeight,
  miniImgHeight,
}) => {
  const [mainImg, setMainImg] = useState(images[0] || "");

  useEffect(() => {
    setMainImg(images[0] || "");
  }, [images]);

  const changeMainImg = useCallback((e: React.MouseEvent) => {
    if (e.currentTarget && e.currentTarget.getAttribute("data-src")) {
      const mouseOverImg = {
        src: e.currentTarget.getAttribute("data-src") || "",
        tag: e.currentTarget.getAttribute("data-tag") || "",
      };

      setMainImg(mouseOverImg);
    }
  }, []);

  return (
    <div className="preview-images-container relative">
      <div
        className="main-image mb-2 mt-10 md:mb-[20px] xxl:mb-3.1/3"
        style={{
          height: mainImgHeight,
          backgroundImage: `url(${mainImg.src})`,
        }}
      ></div>

      <div
        className="list-images grid grid-cols-5 gap-2 md:gap-[11px] xxl:gap-3.1/3"
        style={{ height: miniImgHeight }}
      >
        {images.map((image) => (
          <div
            key={image.src}
            style={{
              height: miniImgHeight,
              backgroundImage: `url(${image.src})`,
            }}
            onMouseOver={changeMainImg}
            data-tag={image.tag}
            data-src={image.src}
          />
        ))}
      </div>

      <span
        className={clsx(
          "tag absolute left-0 top-0 px-7 py-3 text-md leading-[normal]",
          "md:px-[28px] md:pb-[14px] md:pt-[13px] md:text-lg md:leading-[23px]",
          " xxl:px-[35px] xxl:py-5 xxl:pb-[16px] xxl:text-[20px] xxl:leading-[29px] "
        )}
      >
        {mainImg.tag}
      </span>
    </div>
  );
};

export default PreviewImages;
