import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function TopSectionWork3() {
  return (
    <div className="relative mt-33 xl:mt-17">
      <div
        className={clsx(
          "absolute right-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section ",
          "md:text-[72px] md:leading-[98px] md:tracking-[7.2px]",
          "xl:text-[128px] xl:tracking-[12.8px]"
        )}
      >
        HISTORY
      </div>

      <div
        className={clsx(
          "mb-17 px-[20px] pt-[37px] text-right text-1.5xl  font-bold ",
          "md:mb-[50px] md:px-[30px] md:pt-[58px]",
          "xl:absolute xl:left-[52vw] xl:top-[229px] xl:mb-[70px] xl:p-0 xl:text-left xl:text-3xl"
        )}
      >
        <span className="text-[20px] md:text-[24px] md:leading-[30px] xl:text-[32px] xl:leading-[40px]">
          懸樋工務店の
        </span>

        <br />
        <span className="text-2xl md:text-[32px] md:leading-[30px] xl:text-[40px] xl:leading-[60px]">
          歴史と実績
        </span>
      </div>

      <div
        className={clsx(
          "flex w-full flex-col gap-[50px] bg-card-background-primary pb-[50px] ",
          "md:gap-[75px] md:pb-[75px]",
          "xl:hidden"
        )}
      >
        <div className="relative  w-full">
          <picture>
            <source
              media="(max-width: 576px)"
              srcSet="/top/kakehi_lp_top_exterior_sp.jpg"
              type="image/jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/top/kakehi_lp_top_exterior_tablet.jpg"
              type="image/jpg"
            />
            <img src="/top/kakehi_lp_top_page_exterior.jpg" alt="exterior" />
          </picture>
        </div>

        <div className="flex flex-col gap-[20px] px-[20px] md:px-[15.2278%]">
          <div className="flex flex-row">
            <div
              className={clsx(
                "w-full bg-white px-[26px] py-9 text-md  font-normal leading-sm  ",
                "md:px-[40px] md:py-[30px] md:text-[15px] md:leading-[30px]",
                "xl:py-[15px] xl:font-[350]"
              )}
            >
              1954年の創業以来、地域に根差す私たちは、工場やオフィス、公共施設などたくさんの建物を建築してきました。これからもお客様にとって大切なものと向き合い、鳥取を彩り続けます。
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[161px] left-0 hidden xl:block">
        <div className="relative h-[481px] w-[50vw]">
          <Image
            src="/top/kakehi_lp_top_page_exterior.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="hidden pt-[283px] xl:block">
        <div className="ml-[10vw] bg-card-background-primary pb-[161px] pr-[107px] pt-[109px]">
          <div className="ml-[40vw] flex flex-col gap-[14px] pl-[14px]">
            <div className="flex flex-row">
              <div className="-gg w-full bg-white px-[66.36px] py-[36px] text-[19px] font-[350] leading-[32px] md:leading-[36px]">
                1954年の創業以来、地域に根差す私たちは、工場やオフィス、公共施設などたくさんの建物を建築してきました。これからもお客様にとって大切なものと向き合い、鳥取を彩り続けます。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
