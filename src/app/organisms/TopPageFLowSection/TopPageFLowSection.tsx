import React from "react";
import items from "./items";
import clsx from "clsx";

interface IProps {}

const TopPageFLowSection: React.FC<IProps> = () => {
  return (
    <div id="Flow">
      <div className="mt-[150px] flex flex-col items-center justify-center xl:mt-[100px]">
        <div className="mb-[5px] w-max border-b-2 border-color-custom pb-[3px] text-center font-noto-sans text-xl uppercase leading-lg text-primary xl:px-0">
          FLOW
        </div>

        <div className="mb-[51px] font-noto-sans text-2xl font-bold xl:mb-[79px] xl:px-0 xl:text-3xl">
          お問い合せからの流れ
        </div>
      </div>

      <div className="mb-[120px] flex w-full flex-col gap-[14px] px-[20px] xl:mx-auto xl:mb-[100px] xl:w-[994px] xl:px-0">
        {items.map((item, index) => (
          <div className="relative flex" key={item.label}>
            <div
              className={clsx(
                "mx-auto flex min-h-[150px] w-[100px] min-w-[100px] items-center justify-center bg-cover bg-center bg-no-repeat text-left font-noto-sans-jp text-[15px] font-bold text-white xl:w-[150px] xl:min-w-[150px] xl:text-[21px]",
                index === 2 && "px-[12px] xl:px-0 xl:pl-[23px]",
                index === 3 && "px-[20px] xl:px-[33px]"
              )}
              style={{
                background: `url('${item.img}')`,
                backgroundSize: "cover !important",
                backgroundRepeat: "no-repeat !important",
                backgroundPosition: "center",
              }}
            >
              {item.label}
            </div>
            <div className="w-full bg-card-background-primary px-[25px] py-[48px] font-noto-sans-jp text-[15px] font-normal leading-sm xl:px-[21px] xl:py-[57px] xl:text-[18px] xl:leading-lg">
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
