import React from "react";
import "./style.scss";
import "./responsive.css";
import CLSX from "clsx";
import clsx from "clsx";

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
      <p
        className={clsx(
          "subtitle relative text-4xl font-medium leading-[normal] ",
          "md:text-[72px] md:leading-[98px] md:!tracking-[7.2px]",
          "xxl:text-6xl xxl:!tracking-[12.8px]"
        )}
      >
        {subtitle}
      </p>
      <div className="title">
        <div className="md:!h-[67px] xxl:!h-[117px]">
          <p
            className={CLSX(
              "xl:pt-18s z-20 mx-7 whitespace-normal  text-[20px] font-bold leading-sectionTitle",
              "md:mx-[30px] md:pl-0 md:text-[24px] md:leading-[30px]",
              " xxl:mx-0 xxl:pl-16.2/3 xxl:text-3xl xxl:leading-[normal]",
              {
                [`text-right xxl:text-left`]: position === "right",
                [`text-left xxl:pl-46.2/3 xxl:text-left`]: position === "left",
              }
            )}
          >
            {fistTitle}
          </p>
          <p
            className={CLSX(
              "z-20  mx-7 whitespace-normal text-2xl font-bold leading-sectionTitle ",
              "md:mx-[30px] md:pl-0 md:text-[32px] md:leading-[30px]",
              "xxl:mx-0 xxl:pl-16.2/3 xxl:text-[40px] xxl:leading-[normal]",
              {
                [`text-right xxl:text-left xxl:text-3xl`]: position === "right",
                [`text-left xxl:pl-46.2/3 xxl:text-left `]: position === "left",
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
