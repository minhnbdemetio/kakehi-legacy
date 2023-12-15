"use client";

import CardDescription from "@/app/components/CardDescription";
import SectionTitle from "@/app/components/SectionTitle";
import React from "react";
import "./responsive.css";

import "./style.scss";
import PreviewImages from "@/app/components/PreviewImages";
import clsx from "clsx";

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
  imageTrueSize?: boolean;
  imgSp?: string;
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
        className={`description-section-content relative mt-16.2/3 bg-transparent pb-16.2/3 md:mt-[5px] xxl:mt-36 xxl:h-fit xxl:pb-0 ${titlePosition}`}
      >
        <div
          className={`description-section-content-body  relative  z-20  h-full xxl:flex xxl:items-stretch `}
        >
          <div className="description-section-img-box h-full w-full xxl:relative xxl:h-auto">
            {rest.type === "single-image" ? (
              <>
                {rest.imageTrueSize ? (
                  <div className="relative flex h-full w-full items-end">
                    <img
                      alt={subtitle}
                      src={rest.img}
                      className={clsx("w-full", {
                        "hidden md:block": !!rest.img,
                      })}
                    />
                    <img
                      alt={subtitle}
                      src={rest.imgSp}
                      className={clsx("w-full", {
                        "block md:hidden": !!rest.imgSp,
                      })}
                    />
                  </div>
                ) : (
                  <div
                    className="description-section-img w-full xxl:z-20 "
                    style={{ backgroundImage: `url(${rest.img})` }}
                  />
                )}
              </>
            ) : (
              <PreviewImages
                images={rest.images}
                mainImgHeight={rest.mainImgHeight}
                miniImgHeight={rest.miniImgHeight}
              />
            )}
          </div>

          <ul
            className={`mt-16.2/3 grid grid-cols-1 gap-7 px-7 md:mx-auto  md:px-[14.028776978%] md:pb-[77px] xxl:flex-1 xxl:gap-3 xxl:self-end xxl:pb-0 xxl:pl-3 ${
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

        {/* <div className='description-section-content-items pb-14  px-7 grid grid-cols-1 xxl:grid-cols-2 gap-7 xxl:z-10 xxl:gap-0 xxl:px-0'>
               
            </div> */}
      </div>
    </div>
  );
};

export default DescriptionSection;
