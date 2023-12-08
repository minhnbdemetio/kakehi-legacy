import Image from "next/image";
import React from "react";

export default function TopSectionWork3() {
  return (
    <div className="relative mt-33 xl:mt-17">
      <div className="absolute right-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section xl:text-[128px] xl:tracking-[12.8px]">
        HISTORY
      </div>

      <div className="mb-17 px-[20px] pt-[37px] text-right text-1.5xl  font-bold xl:absolute xl:left-[52vw] xl:top-[229px] xl:mb-[70px] xl:p-0 xl:text-left xl:text-3xl">
        懸樋工務店の
        <br />
        <span className="text-2xl xl:text-[40px]">歴史と実績</span>
      </div>

      <div className="flex w-full flex-col gap-[50px] bg-card-background-primary pb-[50px] xl:hidden">
        <div className="relative h-[800px] w-full">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcSet="/top/kakehi_lp_top_exterior_sp.jpg"
              type="image/jpg"
            />
            <Image
              src="/top/kakehi_lp_top_page_exterior.jpg"
              alt="advantages"
              layout="fill"
              objectFit="cover"
            />
          </picture>
        </div>

        <div className="flex flex-col gap-[20px] px-[20px]">
          <div className="flex flex-row">
            <div className="w-full bg-white px-[26px] py-9 text-[15px]  font-normal leading-sm xl:py-[15px] xl:font-[350] ">
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
