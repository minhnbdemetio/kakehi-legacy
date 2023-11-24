import Image from "next/image";
import React from "react";

export default function TopSectionWork3() {
  return (
    <div className="relative mt-[50px]">
      <div className="absolute right-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section xl:text-[128px] xl:tracking-[12.8px]">
        HISTORY
      </div>

      <div className="mb-[70px] px-[20px] pt-[37px] text-right  text-2xl font-bold xl:absolute xl:left-[52vw] xl:top-[229px] xl:p-0 xl:text-left xl:text-3xl">
        懸樋工務店の
        <br />
        <span className="text-2.5xl xl:text-[40px]">歴史と実績</span>
      </div>

      <div className="flex w-full flex-col gap-[50px] bg-card-background-primary pb-[50px] xl:hidden">
        <div className="relative h-[800px] w-full">
          <Image
            src="/top/kakehi_lp_top_page_exterior.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col gap-[20px] px-[20px]">
          <div className="flex flex-row">
            <div className="w-full bg-white px-[26px] py-[15px]  text-[15px] font-[350] leading-sm">
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
              <div className="-gg w-full bg-white px-[66.36px] py-[36px] text-[19px] font-[350] leading-[32px]">
                1954年の創業以来、地域に根差す私たちは、工場やオフィス、公共施設などたくさんの建物を建築してきました。これからもお客様にとって大切なものと向き合い、鳥取を彩り続けます。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
