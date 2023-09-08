"use client";

import CardDescription from "@/app/components/CardDescription";
import SectionTitle from "@/app/components/SectionTitle";
import React, { useMemo } from "react";
import "./responsive.css";

import "./style.scss";
import PreviewImages from "@/app/components/PreviewImages";

interface CommonProps {
  titlePosition: "left" | "right";
  firstTitle: string;
  secondTitle: string;
  subtitle: string;
  items: { label?: string; description: string }[];
}

interface SingleImageProps extends CommonProps {
  type: "single-image";
  img: string;
}

interface MultipleImageProps extends CommonProps {
  type: "multi-image";
  images: { tag: string; src: string }[];
  mainImgHeight: number;
  miniImgHeight: number;
}
declare type IProps = SingleImageProps | MultipleImageProps;

const DescriptionSection: React.FC<IProps> = ({
  items,
  subtitle,
  firstTitle,
  secondTitle,
  titlePosition,
  ...rest
}) => {
  return (
    <div className={`description-section ${titlePosition}`}>
      <SectionTitle
        position={titlePosition}
        subtitle={subtitle}
        secondTitle={secondTitle}
        fistTitle={firstTitle}
      />

      <div
        className={`description-section-content  relative mt-23.1/3  bg-transparent pb-14  xl:mt-36 xl:h-fit xl:pb-0 ${titlePosition}`}
      >
        <div
          className={`description-section-content-body  relative  z-20  h-full xl:flex xl:items-stretch `}
        >
          <div className="description-section-img-box h-full w-full xl:relative xl:h-auto">
            {rest.type === "single-image" ? (
              <div
                className="description-section-img w-full xl:z-20 "
                style={{ backgroundImage: `url(${rest.img})` }}
              />
            ) : (
              <PreviewImages
                images={rest.images}
                mainImgHeight={rest.mainImgHeight}
                miniImgHeight={rest.miniImgHeight}
              />
            )}
          </div>

          <ul
            className={`mt-16.2/3 grid grid-cols-1 gap-7 px-7 xl:flex-1 xl:gap-3 xl:self-end xl:pl-3 ${
              titlePosition === "left" ? "xl:ml-35" : "xl:mr-35"
            } `}
          >
            {items.map((item, index) => (
              <li key={index}>
                <CardDescription
                  label={item.label}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`background absolute left-0 top-0 z-10 h-full w-full ${titlePosition} `}
        ></div>

        {/* <div className='description-section-content-items pb-14  px-7 grid grid-cols-1 xl:grid-cols-2 gap-7 xl:z-10 xl:gap-0 xl:px-0'>
               
            </div> */}
      </div>
    </div>
  );
};

export default DescriptionSection;
