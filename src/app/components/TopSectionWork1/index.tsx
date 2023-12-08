import Image from "next/image";
import { TopSectionWorkCard } from "../TopSectionWorkCard";

export default function TopSectionWork1() {
  return (
    <div className="relative mt-33 xl:mt-17">
      <div className="absolute right-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section xl:text-[128px] xl:tracking-[12.8px]">
        advantages
      </div>

      <div className="mb-17 px-[20px] pt-[37px] text-right text-1.5xl font-bold xl:absolute xl:left-[52vw] xl:top-[229px] xl:mb-[70px] xl:p-0 xl:text-left xl:text-3xl">
        システム建築が
        <br />
        <span className="text-2xl xl:text-[40px]">
          工場・倉庫に最適{" "}
          <span className="text-1.5xl xl:text-3xl">な理由</span>
        </span>
      </div>

      <div className="flex w-full flex-col gap-[50px] bg-card-background-primary pb-17 xl:hidden xl:pb-[41px]">
        <div className="relative h-[800px] w-full">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcSet="/top/kakehi_lp_top_advantages_sp.jpg"
              type="image/jpg"
            />
            <Image
              src="/advantages.jpg"
              alt="advantages"
              layout="fill"
              objectFit="cover"
            />
          </picture>
        </div>

        <div className="flex flex-col gap-[20px] px-[20px]">
          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/advantage-1.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">ローコスト</span>
            </div>
            <div className="flex w-full items-center bg-white px-9 py-9 text-[15px] font-normal leading-sm xl:py-5 xl:font-[350]">
              部材の標準化と軽量化を追求し、コスト削減を実現しました。初期工程から高精度の見積りが可能な点も特徴のひとつです。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/advantage-2.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">高品質</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-9 text-[15px]  font-normal leading-sm xl:py-[15px] xl:font-[350]">
              標準化された部材は安定した品質を確保し、耐震性と耐久性に優れています。屋根断熱性能は高層ビルにも用いられる外壁材ALCの約2倍を誇ります。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/advantage-3.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">大空間</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-9 text-[15px] font-normal leading-sm xl:py-[15px] xl:font-[350]">
              橋梁などに使用される高張力材を採用し、最大無柱スパン60mを実現できます。さらに、中間柱を設けることで最大120mの大空間の構築も可能です。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] text-lg font-bold text-white">
              <Image
                src="/background/advantage-4.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">短工期</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-9 text-[15px] font-normal leading-sm xl:py-[15px] xl:font-[350]">
              部材のストックが可能なため、材料の手配や製作におけるタイムロスがありません。生産システムも標準化されており、在来工法に比べて約20％工期を短縮できます。
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
              部材の標準化と軽量化を追求し、コスト削減を実現しました。初期工程から高精度の見積りが可能な点も特徴のひとつです。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/advantage-2.png"
              textImage="高品質"
              alt="advantages"
            >
              標準化された部材は安定した品質を確保し、耐震性と耐久性に優れています。屋根断熱性能は高層ビルにも用いられる外壁材ALCの約2倍を誇ります。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/advantage-3.png"
              textImage="大空間"
              alt="advantages"
            >
              橋梁などに使用される高張力材を採用し、最大無柱スパン60mを実現できます。さらに、中間柱を設けることで最大120mの大空間の構築も可能です。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/advantage-4.png"
              textImage="短工期"
              alt="advantages"
            >
              部材のストックが可能なため、材料の手配や製作におけるタイムロスがありません。生産システムも標準化されており、在来工法に比べて約20％工期を短縮できます。
            </TopSectionWorkCard>
          </div>
        </div>
      </div>
    </div>
  );
}
