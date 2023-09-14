import Image from "next/image";
import React from "react";

export default function TopSectionWork1() {
  return (
    <div className="relative mt-[50px]">
      <div className="text-section absolute right-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] xl:text-[128px] xl:tracking-[12.8px]">
        advantages
      </div>

      <div className="mb-[70px] px-[20px] pt-[37px] text-right font-noto-sans-jp text-2xl font-bold xl:absolute xl:left-[52vw] xl:top-[229px] xl:p-0 xl:text-left xl:text-3xl">
        システム建築が
        <br />
        <span className="text-2.5xl xl:text-[40px]">
          工場・倉庫に最適 な理由
        </span>
      </div>

      <div className="flex w-full flex-col gap-[50px] bg-card-background-primary pb-[41px] xl:hidden">
        <div className="relative h-[800px] w-full">
          <Image
            src="/advantages.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col gap-[20px] px-[20px]">
          <div className="flex flex-row">
            <div className="bg-pink-custom-2 relative flex min-w-[100px] items-center justify-center py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-1.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">ローコスト</span>
            </div>
            <div className="leading-sm w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal">
              屋根・母屋・フレームの一体化構造により、低コストを実現。要望に沿ったスピーディーな設計が可能です。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="bg-pink-custom-2 relative flex min-w-[100px] items-center justify-center py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-2.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">高品質</span>
            </div>
            <div className="leading-sm w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal">
              規格化された部材と工法を用いるシステム建築は、安心の品質保証。耐震性や耐久性にも優れています。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="bg-pink-custom-2 relative flex min-w-[100px] items-center justify-center py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-3.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">大空間</span>
            </div>
            <div className="leading-sm w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal">
              最大無柱スパン60m、中間柱有りで最大120mの大空間を実現。天井走行クレーンの設置にも対応します。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="bg-pink-custom-2 relative flex min-w-[100px] items-center justify-center py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-4.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">短工期</span>
            </div>
            <div className="leading-sm w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal">
              合理的な設計・生産システムにより、在来工法に比べて、工期を15％～20％短縮できます。
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[108px] hidden xl:block">
        <div className="relative h-[964px] w-[50vw]">
          <Image
            src="/advantages.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="hidden pt-[283px] xl:block">
        <div className="ml-[10vw] bg-card-background-primary pb-[161px] pr-[105px] pt-[146px]">
          <div className="ml-[40vw] flex flex-col gap-[14px] pl-[14px]">
            <div className="flex flex-row">
              <div className="bg-pink-custom-2 relative flex min-w-[150px] items-center justify-center px-[15px] py-[57px] font-noto-sans-jp text-1.5xl font-bold text-white">
                <Image
                  src="/background/advantage-1.png"
                  alt="advantages"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="z-10">ローコスト</span>
              </div>
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                屋根・母屋・フレームの一体化構造により、低コストを実現。要望に沿ったスピーディーな設計が可能です。
              </div>
            </div>

            <div className="flex flex-row">
              <div className="bg-pink-custom-2 relative flex min-w-[150px] items-center justify-center px-[15px] py-[57px] font-noto-sans-jp text-1.5xl font-bold text-white">
                <Image
                  src="/background/advantage-2.png"
                  alt="advantages"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="z-10">高品質</span>
              </div>
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                規格化された部材と工法を用いるシステム建築は、安心の品質保証。耐震性や耐久性にも優れています。
              </div>
            </div>

            <div className="flex flex-row">
              <div className="bg-pink-custom-2 relative flex min-w-[150px] items-center justify-center px-[15px] py-[57px] font-noto-sans-jp text-1.5xl font-bold text-white">
                <Image
                  src="/background/advantage-3.png"
                  alt="advantages"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="z-10">大空間</span>
              </div>
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                最大無柱スパン60m、中間柱有りで最大120mの大空間を実現。天井走行クレーンの設置にも対応します。
              </div>
            </div>

            <div className="flex flex-row">
              <div className="bg-pink-custom-2 relative flex min-w-[150px] items-center justify-center px-[15px] py-[57px] font-noto-sans-jp text-1.5xl font-bold text-white">
                <Image
                  src="/background/advantage-3.png"
                  alt="advantages"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="z-10">短工期</span>
              </div>
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                合理的な設計・生産システムにより、在来工法に比べて、工期を15％～20％短縮できます。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
