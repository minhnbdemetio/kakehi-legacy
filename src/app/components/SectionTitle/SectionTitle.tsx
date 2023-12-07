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
      <p className="subtitle relative text-4xl font-medium leading-[normal] xl:text-6xl">
        {subtitle}
      </p>
      <div className="title">
        <div>
          <p
            className={CLSX(
              "xl:pt-18s z-20 mx-7 whitespace-normal  text-[20px] font-bold leading-sectionTitle xl:mx-0 xl:pl-16.2/3 xl:text-3xl xl:leading-[normal]",
              {
                [`text-right xl:text-left`]: position === "right",
                [`text-left xl:pl-46.2/3 xl:text-left`]: position === "left",
              }
            )}
          >
            {fistTitle}
          </p>
          <p
            className={CLSX(
              "z-20  mx-7 whitespace-normal text-2xl font-bold leading-sectionTitle xl:mx-0 xl:pl-16.2/3 xl:text-[40px] xl:leading-[normal]",
              {
                [`text-right xl:text-left xl:text-3xl`]: position === "right",
                [`text-left xl:pl-46.2/3 xl:text-left `]: position === "left",
              }
            )}
          >
            {secondTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
