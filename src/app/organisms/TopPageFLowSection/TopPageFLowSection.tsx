import React from "react";
import items from "./items";
import clsx from "clsx";
import Image from "next/image";
import { ScrollToHash } from "@/app/components/ScrollToHash";

interface IProps {}

const TopPageFLowSection: React.FC<IProps> = () => {
  return (
    <div>
      <ScrollToHash hash="#Flow" />
      <div className="flex flex-col items-center justify-center pt-33 md:pt-[100px] xxl:pt-33">
        <div
          className={clsx(
            "mb-3 w-max border-b-2 border-color-custom pb-[3px] text-center font-noto-sans text-base uppercase text-primary ",
            "md:text-[15px]",
            "xxl:mb-[5px] xxl:px-0 xxl:text-xl xxl:leading-lg"
          )}
        >
          FLOW
        </div>
        <div
          className={clsx(
            "mb-[51px] font-noto-sans-jp-gg text-1.5xl font-bold ",
            "md:mb-[75px] md:text-2xl",
            "xxl:mb-[79px] xxl:px-0 xxl:text-3xl"
          )}
        >
          お問い合わせからの流れ
        </div>
      </div>

      <div
        className={clsx(
          "mb-[100px] flex w-full flex-col gap-[14px] px-[20px] ",
          "md:mx-auto md:mb-[150px] md:gap-[15px] md:px-[15.2278%]",
          "xxl:md-[14px] xxl:mx-auto xxl:w-[994px] xxl:px-0"
        )}
      >
        {items.map((item, index) => (
          <div className="relative flex xxl:h-[150px]" key={item.label}>
            <div
              className={clsx(
                "relative mx-auto flex w-[100px] min-w-[100px] items-center justify-center bg-cover bg-center bg-no-repeat text-left text-[15px] font-bold text-white ",
                "md:aspect-square md:min-h-[147px] md:min-w-[130px] md:text-[18px]",
                "xxl:w-[150px] xxl:min-w-[150px] xxl:text-[21px]"
                // index === 2 && "px-[12px] xxl:px-0 xxl:pl-[23px]",
                // index === 3 && "px-[20px] xxl:px-[33px]"
              )}
              style={{ background: item.bgColor }}
            >
              <Image
                src={item.img}
                alt={item.label}
                layout="fill"
                objectFit="cover"
                className=" !left-1/2 !top-1/2 !h-auto w-full -translate-x-1/2 -translate-y-1/2 p-[20px]"
              />
              <div className="z-10 whitespace-pre">{item.label}</div>
            </div>
            <div
              className={clsx(
                "flex w-full content-center items-center bg-card-background-primary p-[25px] font-noto-sans-jp-gg text-md font-normal leading-[24px] ",
                "md:pb-[29px] md:pt-[28px] md:text-[15px] md:leading-[30px]",
                "xxl:p-9 xxl:px-[21px] xxl:py-[57px] xxl:text-[18px] xxl:font-[350] xxl:leading-lg"
              )}
            >
              {item.content}
            </div>
            {index !== items.length - 1 && (
              <div
                className={clsx(
                  "absolute bottom-[-20px] left-1/2 z-50",
                  "md:bottom-[-25px]",
                  "xxl:bottom-[-20px]"
                )}
              >
                <img
                  src="/icons/polygon.png"
                  alt="polygon"
                  className="block md:hidden xxl:block"
                />
                <img
                  src="/icons/polygon-tablet-icon.svg"
                  alt="polygon"
                  className="hidden w-[60px] md:block xxl:hidden"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPageFLowSection;
