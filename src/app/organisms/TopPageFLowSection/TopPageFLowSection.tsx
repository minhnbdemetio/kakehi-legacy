import React, { useEffect } from "react";
import items from "./items";
import clsx from "clsx";
import Image from "next/image";

import { useSearchParams } from "next/navigation";

interface IProps {}

const TopPageFLowSection: React.FC<IProps> = () => {
  return (
    <div id="Flow">
      <div className="mt-33 flex flex-col items-center justify-center">
        <div className="mb-3 w-max border-b-2 border-color-custom pb-[3px] text-center font-noto-sans text-base uppercase text-primary xl:mb-[5px] xl:px-0 xl:text-xl xl:leading-lg">
          FLOW
        </div>

        <div className="mb-[51px] font-noto-sans text-1.5xl font-bold xl:mb-[79px] xl:px-0 xl:text-3xl">
          お問い合わせからの流れ
        </div>
      </div>

      <div className="mb-[100px] flex w-full flex-col gap-[14px] px-[20px] xl:mx-auto xl:w-[994px] xl:px-0">
        {items.map((item, index) => (
          <div className="relative flex xl:h-[150px]" key={item.label}>
            <div
              className={clsx(
                "relative mx-auto flex w-[100px] min-w-[100px] items-center justify-center bg-cover bg-center bg-no-repeat text-left text-[15px] font-bold text-white xl:w-[150px] xl:min-w-[150px] xl:text-[21px]"
                // index === 2 && "px-[12px] xl:px-0 xl:pl-[23px]",
                // index === 3 && "px-[20px] xl:px-[33px]"
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
            <div className="-gg flex w-full content-center items-center bg-card-background-primary p-[25px] text-md font-normal leading-[24px] xl:p-9 xl:px-[21px] xl:py-[57px] xl:text-[18px] xl:font-[350] xl:leading-lg">
              {item.content}
            </div>
            {index !== items.length - 1 && (
              <div className="absolute bottom-[-20px] left-1/2 z-50">
                <img src="/icons/polygon.png" alt="polygon" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPageFLowSection;
