import Image from "next/image";
import React from "react";
import { TopSectionWorkCard } from "../TopSectionWorkCard";
import clsx from "clsx";

export default function TopSectionWork2() {
  return (
    <div className="relative mt-33 xl:mt-17">
      <div className="absolute left-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section xl:text-[128px] xl:tracking-[12.8px]">
        STRENGTH
      </div>

      <div
        className={clsx(
          "mb-17 px-[23px] pt-[37px] text-left text-1.5xl font-bold",
          "xl:absolute xl:left-[140px] xl:top-[229px] xl:mb-[70px] xl:p-0 xl:text-left xl:text-3xl"
        )}
      >
        懸樋工務店の強み
        <br />
        <span className="text-2xl xl:text-[40px]">
          一貫したサービス{" "}
          <span className="text-1.5xl xl:text-3xl">の提供</span>
        </span>
      </div>

      <div className="flex w-full flex-col gap-[50px] bg-card-background-primary pb-17 xl:hidden xl:pb-[41px]">
        <div className="relative h-[800px] w-full">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcSet="/top/kakehi_lp_top_strength_sp.jpg"
              type="image/jpg"
            />
            <Image
              src="/top/kakehi_lp_top_page_strength.jpg"
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
                src="/background/strength-1.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">土地探し</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-9 text-[15px]  font-normal leading-sm xl:py-[15px] xl:font-[350]">
              宅地建物取引士の資格を有するスタッフが、土地探しからお手伝いいたします。立地条件や地域環境など、ご希望の条件をお聞かせください。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/strength-2.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">設計</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-9 text-[15px]  font-normal leading-sm xl:py-[15px] xl:font-[350]">
              設計部を設けた弊社には、10名もの一級建築士が在籍しています。お客様との入念なヒアリングを基に、最適な工場・倉庫を設計いたします。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/strength-3.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">施工</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-9 text-[15px]  font-normal leading-sm xl:py-[15px] xl:font-[350]">
              住宅からビル・工場・商業施設まで、あらゆる建物の建設で得られた豊富な経験と実績を基に、信頼性の高い建物を提供いたします。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] text-center  text-lg font-bold text-white">
              <Image
                src="/background/strength-4.png"
                alt="advantages"
                layout="fill"
                className="!top-1/2  !h-auto  !-translate-y-1/2 p-[10px]"
              />
              <span className="z-10">
                アフター
                <br />
                メンテナンス
              </span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-9 text-[15px]  font-normal leading-sm xl:py-[15px] xl:font-[350]">
              建物が完成してからがお客様との「本当のお付き合い」が始まると考えています。建物を長きにわたり安心してご利用いただけるよう、保守管理のお手伝いをいたします。
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[161px] right-0 hidden xl:block">
        <div className="relative h-[960px] w-[50vw]">
          <Image
            src="/top/kakehi_lp_top_page_strength.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="hidden pt-[283px] xl:block">
        <div className="mr-[10vw] bg-card-background-primary pb-[161px] pl-[107px] pt-[132px]">
          <div className="mr-[40vw] flex flex-col gap-[14px] pr-[14px]">
            <TopSectionWorkCard
              image="/background/strength-1.png"
              textImage="土地探し"
              alt="advantages"
            >
              宅地建物取引士の資格を有するスタッフが、土地探しからお手伝いいたします。立地条件や地域環境など、ご希望の条件をお聞かせください。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/strength-2.png"
              textImage="設計"
              alt="advantages"
            >
              設計部を設けた弊社には、10名もの一級建築士が在籍しています。お客様との入念なヒアリングを基に、最適な工場・倉庫を設計いたします。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/strength-3.png"
              textImage="施工"
              alt="advantages"
            >
              住宅からビル・工場・商業施設まで、あらゆる建物の建設で得られた豊富な経験と実績を基に、信頼性の高い建物を提供いたします。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/strength-4.png"
              textImage={`アフター\nメンテナンス`}
              alt="advantages"
            >
              建物が完成してからがお客様との「本当のお付き合い」が始まると考えています。建物を長きにわたり安心してご利用いただけるよう、保守管理のお手伝いをいたします。
            </TopSectionWorkCard>
          </div>
        </div>
      </div>
    </div>
  );
}
