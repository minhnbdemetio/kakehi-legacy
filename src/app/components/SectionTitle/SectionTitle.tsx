import React from "react";
import "./style.scss";
import "./responsive.css";
import CLSX from "clsx";

interface IProps {
  fistTitle?: string;
  secondTitle: string;
  subtitle: string;
  position: "right" | "left";
}

const SectionTitle: React.FC<IProps> = ({
  fistTitle,
  secondTitle,
  subtitle,
  position,
}) => {
  return (
    <div
      className={CLSX({
        [`section-title-container relative  flex flex-col position-${position} `]:
          true,
      })}
    >
      <p className="subtitle relative font-medium leading-[normal] text-4xl xl:text-6xl xl:font-medium ">
        {subtitle}
      </p>
      <div className="title">
        <div>
          <p
            className={CLSX({
              [`xl:pt-18s z-20 mx-7  whitespace-normal text-2xl  leading-[normal] font-bold xl:mx-0 xl:pl-16.2/3 xl:text-3xl`]:
                true,
              [`text-right xl:text-left`]: position === "right",
              [`text-left xl:text-left xl:pl-46.2/3`]: position === "left",
            })}
          >
            {fistTitle}
          </p>
          <p
            className={CLSX({
              [`z-20 mx-7 whitespace-normal  leading-[normal] text-[27px] font-bold  xl:mx-0 xl:pl-16.2/3 xl:text-[40px]`]:
                true,
              [`text-right xl:text-left xl:text-3xl`]: position === "right",
              [`text-left xl:text-left  xl:pl-46.2/3 `]: position === "left",
            })}
          >
            {secondTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
