import Image from "next/image";
import React from "react";
import { TopSectionWorkCard } from "../TopSectionWorkCard";

export default function TopSectionWork1() {
  return (
    <div className="relative mt-[50px]">
      <div className="absolute right-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section xl:text-[128px] xl:tracking-[12.8px]">
        advantages
      </div>

      <div className="mb-[70px] px-[20px] pt-[37px] text-right font-noto-sans-jp text-2xl font-bold xl:absolute xl:left-[52vw] xl:top-[229px] xl:p-0 xl:text-left xl:text-3xl">
        システム建築が
        <br />
        <span className="text-2.5xl xl:text-[40px]">
          工場・倉庫に最適 <span className="text-3xl">な理由</span>
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
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-1.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">ローコスト</span>
            </div>
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              部材の標準化と少部材化を図り、コスト削減を実現。蓄積されたデータを基に、初期過程から高精度の見積りが可能です。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-2.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">高品質</span>
            </div>
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              部材と工法の標準化により品質の安定性を確保。屋根断熱性能は高層ビルにも用いられる外壁材ALCの約2倍。耐震性や耐久性にも優れています。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-3.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">大空間</span>
            </div>
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              橋梁などに使用される高張力材を採用し、最大無柱スパン60mを実現。さらに、中間柱を設けることで最大120mの大空間の構築も可能です。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/advantage-4.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">短工期</span>
            </div>
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              設計から施工までの工程をシステム化。在来工法に比べ、工期をおよそ15%〜20%短縮できます。
              <br />
              ※建物の仕様による{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[161px] left-0 hidden xl:block">
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
            <TopSectionWorkCard
              image="/background/advantage-1.png"
              textImage="ローコスト"
              alt="advantages"
            >
              部材の標準化と少部材化を図り、コスト削減を実現。蓄積されたデータを基に、初期過程から高精度の見積りが可能です。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/advantage-2.png"
              textImage="高品質"
              alt="advantages"
            >
              部材と工法の標準化により品質の安定性を確保。屋根断熱性能は高層ビルにも用いられる外壁材ALCの約2倍。耐震性や耐久性にも優れています。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/advantage-3.png"
              textImage="大空間"
              alt="advantages"
            >
              橋梁などに使用される高張力材を採用し、最大無柱スパン60mを実現。さらに、中間柱を設けることで最大120mの大空間の構築も可能です。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/advantage-4.png"
              textImage="短工期"
              alt="advantages"
            >
              設計から施工までの工程をシステム化。在来工法に比べ、工期をおよそ15%〜20%短縮できます。
              <br />
              ※建物の仕様による
            </TopSectionWorkCard>
          </div>
        </div>
      </div>
    </div>
  );
}
