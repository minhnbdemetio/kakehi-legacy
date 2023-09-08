"use client";

import React, { useCallback, useState } from "react";
import "./style.scss";

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
  const [mainImg, setMainImg] = useState(images[0]);

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
        className="main-image mb-2 mt-10"
        style={{
          height: mainImgHeight,
          backgroundImage: `url(${mainImg.src})`,
        }}
      ></div>

      <div
        className="list-images grid grid-cols-5 gap-2"
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
            dat-tag={image.tag}
            data-src={image.src}
          />
        ))}
      </div>

      <span className="tag absolute left-0 top-0 px-7 py-3 text-md">
        {mainImg.tag}
      </span>
    </div>
  );
};

export default PreviewImages;
